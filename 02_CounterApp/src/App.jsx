import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const addValue = function () {
    setCounter((prevCounter) => (prevCounter < 10 ? prevCounter + 1 : 0));
  };
  const removeValue = function () {
    setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
  };
  return (
    <>
      <div className="container">
        <h1>React App using Vite </h1>
        <h2>Counter App </h2>
        <h3>Counter Value : {counter}</h3>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
        <p>footer : {counter}</p>
      </div>
    </>
  );
}

export default App;
