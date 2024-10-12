import React ,{useState} from "react";
import "./App.css";
import AddContact from "./components/AddContact"; // Check this
import Header from "./components/header"; // Check this
import ContactList from "./components/ContactList"
console.log(Header); // Add this line
const [Contacts,setContacts]=useState([])
function App() {
  return (
    <div className="ui container">
      <Header/>
      <AddContact />
      <ContactList Contacts={Contacts}/>
    </div>
  );
}

export default App;
