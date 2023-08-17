import React from 'react';
import './RatingStars.css';

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const starColorClass = rating > 4 ? 'green-star' : 'yellow-star';

  return (
    <div className={`rating-stars ${starColorClass}`}>
      <span className="star">★</span>
      <span className="rating-value">{rating.toFixed(1)}</span>
    </div>
  );
};

export default RatingStars;
