import React from 'react'
import useRandomColor from '../utils/useRandomColor';


const ColorComponent = () => {
    const { color, changeColor } = useRandomColor();


  return (
    <div style={{width: '100%', height: '100%', backgroundColor: '#' + color}}>
    {/* <h1>React Form Validation</h1>
    <UseForm/> */}
  <button onClick={changeColor}>
    Change Color
  </button>

</div>  )
}

export default ColorComponent