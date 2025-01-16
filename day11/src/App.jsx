import "./App.css";
import OrderEditor from "./components/OrderEditor";

function App() {
  const onSubmit = () => {
    console.log("onSubmit");
  };
  return (
    <>
      <OrderEditor onSubmit={onSubmit}></OrderEditor>
    </>
  );
}

export default App;
