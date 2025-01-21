import "./ContactItem.css";

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <div className="ContactItem">
      <div className="name">{contact.name}</div>
      <div className="contact">{contact.email}</div>
      <button onClick={() => onDeleteContact(contact.id)}>🗑️ Remove</button>
    </div>
  );
};

export default ContactItem;
