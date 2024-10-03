import React from 'react';

// Custom Next Arrow
const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

// Custom Prev Arrow
const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

export { NextArrow, PrevArrow };
