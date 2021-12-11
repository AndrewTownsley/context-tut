import React from 'react'
import '../App.css';
// import styled from 'styled-components';
import { BrowserRouter, Switch, NavLink, Route } from 'react-router-dom';
import Home from './Home.jsx/Home';
import Product from './Product/Product';
import Cart from './Cart.jsx/Cart';




const App = () => {
  return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/" component={Home}/>
            <Route path="/product" component={Product}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/error" component={Error}/>
          </Switch>
        </main>
      </BrowserRouter>
  )
}

export default App

