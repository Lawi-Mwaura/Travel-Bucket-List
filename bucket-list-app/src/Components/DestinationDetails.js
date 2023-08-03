import React, { useState, useEffect } from "react";

const DestinationsList = () => {
  const [destinations, setDestinations] = useState([]);
  const [showDetails, setShowDetails] = useState({}); // Initialize with an empty object

  const handleImageClick = (destination) => {
    setShowDetails((prevShowDetails) => ({
      ...prevShowDetails,
      [destination.id]: !prevShowDetails[destination.id]
    }));
  };

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
            <img
              src={destination.image}
              alt={destination.name}
              onClick={() => handleImageClick(destination)} // Pass the destination object
            />
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            {showDetails[destination.id] && (
              <div>
                <h3>Popular Attractions:</h3>
                <ul>
                  {destination.popularAttractions &&
                    destination.popularAttractions.map((attraction, index) => (
                      <li key={index}>{attraction}</li>
                    ))}
                </ul>
                <p>
                  <strong>Best Time to Visit:</strong>{" "}
                  {destination.bestTimeToVisit}
                </p>
                <p>
                  <strong>Safety Tips:</strong> {destination.safetyTips}
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationsList;
