import {RestaurantList} from "../constants";
import {RestaurantCard} from "./restaurantCards"
import {useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
//  no key(not acceptable) << index key(use only if you dont have anything) << unique key(best practice)  => as a second parameter for map function

const filterData = (searchText,restaurant) =>{
  const filterData = restaurant.filter((restaurant) => 
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData; 
}

const Body = () => {

  // Creating a normal variable in javascript
  // const searchText = "Pizza-Hut";

  // searchText is a local state variable
  // Just creating a normal variable in react

  // returns an array with the value of searchText and a function to update that value.
  // useState() takes one argument, which is the initial value for the state variable.
  /// returns = [variable name , function to update the variable]
  const [searchText,setSearchText] = useState("");    // useState() - Used To create state variables
  const [filteredrestaurants,setFilteredRestaurants] = useState([]);
  const [allRestaurants,setAllRestaurants] = useState([]);

  // empty dependency array => once after render
  // dependency array[searchText] => once after initial render + everytime after rerender(when my searchtext changes)
  useEffect(() => {
    // Fetch restaurant data
    async function fetchRestaurants() {
      try {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await response.json();
        const restaurantData = jsonData.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        // let filteredResData = jsonData.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setAllRestaurants(restaurantData);
        setFilteredRestaurants(restaurantData); // Initially, set filtered restaurants to all restaurants
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    }
    fetchRestaurants();
  }, []); // Empty dependency array to run only once on component mount
  
  // console.log("Restaurants array:", restaurants); // Log the restaurants array

  // Conditional Rendering
  // If the restaurant is empty => shimmer UI
  // If the restaurant has data => actual data

  const handleSearch = () => {
    const filteredData = filterData(searchText, allRestaurants);
    setFilteredRestaurants(filteredData);
  };
  if (!allRestaurants) return null;

  // if (filteredrestaurants.length ===0) return <h1>No  Restaurants Found</h1>;
  return (allRestaurants.length === 0) ? <Shimmer/ > : (
    <>
    <div className="searchBox">
  <input type="text" placeholder="Search here" value = {searchText} 
    onChange = {(e)=>{

      // e.target.value = whatever you write in input
      setSearchText(e.target.value)
;    }}
  />
      <button 
      className="btn" 
      onClick={()=>{
        // need to filter the data
        const data = filterData(searchText , allRestaurants);      // search from the restaurants

        // update the state- restaurants
        setFilteredRestaurants(data);
      }}>
        Search
      </button>
    </div>
    <div className="restaurant-cards">
      {
         allRestaurants.map((restuarant) => {
          return(
          <Link to={"/restaurant/" + restuarant.info.id} key={restuarant.info.id}><RestaurantCard {...restuarant.info}/></Link>
        );
        })
      }
    </div>
    </>
  );
}; 

export default Body;