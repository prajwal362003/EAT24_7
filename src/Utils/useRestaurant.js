import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(+resId);
      const json = await response.json();
      console.log(json.data);
      setRestaurant(json.data.cards[0].card.card.info); // Setting restaurant info
    } catch (error) {
      console.error("Error fetching restaurant information:", error);
    }
  }

  // return restaurant data
  return restaurant;
};

export default useRestaurant;
