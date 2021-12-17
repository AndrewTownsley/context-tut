import React from 'react'
import {FaShoppingCart} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
// import Products from '../Category/Category'
import { Dropdown, Badge, Nav } from 'react-bootstrap';
import Cart from '../Cart.jsx/Cart';


const Header = () => {
    return (
        <header className="header">
            <nav>
                <div className="nav-left">
                    <h1>SHOP LOGO</h1>
                    <label htmlFor="search-bar">
                        <input className='search-bar' type="text" placeholder='Search Products' id="search-bar" />
                    </label>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/cart">Cart</NavLink></li>
                        <li><NavLink to="/home">Shop</NavLink></li>
                    </ul>
                </div>
                {/* <h4><NavLink to="/cart"><AiOutlineShoppingCart></AiOutlineShoppingCart></NavLink></h4> */}
            
                        <FaShoppingCart color="black" fontSize="25px"/>
                         <Badge>{10}</Badge>
                        {/* <span style={{padding: 10}}>Cart is empty</span> */}
            </nav>
        </header>
    )
}

export default Header;
