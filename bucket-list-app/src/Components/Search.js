import React, { useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5000/destinations?q=${encodeURIComponent(searchQuery)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch destinations');
      }
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error searching destinations:', error);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h2>Search for Travel Destinations</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Enter location or keyword"
      />
      <button onClick={handleSearch}>Search</button>

      {results.length > 0 && (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {results.map((destination) => (
              <li key={destination.id}>
                <h4>{destination.location}</h4>
                <p>{destination.description}</p>
                <img src={destination.image} alt={destination.location} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
