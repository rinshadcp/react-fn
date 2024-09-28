import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { IMG_URL } from "../utils/constant";

const Cart = () => {
  const dispatch = useDispatch();
  const removeCart = () => {
    dispatch(removeItem());
  };
  const clearCarts = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return cartItems.length === 0 ? (
    <h1 className="font-bold text-center">No items</h1>
  ) : (
    <div className="text-center p-4  bg-slate-300 border rounded-lg  m-auto  w-6/12">
      <div>
        <button
          className="border border-solid rounded-lg m-2 font-bold bg-red-600 p-2 "
          onClick={clearCarts}
        >
          Clear all items
        </button>
      </div>
      {cartItems.map((content) => (
        <div
          data-testid="cart-item"
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
            <div className="absolute  bg-red-500 rounded-lg text-white">
              <button onClick={removeCart}>Remove</button>
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

export default Cart;
