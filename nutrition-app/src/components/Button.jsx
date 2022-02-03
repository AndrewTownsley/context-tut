import React from 'react';

const Button = ({ count, setCount}) => {
  return (
      <>
        <button onClick={() => setCount(count + 1)}>
            Add
        </button>
        <button onClick={() => setCount(count - 1)}>
            Subtract
        </button>
      </>
  )
};

export default Button;
