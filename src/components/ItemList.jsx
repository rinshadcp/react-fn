import { useState } from "react";
import { IMG_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ contents }) => {
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="p-2">
      {contents.map((content) => (
        <div
          key={content?.card?.info?.id}
          className="border-b-2 border-solid border-gray-100 flex flex-justify-between items-center p-2"
        >
          <div className="w-9/12 m-2 ">
            <h1 className="font-bold  m-2 text-start">
              {content?.card?.info?.name}
              <span className="ml-3">
                - Rs.{content?.card?.info?.price / 100}
              </span>
            </h1>
            <p className="text-start m-2">{content?.card?.info?.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute  bg-black rounded-lg text-white">
              <button
                onClick={() => {
                  handleAddItems(content);
                }}
              >
                Add +
              </button>
            </div>
            <img
              className="w-24 rounded-lg"
              src={IMG_URL + content?.card?.info?.imageId}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
