import React from 'react'
import { BrowserRouter, Switch, NavLink, Route } from 'react-router-dom';
import Products from '../Category/Category'
import Cart from '../Cart.jsx/Cart';


const Header = () => {
    return (
        <div>
            <nav>
                <h1>SHOP LOGO</h1>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/cart">Cart</NavLink></li>
                    <li><NavLink to="/home">Shop</NavLink></li>
                </ul>
                <h4><NavLink to="/cart">CART</NavLink></h4>
            </nav>
        </div>
    )
}

export default Header
