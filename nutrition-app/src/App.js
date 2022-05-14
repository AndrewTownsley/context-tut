import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import useQuery from './utils/useQuery';
// import ColorComponent from './components/ColorComponent';
// import UseForm from './components/UseForm';
// import useRandomColor from './utils/useRandomColor';
// (`http://foodish-api.herokuapp.com/api`)

const App = () => {
// const { color, changeColor } = useRandomColor();

// useQuery
const { response } = useQuery(axios.get(`https://api.hatchways.io/assessment/sentences/3`))
console.log(response);
// useQuery

  return (
      <div>
        <h1>React custom hook practice...</h1>
        {/* // useQuery */}
        {
          response ?
          <h3>{ response}</h3>
          :
          <h3>Error!!</h3>
        }
        {/* // useQuery */}
          {/* <h1>React Form Validation</h1>
          <UseForm/> */}
          {/* useRandomColor */}
            {/* <ColorComponent style={{width: '50vw', height: '50vh', backgroundColor: '#' + color}} >
            </ColorComponent> */}
          {/* useRandomColor */}

      </div>
  );
};

export default App;
