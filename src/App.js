import React, { useState } from 'react';
import Parent from './Parent';
import './App.css'
import CounterContext from './CounterContext';


function App() {
  // const [count, setCount] = useState(30)
  let count = useState(30)

  return (
    <CounterContext.Provider value={count}>
      <div className="App">
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
