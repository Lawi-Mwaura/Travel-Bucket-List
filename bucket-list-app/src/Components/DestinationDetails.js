// import React from "react";

// const DestinationDetails = ({ destination, onBackButtonClick }) => {
//   return (
//     <div>
//       <h2>{destination.name}</h2>
//       <img src={destination.image} alt={destination.name} />
//       <p>{destination.description}</p>
//       <h3>Popular Attractions</h3>
//       <ul>
//         {destination.popularAttractions.map((attraction) => (
//           <li key={attraction}>{attraction}</li>
//         ))}
//       </ul>
//       <p>Best Time to Visit: {destination.bestTimeToVisit}</p>
//       <p>Safety Tips: {destination.safetyTips}</p>
//       <button onClick={onBackButtonClick}>Back</button>
//     </div>
//   );
// };

// export default DestinationDetails;

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
    <div>
      {selectedDestination ? (
        <>
          <h2>{selectedDestination.name}</h2>
          <img
            src={selectedDestination.image}
            alt={selectedDestination.name}
          />
          <p>{selectedDestination.description}</p>
          <h3>Popular Attractions</h3>
          <ul>
            {selectedDestination.popularAttractions.map((attraction) => (
              <li key={attraction}>{attraction}</li>
            ))}
          </ul>
          <p>Best Time to Visit: {selectedDestination.bestTimeToVisit}</p>
          <p>Safety Tips: {selectedDestination.safetyTips}</p>
          <button onClick={handleBackButtonClick}>Back</button>
          <button onClick={handleAddToBucketList}>Add to Bucket List</button>
        </>
      ) : (
        <p>No destination found.</p>
      )}
    </div>
  );
};

export default DestinationDetails;
