import React from 'react'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import Header from '../Header/Header'
import Product from '../Product/Product'
import ProductList from '../ProductList/ProductList';
// import Cart from '../Cart.jsx/Cart';


const Home = () => {
    return (
        <div className="Home">
          <Header/>
          <ProductList/>
        </div>
    )
}

export default Home
