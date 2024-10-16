import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const StarContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Star = styled(FaStar)`
  color: ${props => props.filled === "true" ? 'var(--primary-color)' : 'var(--bs-secondary)'};
  cursor: ${props => props.isclickable === "true" ? 'pointer' : 'default'};
  font-size: ${props => props.size}px;
`;

const StarRating = ({ rating, onRatingChange = null, size = 16 }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <StarContainer>
      {stars.map((star) => (
        <Star
          key={star}
          filled={(star <= rating).toString()}
          isclickable={(!!onRatingChange).toString()}
          onClick={() => onRatingChange && onRatingChange(star)}
          size={size}
        />
      ))}
    </StarContainer>
  );
};

export default StarRating;
