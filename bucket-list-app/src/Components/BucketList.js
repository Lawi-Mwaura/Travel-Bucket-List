import React, { useState, useEffect } from "react";

const BucketList = () => {
  const [bucketList, setBucketList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/destinations")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBucketList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching bucket list:", error);
        setLoading(false);
      });
  }, []);

  const handleViewDetails = (destinationId) => {
    // Implement your logic to view the details of the selected destination
    console.log("View details of destination with ID:", destinationId);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="sidebar">
      <h2>My Travel Bucket List</h2>
      {bucketList.length === 0 ? (
        <p>Your bucket list is empty. Start adding destinations!</p>
      ) : (
        <ul>
          {bucketList.map((destination) => (
            <li key={destination.id}>
              <img src={destination.image} alt={destination.name} />
              <h3>{destination.location}</h3>
              <p>{destination.description}</p>
              <button onClick={() => handleViewDetails(destination.id)}>
                add bucketList
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BucketList;