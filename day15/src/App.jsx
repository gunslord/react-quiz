import { useState, useRef } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

function App() {
  const idRef = useRef(1);

  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    // 새로운 이름,연락처 추가
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: idRef.current++, ...newContact },
    ]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contacts) => contacts.id !== id)
    );
  };

  return (
    <div className="App">
      ,<h2>Contact List</h2>
      <section>
        <ContactEditor onAddContact={handleAddContact} />
      </section>
      <section>
        <ContactList
          contacts={contacts}
          onDeleteContact={handleDeleteContact}
        />
      </section>
    </div>
  );
}

export default App;
