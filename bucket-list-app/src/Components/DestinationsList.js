import React, { useState, useEffect } from "react";

const DestinationCard = ({ destination, onAddToBucketList, onSelectDestination }) => {
  return (
    <div className="col-md-3 mb-3">
      <div className="card">
        <img src={destination.image} className="card-img-top" alt={destination.name} width="150px" />
        <div className="card-body">
          <h5 className="card-title">{destination.name}</h5>
          <p className="card-text">{destination.description}</p>
          {onAddToBucketList && (
            <button className="btn btn-success m-3" onClick={() => onAddToBucketList(destination)}>
              Add to bucket list
            </button>
          )}
          {onSelectDestination && (
            <button onClick={() => onSelectDestination(destination)}>
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const DestinationsList = ({ onSelectDestination }) => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/destinations")
      .then((response) => response.json())
      .then((data) => setDestinations(data));
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-4">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            onSelectDestination={onSelectDestination}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationsList;
