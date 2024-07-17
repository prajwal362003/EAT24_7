import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM correctly
import Header from "./components/header";
import Body from "./components/Body";
import Footer from "./components/footer";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "../src/components/About";
import Profile from "./components/Profile";
import Error from "../src/components/Error";
import Contact from "../src/components/Contact";
import RestaurantMenu from "../src/components/restuarantMenu";
import "./styles.css";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      // Make about the children of AppLayout
      // When the route is / , body component will go in the Outlet
      // When the route is /contact, contact component will go in the Outlet,
      //& so on...
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // no need of a / here
            element: <Profile />,
          },
        ],
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },

  {
    errorElement: <Error />,
  },
]);

export default appRouter;
