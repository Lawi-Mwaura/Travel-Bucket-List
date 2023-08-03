import React from "react";

const DestinationDetails = ({ destination, onBackButtonClick }) => {
  return (
    <div>
      <h2>{destination.name}</h2>
      <img src={destination.image} alt={destination.name} />
      <p>{destination.description}</p>
      <h3>Popular Attractions</h3>
      <ul>
        {destination.popularAttractions.map((attraction) => (
          <li key={attraction}>{attraction}</li>
        ))}
      </ul>
      <p>Best Time to Visit: {destination.bestTimeToVisit}</p>
      <p>Safety Tips: {destination.safetyTips}</p>
      <button onClick={onBackButtonClick}>Back</button>
    </div>
  );
};

export default DestinationDetails;

