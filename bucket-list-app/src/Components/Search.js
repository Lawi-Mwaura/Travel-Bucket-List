 // export default Search;
 import React, { useState } from "react";
 import Autosuggest from "react-autosuggest";
 import { Link } from "react-router-dom";
 
 const Search = ({ destinations }) => {
   const [value, setValue] = useState("");
   const [suggestions, setSuggestions] = useState([]);
 
   const getSuggestions = (inputValue) => {
     const inputValueLower = inputValue.toLowerCase();
     return destinations.filter((destination) => destination.name && destination.name.toLowerCase().includes(inputValueLower));
   };
 
   const renderSuggestion = (suggestion) => (
     <Link to={`/destination/${suggestion.id}`}>
       {suggestion.name}
     </Link>
   );
 
   const onSuggestionsFetchRequested = ({ value }) => {
     setSuggestions(getSuggestions(value));
   };
 
   const onSuggestionsClearRequested = () => {
     setSuggestions([]);
   };
 
   const inputProps = {
     placeholder: "Search for countries...",
     type: "text",
     value,
     className: "form-control", // Add Bootstrap class for styling
     onChange: (event, { newValue }) => {
       setValue(newValue);
       setSuggestions(getSuggestions(newValue));
     }
   };
 
   return (
     <div className="my-4">
       <Autosuggest
         suggestions={suggestions}
         onSuggestionsFetchRequested={onSuggestionsFetchRequested}
         onSuggestionsClearRequested={onSuggestionsClearRequested}
         getSuggestionValue={(suggestion) => suggestion.name}
         renderSuggestion={renderSuggestion}
         inputProps={inputProps}
       />
     </div>
   );
 };
 
 export default Search;
 