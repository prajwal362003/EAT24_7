import {img_cdn_url} from "../constants"

export const RestaurantCard = ({name,cuisines,areaName,cloudinaryImageId}) => {
  // console.log(props);
  return (
    <div className="card">
     <img src={img_cdn_url
     +cloudinaryImageId} />
     <h2>{name}</h2>
     <h3>{cuisines.join(",")}</h3>
     <h4>{areaName}</h4>
    </div>
  );
};