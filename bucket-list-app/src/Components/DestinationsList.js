//  // DestinationsList.js
// import React, { useState, useEffect } from "react";

// const DestinationsList = ({ onSelectDestination }) => {
//   const [destinations, setDestinations] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/destinations")
//       .then((response) => response.json())
//       .then((data) => setDestinations(data));
//   }, []);

//   return (
//     <div>
//       <h2>Travel Destinations</h2>
//       {destinations.map((destination) => (
//         <div key={destination.id}>
//           <img src={destination.image} alt={destination.name} />
//           <h3>{destination.name}</h3>
//           <p>{destination.description}</p>
//           <button onClick={() => onSelectDestination(destination)}>
//             View Details
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DestinationsList;
 
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DestinationsList = ({ onSelectDestination }) => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/destinations")
      .then((response) => response.json())
      .then((data) => setDestinations(data));
  }, []);

  return (
    <div>
      <h2>Travel Destinations</h2>
      {destinations.map((destination) => (
        <div key={destination.id}>
          <img src={destination.image} alt={destination.name} />
          <h3>{destination.name}</h3>
          <p>{destination.description}</p>
          <Link to={`/destination/${destination.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default DestinationsList;
