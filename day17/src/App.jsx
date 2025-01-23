import { useRef, useCallback, useReducer, createContext, useMemo } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

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

export const ContactsStateContext = createContext();
export const ContactsDispatchContext = createContext();

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

  const memoizedDispatch = useMemo(() => {
    return { handleAddContact, handleDeleteContact };
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <ContactsStateContext.Provider value={contacts}>
        <ContactsDispatchContext.Provider value={memoizedDispatch}>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </ContactsDispatchContext.Provider>
      </ContactsStateContext.Provider>
    </div>
  );
}

export default App;
