import { IMG_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines } =
    props?.resData?.info;
  return (
    <div className=" m-4 p-4  w-60 border border-solid bg-slate-100 rounded-lg hover:bg-slate-200 h-[517.453px]">
      <img className=" rounded-lg w-52" src={IMG_URL + cloudinaryImageId} />
      <h3 className="text-center font-bold m-2 p-1">{name}</h3>
      <h1 className="text-center font-normal m-2 p-1"> {avgRating} Stars</h1>
      <h2 className="text-center font-bold m-2 p-1">{costForTwo}</h2>
      <h3 className="text-center font-normal m-2 p-1">{cuisines.join(", ")}</h3>
    </div>
  );
};

export const withPopularLabel = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 border border-solid  bg-red-300 rounded-lg">
          Popular
        </label>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
