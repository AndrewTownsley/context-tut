import React from 'react'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import Products from '../Product/Product'
import Cart from '../Cart.jsx/Cart';


const Header = () => {
    return (
        <div>
            <nav>
                <h1>SHOP LOGO</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/home">Shop</Link></li>
                </ul>
                <h4><Link to="/cart">CART</Link></h4>
            </nav>
        </div>
    )
}

export default Header
