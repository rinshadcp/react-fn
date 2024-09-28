import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  const { loggedInUser } = useContext(userContext);

  return (
    <div className="flex justify-between border rounded-lg items-center p-4 m-2 h-24">
      <div className="logo-container">
        <Link to="/">
          <img className="px-4 py-4 w-24 rounded-2xl" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex justify-between m-4 p-4">
          <li className="m-4 p-2">
            <h1 className="border bg-gray-50 rounded-lg ">
              Online Status: {onlineStatus ? "✅" : "⭕"}
            </h1>
          </li>
          <li className="m-4 p-2   hover:bg-slate-300 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="m-4 p-2  hover:bg-slate-300 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="m-4 p-2  hover:bg-slate-300 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="m-4 p-2  hover:bg-slate-300 cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li>
          <Link to="/cart">
            <li className="m-4 p-2 hover:bg-slate-300 cursor-pointer font-bold text-xl">
              Cart - ({cartItems.length}) items
            </li>
          </Link>
          <button
            className={`m-4 p-2 rounded-lg ${
              btnName === "Login" ? "bg-green-300" : "bg-red-300"
            }`}
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="m-4 p-2 hover:bg-slate-300 cursor-pointer font-bold">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
