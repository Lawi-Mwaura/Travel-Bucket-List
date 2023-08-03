 // App.js
 import React from "react";
 import Search from "./Components/Search";
 import AddDestination from "./Components/AddDestination";
 import DestinationsList from "./Components/DestinationsList";
 import DestinationDetails from "./Components/DestinationDetails";
 import BucketList from "./Components/BucketList";
 

 function App() {
   return (
     <div>
       <Search />
       <AddDestination />
       <DestinationsList />
       <DestinationDetails />
       
     </div>
   );
 }
 
 export default App;
 