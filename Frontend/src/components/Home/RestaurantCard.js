import React from "react";
import { Link } from "@mui/material";
import './RestaurantCard.css';
import { IMG_CDN_URL } from "../../constants/constansts";
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
  id
}) => {
  const navigateTo = useNavigate();

  const handleQuickView = () => {
    navigateTo(`/restaurant/${id}`);
  };

  return (
    <div className='res-card'>
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h5>{name}</h5>
      <h6>{cuisines.join(", ")}</h6>
      <p>{area}</p>
      <div>
        <h5
          style={{
            alignItems: 'center',
            backgroundColor:
            avgRating >= 4 ? "#00c853" : avgRating < 2 ? "red" : "orange",
            width: "40px",
            height:"18px",
            border: "0px solid white",
            borderRadius: '5px',
            color: 'whitesmoke'
          }}
        >
          ⭐{avgRating}
        </h5>
        <h5>{lastMileTravelString}</h5>
        <h5>{costForTwoString}</h5>
      </div>
      <hr />
      <div className="linkDiv" style={{ textAlign: "center", alignItems: "center" }}>
        <Link style={{ textDecoration: 'none' }}>
          <button onClick={handleQuickView} style={{ border: 'none', borderRadius:'5px', cursor:'pointer' }}>Quick View</button>
        </Link>
      </div>
    </div>
  )
}

export default RestaurantCard;


