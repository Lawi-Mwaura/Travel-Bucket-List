import React, { useState } from "react";
import Search from "./Components/Search";
import AddDestination from "./Components/AddDestination";
import DestinationsList from "./Components/DestinationsList";
import DestinationDetails from "./Components/DestinationDetails";

function App() {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination);
  };

  const handleBackButtonClick = () => {
    setSelectedDestination(null); // Go back to main page
  };

  return (
    <div>
      <Search />
      <AddDestination />
      <div>
        {!selectedDestination ? (
          <DestinationsList onSelectDestination={handleSelectDestination} />
        ) : (
          <DestinationDetails
            destination={selectedDestination}
            onBackButtonClick={handleBackButtonClick}
          />
        )}
      </div>
    </div>
  );
}

export default App;
