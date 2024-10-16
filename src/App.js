import React, { useState, useEffect } from "react";
import "./App.css";
import AddContact from "./components/AddContact"; // Check this
import Header from "./components/header"; // Check this
import ContactList from "./components/ContactList"
console.log(Header); // Add this line

function App() {
  const [Contacts,setContacts]=useState([])
  console.log(Contacts);
  return (
    <div className="ui container">
      <Header/>
      <AddContact />
      <ContactList Contacts={Contacts}/>
    </div>
  );
}

export default App;
