import React, { useState, useEffect } from "react";

const BucketList = () => {
  const [bucketList, setBucketList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/bucketList")
      .then((response) => response.json())
      .then((data) => setBucketList(data));
  }, []);

  return (
    <div>
      <h2>My Travel Bucket List</h2>
      {bucketList.length === 0 ? (
        <p>Your bucket list is empty. Start adding destinations!</p>
      ) : (
        <ul>
          {bucketList.map((destination) => (
            <li key={destination.id}>
              <img
                src={destination.image}
                alt={destination.name}
              />
              <h3>{destination.location}</h3>
              <p>{destination.description}</p>
              <button>View Details</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BucketList;
