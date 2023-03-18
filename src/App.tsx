import "./App.css";
import MyModal from "./MyModal";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ReactJS Modal Example</h1>
        <MyModal triggerText="Open Modal" />
      </header>
    </div>
  );
};

export default App;
