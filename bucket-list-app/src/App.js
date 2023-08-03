
// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import DestinationsList from "./Components/DestinationsList";
// import DestinationDetails from "./Components/DestinationDetails";
// import AddDestination from "./Components/AddDestination";
// import BucketList from "./Components/BucketList";
// import Search from "./Components/Search";

// const App = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [selectedDestination, setSelectedDestination] = useState(null);

//   useEffect(() => {
//     // Fetch destinations data from API
//     fetch("http://localhost:5000/destinations")
//       .then((response) => response.json())
//       .then((data) => setDestinations(data));
//   }, []);

//   const handleSelectDestination = (destination) => {
//     setSelectedDestination(destination);
//   };

//   const handleBackButtonClick = () => {
//     setSelectedDestination(null);
//   };

//   return (
//     <Router>
//       <Search destinations={destinations} />{/* Pass destinations prop */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Destinations</Link>
//           </li>
//           <li>
//             <Link to="/add-destination">Add Destination</Link>
//           </li>
//           <li>
//             <Link to="/bucket-list">Bucket List</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <DestinationsList
//               onSelectDestination={handleSelectDestination}
//               destinations={destinations} // Pass destinations to DestinationsList
//             />
//           }
//         />
//         <Route
//           path="/destination/:id"
//           element={
//             destinations.length > 0 ? ( // Check if destinations is not empty
//               <DestinationDetails
//                 destinations={destinations}
//                 onBackButtonClick={handleBackButtonClick}
//               />
//             ) : (
//               <p>Loading destinations...</p>
//             )
//           }
//         />
//         <Route path="/add-destination" element={<AddDestination />} />
//         <Route path="/bucket-list" element={<BucketList />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DestinationsList from "./Components/DestinationsList";
import DestinationDetails from "./Components/DestinationDetails";
import AddDestination from "./Components/AddDestination";
import BucketList from "./Components/BucketList";
import Search from "./Components/Search";

const App = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [bucketList, setBucketList] = useState([]); // State to keep track of the bucket list

  useEffect(() => {
    // Fetch destinations data from API
    fetch("http://localhost:5000/destinations")
      .then((response) => response.json())
      .then((data) => setDestinations(data));
  }, []);

  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination);
  };

  const handleBackButtonClick = () => {
    setSelectedDestination(null);
  };

  const handleAddToBucketList = (destination) => {
    setBucketList((prevBucketList) => [...prevBucketList, destination]);
  };

  return (
    <Router>
      <Search destinations={destinations} />
      <nav>
        <ul>
          <li>
            <Link to="/">Destinations</Link>
          </li>
          <li>
            <Link to="/add-destination">Add Destination</Link>
          </li>
          <li>
            <Link to="/bucket-list">Bucket List</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <DestinationsList
              onSelectDestination={handleSelectDestination}
              destinations={destinations}
            />
          }
        />
        <Route
          path="/destination/:id"
          element={
            <DestinationDetails
              destinations={destinations}
              onBackButtonClick={handleBackButtonClick}
              onAddToBucketList={handleAddToBucketList}
            />
          }
        />
        <Route path="/add-destination" element={<AddDestination />} />
        <Route
          path="/bucket-list"
          element={<BucketList bucketList={bucketList} />} // Pass bucketList to BucketList component
        />
      </Routes>
    </Router>
  );
};

export default App;
