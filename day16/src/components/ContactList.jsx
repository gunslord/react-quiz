import "./ContactList.css";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        ></ContactItem>
      ))}
    </div>
  );
};

export default ContactList;
