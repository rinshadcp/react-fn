import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantItems = (props) => {
  const { restaurantItems, showItems, setShowItem, setUpdate } = props;
  console.log(restaurantItems?.card?.card?.itemCards, "....");

  return (
    <div className=" m-96 border border-solid bg-slate-200 rounded-lg my-2">
      <div
        className="flex justify-between items-center m-4 "
        onClick={() => {
          showItems === true ? setUpdatenpmnp(false) : setShowItem();
        }}
      >
        <span className="m-4 font-bold">
          {restaurantItems?.card?.card?.title} (
          {restaurantItems?.card?.card?.itemCards.length})
        </span>
        <span className="m-4">🔽</span>
      </div>
      {showItems && (
        <ItemList contents={restaurantItems?.card?.card?.itemCards} />
      )}
    </div>
  );
};

export default RestaurantItems;
