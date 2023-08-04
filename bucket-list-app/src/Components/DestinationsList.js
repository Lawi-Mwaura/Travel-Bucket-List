import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const DestinationsList = ({ onSelectDestination }) => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/destinations")
      .then((response) => response.json())
      .then((data) => setDestinations(data));
  }, []);

  return (
    <div>
      <Search destinations={destinations} /> {/* Search bar added here */}
      <h2>Travel Destinations</h2>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="card"
            style={{ width: "18rem", margin: "10px", position: "relative" }}
          >
            <img
              src={destination.image}
              className="card-img-top"
              alt={destination.name}
            />
            <div className="card-body">
              <h5 className="card-title">{destination.name}</h5>
              <p className="card-text">{destination.description}</p>
              <Link
                to={`/destination/${destination.id}`}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                }}
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsList;
