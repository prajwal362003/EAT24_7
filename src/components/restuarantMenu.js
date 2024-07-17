import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { img_cdn_url } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../Utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // const [restaurant, setRestaurant] = useState({});

  const restaurant = useRestaurant(resId);

  if (!restaurant) {
    return <Shimmer />;
  }

  return (
    <div className="restaurantMenu">
      <div className="generalResInfo">
        <h1>Restaurant Id: {resId}</h1>
        <h2>Restaurant Name: {restaurant?.name}</h2>
        <img src={img_cdn_url + restaurant?.cloudinaryImageId} />
        <h3>
          Address :- {restaurant?.areaName} {restaurant.city}
        </h3>
        <h3>Cuisines: {restaurant?.cuisines}</h3>
        <h3>Ratings :-{restaurant?.avgRating}</h3>
      </div>
    </div>
  );
};

export default RestaurantMenu;
