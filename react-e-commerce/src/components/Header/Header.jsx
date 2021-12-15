import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { BrowserRouter, Switch, NavLink, Route } from 'react-router-dom';
import Products from '../Category/Category'
import Cart from '../Cart.jsx/Cart';


const Header = () => {
    return (
        <header className="header">
            <nav>
                <div className="nav-left">
                    <h1>SHOP LOGO</h1>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/cart">Cart</NavLink></li>
                        <li><NavLink to="/home">Shop</NavLink></li>
                    </ul>
                </div>
                <h4><NavLink to="/cart"><AiOutlineShoppingCart></AiOutlineShoppingCart></NavLink></h4>
            </nav>
        </header>
    )
}

export default Header;
