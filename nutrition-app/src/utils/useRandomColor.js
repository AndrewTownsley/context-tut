import React, { useState } from 'react';

const useRandomColor = () => {
    const [color, setColor] = useState('');

    const changeColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor);
    }
    return { color, changeColor };
}

export default useRandomColor;