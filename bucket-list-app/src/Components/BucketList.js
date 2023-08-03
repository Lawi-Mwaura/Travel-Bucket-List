import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BucketList = () => {
  const [bucketList, setBucketList] = useState([]);

  useEffect(() => {
    // Fetch user's selected travel destinations from json-server and set them to the state
    fetch('http://localhost:3000/bucketList')
      .then((response) => response.json())
      .then((data) => setBucketList(data));
  }, []);

  return (
    <div>
      <h2>Bucket List</h2>
      {bucketList.map((destination) => (
        <div key={destination.id}>
          <img src={destination.imageUrl} alt={destination.name} />
          <h3>{destination.name}</h3>
          <p>{destination.description}</p>
          <Link to={`/destination/${destination.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default BucketList;
