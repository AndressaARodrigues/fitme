import React from 'react';
import './RestaurantCard.css';

interface RestaurantCardProps {
  image: string;
  name: string;
  cuisine: string;
  ratings: string;
  deliveryTime: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ image, name, cuisine, ratings, deliveryTime }) => {
  return (
    <div className="restaurant-card">
      <img src={image} alt={name} className="restaurant-image" />
      <h4 className="restaurant-name">{name}</h4>
      <div className="restaurant-info">
        <p className="restaurant-cuisine">{cuisine}</p>
        <p className="restaurant-ratings">{ratings}</p>  
      </div>
      <p className="restaurant-delivery-time">{deliveryTime}</p>
    </div>
  );
};

export default RestaurantCard;
