import { useState, useRef, useReducer } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

function reducer(contacts, action) {
  switch (action.type) {
    case "ADD":
      return [...contacts, { id: action.id, ...action.payload }];
    case "DELETE":
      return contacts.filter((contact) => contact.id !== action.id);
    default:
      return contacts;
  }
}

function App() {
  const idRef = useRef(1);
  // const [contacts, setContacts] = useState([]);
  const [contacts, dispatch] = useReducer(reducer, []);

  const handleAddContact = (newContact) => {
    // 새로운 이름,연락처 추가
    // setContacts((prevContacts) => [
    //   ...prevContacts,
    //   { id: idRef.current++, ...newContact },
    // ]);
    dispatch({
      type: "ADD",
      id: idRef.current++,
      payload: newContact,
    });
  };

  const handleDeleteContact = (id) => {
    // setContacts((prevContacts) =>
    //   prevContacts.filter((contacts) => contacts.id !== id)
    // );
    dispatch({
      type: "DELETE",
      id,
    });
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
