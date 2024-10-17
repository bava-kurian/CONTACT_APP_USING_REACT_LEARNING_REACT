import React, { useState, useEffect } from "react";
import "./App.css";
import AddContact from "./components/AddContact"; // Check this
import Header from "./components/header"; // Check this
import ContactList from "./components/ContactList"
console.log(Header); // Add this line

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [Contacts,setContacts]=useState([])
  console.log(Contacts);
 const addContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...Contacts,contact]);
  };
  useEffect(()=>{
    const retreveContacts=localStorage.getItem(LOCAL_STORAGE_KEY);
    if(retreveContacts){
      setContacts(retreveContacts);
    }
  });
  return (
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler={addContactHandler} />
      <ContactList Contacts={Contacts}/>
    </div>
  );
}

export default App;
