import React, { useState } from 'react';
import './App.css';
import UseForm from './components/UseForm';
import useRandomColor from './utils/useRandomColor';

const App = () => {
const { color, changeColor } = useRandomColor();

  
  return (
      <div style={{width: '100vw', height: '100vh', backgroundColor: '#' + color}}>
          {/* <h1>React Form Validation</h1>
          <UseForm/> */}
        <button onClick={changeColor}>
          Change Color
        </button>

      </div>
  );
};

export default App;
