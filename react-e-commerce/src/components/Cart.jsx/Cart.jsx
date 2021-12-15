import React from 'react'
import { Link, useParams } from 'react-router-dom';


const Cart = ({ categories }) => {
    const { title} = useParams();

    return (
        <div>
            <h1>Shopping Cart Page</h1>
            <h3>Item: {title}</h3>
            <h3>Quantity:</h3>
            <button>Remove</button>
            <button>Checkout</button>
        </div>
    )
}

export default Cart
