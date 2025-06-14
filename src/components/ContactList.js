import React from "react";
import ContactCard from "./ContactCard"
const ContactList=(props)=>{
    const renderContactList=props.Contacts.map(contact=>{
        return(
           <ContactCard contact={contact}/>
        );
    });
    return(
    <div className="ui celled list">
        {renderContactList}
    </div>
    );
}
export default ContactList