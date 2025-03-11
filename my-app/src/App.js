import './App.css';
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>
        <h1>{count}</h1>
        <AddButton count={count} setCount={setCount} />
        <ResetButton count={count} setCount={setCount} />
      </div>
    </div>
  );
}

function AddButton( {count, setCount} ) {
  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <button onClick={handleClick}>Click me</button>
  );
}

function ResetButton( {count, setCount }) {
  function handleClick() {
    setCount(0);
  }

  return (
    <button onClick={handleClick}>Reset</button>
  );
}

export default App;
