import { memo } from "react";
import "./ContactItem.css";
import { useContext } from "react";
import { ContactsDispatchContext } from "../App";

const ContactItem = ({ contact }) => {
  const { handleDeleteContact } = useContext(ContactsDispatchContext);
  return (
    <div className="ContactItem">
      <div className="name">{contact.name}</div>
      <div className="contact">{contact.email}</div>
      <button onClick={() => handleDeleteContact(contact.id)}>🗑️ Remove</button>
    </div>
  );
};

export default memo(ContactItem);
