import React from "react";

const Shimmer = () => {
  return (
    
    <div className="restaurant-list">
      {Array(5).fill("").map((e,index) =>(
        <div key = {index} className="shimmer-card"></div>
      ))}
    </div>
    
  );
};

// const Shimmer = () => {
//   return (
//     <h2>Looking for the Restaurants</h2>
//   )
// }

export default Shimmer;