import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { Link } from 'react-router-dom';

const Search = ({ destinations }) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = (inputValue) => {
    const inputValueLower = inputValue.toLowerCase();
    return destinations.filter(
      (destination) => destination.name.toLowerCase().includes(inputValueLower)
    );
  };

  // When suggestion is clicked, update the input and clear the suggestions.
  const onSuggestionSelected = (event, { suggestion }) => {
    setValue(suggestion.name);
    setSuggestions([]);
  };

  // Use your imagination to render suggestions.
  const renderSuggestion = (suggestion) => (
    <Link to={`/destination/${suggestion.id}`}>
      {suggestion.name}
    </Link>
  );

  // Autosuggest will call this function every time you need to update suggestions.
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // Autosuggest will pass through all these props to the input element.
  const inputProps = {
    placeholder: 'Search for countries...',
    value,
    onChange: (event, { newValue }) => {
      setValue(newValue);
    }
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={(suggestion) => suggestion.name}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      onSuggestionSelected={onSuggestionSelected}
    />
  );
};

export default Search;
