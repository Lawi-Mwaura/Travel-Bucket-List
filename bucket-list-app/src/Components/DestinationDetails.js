import React from "react";
import { useParams, Link } from "react-router-dom";

const DestinationDetails = ({ destinations, onBackButtonClick, onAddToBucketList }) => {
  const { id } = useParams();

  const selectedDestination = destinations.find(
    (dest) => dest.id === parseInt(id)
  );

  const handleBackButtonClick = () => {
    onBackButtonClick();
  };

  const handleAddToBucketList = () => {
    onAddToBucketList(selectedDestination); // Call the onAddToBucketList function to add the destination to the bucket list
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      {selectedDestination ? (
        <>
          <img
            src={selectedDestination.image}
            className="card-img-top"
            alt={selectedDestination.name}
          />
          <div className="card-body">
            <h5 className="card-title">{selectedDestination.name}</h5>
            <p className="card-text">{selectedDestination.description}</p>
            <h3>Popular Attractions</h3>
            <ul>
              {selectedDestination.popularAttractions.map((attraction) => (
                <li key={attraction}>{attraction}</li>
              ))}
            </ul>
            <p>Best Time to Visit: {selectedDestination.bestTimeToVisit}</p>
            <p>Safety Tips: {selectedDestination.safetyTips}</p>
            <button onClick={handleBackButtonClick} className="btn btn-primary">Back</button>
            <button onClick={handleAddToBucketList} className="btn btn-primary">Add to Bucket List</button>
          </div>
        </>
      ) : (
        <p>No destination found.</p>
      )}
    </div>
  );
};

export default DestinationDetails;
