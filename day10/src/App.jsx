import "./App.css";

const Welcome = ({ name, isMember }) => {
  return (
    <div>
      {isMember ? `${name}님 다시 오셨군요` : `${name}님 가입하시겠어요?`}
    </div>
  );
};

function App() {
  return (
    <>
      <Welcome name={"Kevin"} isMember={true}></Welcome>
    </>
  );
}

export default App;
