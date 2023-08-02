import React, { useState, useEffect } from "react";

const DestinationsList = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/destinations")
      .then((response) => response.json())
      .then((data) => setDestinations(data));
  }, []);

  return (
    <div>
    </div>
  );
};

export default DestinationsList;
