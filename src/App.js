import React from "react";
import "./App.css";
import AddContact from "./components/AddContact"; // Check this
import Header from "./components/header"; // Check this

console.log(Header); // Add this line

function App() {
  return (
    <div>
      <Header/>
      <AddContact /> 
    </div>
  );
}

export default App;
