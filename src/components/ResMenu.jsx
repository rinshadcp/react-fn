import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantItems from "./RestauarantItems";

const ResMenu = () => {
  const { resId } = useParams();
  const [showItems, setShowItems] = useState(null);

  const menuData = useRestaurantMenu(resId);

  if (menuData == null) return <Shimmer />;
  const filteredData =
    menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const { name, cuisines, avgRating, costForTwoMessage } =
    menuData?.data?.cards[2]?.card?.card?.info || {};

  return (
    <div className="">
      <div className="flex items-center justify-center m-4 "></div>
      <div className="text-center">
        <h1 className="font-bold">{name}</h1>
        <p className="font-normal m-2 ">
          {cuisines.join(", ")} -{costForTwoMessage}
        </p>
        {filteredData.map((item, index) => (
          <RestaurantItems
            key={item?.card?.card?.title}
            restaurantItems={item}
            showItems={index === showItems ? true : false}
            setShowItem={() => {
              setShowItems(index);
            }}
            setUpdate={(value) => {
              setShowItems(value);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ResMenu;
