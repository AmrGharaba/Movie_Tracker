import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const Rating = ({ initialRating, onChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (newRating) => {
    setRating(newRating);
    onChange(newRating);
  };

  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          onClick={() => handleClick(index + 1)}
          style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}
        />
      ))}
    </div>
  );
};

export default Rating;
