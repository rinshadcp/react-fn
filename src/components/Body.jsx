import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withPopularLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Body = () => {
  const [filterResData, setFilterResData] = useState([]);
  const [searchData, setSearchData] = useState("");

  //context api

  const { userName, setUsername } = useContext(userContext);
  const onlineStatus = useOnlineStatus();
  const resData = useRestaurantList();
  const WithPopularLabelComponent = withPopularLabel(RestaurantCard);
  console.log(resData, "....");
  useEffect(() => {
    if (resData) {
      setFilterResData(resData);
    }
  }, [resData]);
  if (onlineStatus === false)
    return (
      <h1>You are not online ,please check your network connection !!!</h1>
    );
  return filterResData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-slate-50">
      <div className="">
        <input
          className="border border-solid  rounded-lg bg-slate-50 m-4 p-2"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        ></input>
        <button
          className="m-2 p-2 rounded-lg font-bold border border-solid shadow-md bg-gray-400"
          onClick={() => {
            searchedRestaurant = resData.filter((res) =>
              res?.info?.name.toLowerCase().includes(searchData.toLowerCase())
            );
            setFilterResData(searchedRestaurant);
          }}
        >
          Search
        </button>
        <button
          className="border border-solid rounded-lg bg-gray-400 p-2 m-2"
          onClick={() => {
            filteredRes = resData.filter((res) => res.info?.avgRating > 4.2);
            setFilterResData(filteredRes);
          }}
        >
          Top Rated Restaurants
        </button>
        <input
          className="border border-black rounded-lg"
          value={userName}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>

        <div className="flex flex-wrap">
          {filterResData.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              {restaurant?.info?.avgRating >= 4.2 ? (
                <WithPopularLabelComponent resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
