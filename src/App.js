import React from "react";
import Search from "./Components/Search";
import AddDestination from "./Components/AddDestination";
import DestinationsList from "./Components/DestinationsList";
import DestinationDetails from "./Components/DestinationDetails";
import BucketList from "./Components/BucketList";
import "./App.css"; // Import the styles.css file

function App() {
  return (
    <div className="container">
      <div className="main-content">
        <Search />
        <AddDestination />
        <DestinationsList />
        <DestinationDetails />
      </div>
      <div className="sidebar">
        <BucketList />
      </div>
    </div>
  );
}

export default App;
