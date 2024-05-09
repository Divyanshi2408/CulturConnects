import React from "react";
import './PropertyCard.css'
import {AiFillHeart} from 'react-icons/ai'
import {truncate} from 'lodash'
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";

const PropertyCard = ({card}) => {
  const navigate = useNavigate();

  // Function to format the date string
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    // Format the date as desired (e.g., "Month Day, Year")
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }

  return (
    <div className="flexColStart r-card"
    onClick={()=>navigate(`../properties/${card.id}`)}
    >
      <Heart id={card?.id}/>
      <img src={card.image} alt="home" />
      <span className="secondaryText r-price" style={{ fontSize: "1.0em" }}>
  {/* Format the date using the formatDate function */}
          <span>{formatDate(card.date1)} to {formatDate(card.date2)}</span>
      </span>
      <span className="primaryText">{truncate(card.title, {length: 15})}</span>
      <span className="secondaryText" style={{ fontSize: "1.0em" }}>{truncate(card.description, {length: 80})}</span>
    </div>
  );
};

export default PropertyCard;
