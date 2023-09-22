import React from 'react';
import './Place.css'
const Place = ({ name, description, image, rating }) => {
  return (
    <div className="place">
      <img src={image} alt={name} width="300" height="225"/>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Rating: {rating}/5</p>
    </div>
  );
};

export default Place;