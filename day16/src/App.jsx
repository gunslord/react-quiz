import { useState, useRef, useCallback } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      break;
  }
}

function App() {
  const idRef = useRef(1);
  const [contacts, dispatch] = useReducer(reducer, []);

  const handleAddContact = useCallback((newContact) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        ...newContact,
      },
    });
  });

  const handleDeleteContact = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
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
