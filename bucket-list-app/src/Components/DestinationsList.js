import React, { useState, useEffect } from "react";

const DestinationsList = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/destinations")
      .then((response) => response.json())
      .then((data) => setDestinations(data));
  }, []);

  return (
    <div>
      <h1>Travel Bucket List</h1>
      <ul>
        {destinations.map((destination) => (
          <li key={destination.id}>
            <img src={destination.image} alt={destination.name} />
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <h3>Popular Attractions:</h3>
            <ul>
              {destination.popularAttractions &&
                destination.popularAttractions.map((attraction, index) => (
                  <li key={index}>{attraction}</li>
                ))}
            </ul>
            <p>
              <strong>Best Time to Visit:</strong> {destination.bestTimeToVisit}
            </p>
            <p>
              <strong>Safety Tips:</strong> {destination.safetyTips}
            </p>
            <button>Add to Bucket List</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationsList;
