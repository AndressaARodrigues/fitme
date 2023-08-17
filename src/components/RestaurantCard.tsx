import React from 'react';
import './RestaurantCard.css';
import RatingStars from './RatingStars';
import DeliveryIcon from '../assets/Group.png';

interface RestaurantCardProps {
  name: string;
  cuisine: string;
  rating: number;
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
        <RatingStars rating={rating}/>
      </div>
      <p className="restaurant-delivery-time">
        <img src={DeliveryIcon} alt="Delivery Icon" className="delivery-icon" />
        {deliveryTime}
      </p>
    </div>
  );
};

export default RestaurantCard;
