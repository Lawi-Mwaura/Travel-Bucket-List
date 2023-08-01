/// DestinationsList.js
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
            <button>Add to Bucket List</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationsList;
