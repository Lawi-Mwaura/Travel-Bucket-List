// export default App;
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DestinationsList from "./Components/DestinationsList";
import DestinationDetails from "./Components/DestinationDetails";
import AddDestination from "./Components/AddDestination";
import BucketList from "./Components/BucketList";

const App = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [bucketList, setBucketList] = useState([]);

  useEffect(() => {
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
      <nav className="mb-4"> {/* Added margin-bottom to the navbar */}
      
        <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={{ "--bs-nav-link-color": "var(--bs-white)", "--bs-nav-pills-link-active-color": "var(--bs-primary)", "--bs-nav-pills-link-active-bg": "var(--bs-white)" }}>
          <li className="nav-item" role="presentation">
            <Link to="/" className="nav-link active rounded-5" id="home-tab2" role="tab" aria-selected="true">Destination Details</Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link to="/add-destination" className="nav-link rounded-5" id="profile-tab2" role="tab" aria-selected="false">Add Destination</Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link to="/bucket-list" className="nav-link rounded-5" id="contact-tab2" role="tab" aria-selected="false">Bucket List</Link>
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
          element={<BucketList bucketList={bucketList} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
