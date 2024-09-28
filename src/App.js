import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ResMenu from "./components/ResMenu";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const [userName, setUsername] = useState("");
  useEffect(() => {
    //api call to verify user auth and return username
    data = { userName: "Rcp" };
    setUsername(data.userName);
  }, []);
  return (
    <div className="app-container">
      <Provider store={appStore}>
        <userContext.Provider value={{ loggedInUser: userName, setUsername }}>
          <Header />
          <Outlet />
        </userContext.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <ResMenu /> },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
