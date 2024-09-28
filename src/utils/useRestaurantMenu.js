import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (resId) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setMenuData(json);
  };
  return menuData;
};

export default useRestaurantMenu;
