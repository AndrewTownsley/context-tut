import React from 'react'
import {FaShoppingCart} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
// import Products from '../Category/Category'
import { Badge, Dropdown } from 'react-bootstrap';
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
                <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>10</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

            </nav>
        </header>
    )
}

export default Header;
