import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DestinationsList from './Components/DestinationsList';
import DestinationDetails from './Components/DestinationDetails';
import AddDestination from './Components/AddDestination';
import BucketList from './Components/BucketList';
import Search from './Components/Search';

const App = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination);
  };

  const handleBackButtonClick = () => {
    setSelectedDestination(null);
  };

  return (
    <Router>
      <Search />
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
            <DestinationsList onSelectDestination={handleSelectDestination} />
          }
        />
        <Route
          path="/destination/:id"
          element={
            selectedDestination && (
              <DestinationDetails
                destination={selectedDestination}
                onBackButtonClick={handleBackButtonClick}
              />
            )
          }
        />
        <Route path="/add-destination" element={<AddDestination />} />
        <Route path="/bucket-list" element={<BucketList />} />
      </Routes>
    </Router>
  );
};

export default App;
