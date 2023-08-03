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
      return (
  <div className="container">
    <div className="row">
      {destinations.map((destination) => (
        <div key={destination.id} className="col-md-3 mb-3">
          <div className="card">
            <img src={destination.image} className="card-img-top" alt="..." width="150px" />
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">{destination.name}</p>
              <p className="card-text">{destination.description}</p>
              <button className="btn btn-success m-3">Add to bucket list</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

    </div>
  );
};

export default DestinationsList;
