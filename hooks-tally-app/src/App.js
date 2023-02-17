import './styles.css';
import React, {useState} from 'react';

function App() {
  var [number, setNumber] = useState(0);

  function Increment(){
    setNumber(number + 1)
  }

  function Decrement(){
    setNumber(number > 0 ? number - 1: number)
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>{number}</h2>
      <button className='buttonClass' onClick={Increment}>+</button>
      <button className='buttonClass' onClick={Decrement}>-</button>
    </div>
  );
}

export default App;
