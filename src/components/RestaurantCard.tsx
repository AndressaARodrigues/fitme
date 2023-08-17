import React from 'react';
import './RestaurantCard.css';

interface RestaurantCardProps {
  name: string;
  cuisine: string;
  rating: string;
  deliveryTime: string;
  image: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name, 
  cuisine, 
  rating, 
  deliveryTime,
  image, 
}) => {
  return (
    <div className="restaurant-card">
      <img src={image} alt={name} className="restaurant-image" />
      <h4 className="restaurant-name">{name}</h4>
      <div className="restaurant-info">
        <p className="restaurant-cuisine">{cuisine}</p>
        <p className="restaurant-ratings">{rating}</p>  
      </div>
      <p className="restaurant-delivery-time">{deliveryTime}</p>
    </div>
  );
};

export default RestaurantCard;
