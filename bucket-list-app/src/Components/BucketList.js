import React from "react";
import { Link } from "react-router-dom";

const BucketList = ({ bucketList }) => {
  return (
    <div>
      <h2>Bucket List</h2>
      {bucketList.length > 0 ? (
        <ul>
          {bucketList.map((destination) => (
            <li key={destination.id}>
              <Link to={`/destination/${destination.id}`}>
                {destination.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your bucket list is empty.</p>
      )}
    </div>
  );
};

export default BucketList;
