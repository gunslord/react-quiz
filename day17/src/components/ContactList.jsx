import "./ContactList.css";
import ContactItem from "./ContactItem";
import { useContext } from "react";
import { ContactsDispatchContext, ContactsStateContext } from "../App";

const ContactList = () => {
  const contacts = useContext(ContactsStateContext);
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact}></ContactItem>
      ))}
    </div>
  );
};

export default ContactList;
