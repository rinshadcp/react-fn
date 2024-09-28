import { useEffect, useState } from "react";
import { LIST_RESTUARANTS } from "./constant";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(LIST_RESTUARANTS);
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return restaurantList;
};

export default useRestaurantList;
