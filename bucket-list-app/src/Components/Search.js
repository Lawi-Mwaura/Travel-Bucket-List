import React, { useState } from "react";

const Search = ({ destinations }) => {
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    if (inputLength === 0) {
      setSuggestions([]); // Clear suggestions when input is empty
    } else if (destinations) { // Check if destinations is defined
      const filteredSuggestions = destinations.filter((destination) => {
        return (
          destination.name && // Check if destination.name is defined
          destination.name.toLowerCase().slice(0, inputLength) === inputValue
        );
      });

      setSuggestions(filteredSuggestions);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search destinations..."
        onChange={(e) => getSuggestions(e.target.value)}
      />
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion.id}>{suggestion.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
