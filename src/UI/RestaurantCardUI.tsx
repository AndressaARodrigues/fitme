import React from 'react';
import './RestaurantCardUI.css';

interface RestaurantCardUIProps {
  children: React.ReactNode;
}

const RestaurantCardUI: React.FC<RestaurantCardUIProps> = ({ children }) => {
  return (
    <div className="restaurant-card-ui">
      {children}
    </div>
  );
};

export default RestaurantCardUI;
