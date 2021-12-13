import React from 'react'
import '../App.css';
import { BrowserRouter, Switch, NavLink, Route } from 'react-router-dom';
import Home from './Home.jsx/Home';
import Category from './Category/Category';
import Cart from './Cart.jsx/Cart';
import CategoryList from './CategoryList/CategoryList';



const App = () => {

  const categories = [
    {id: 1, title: "electronics"},
    {id: 2, title: "jewelry"},
    {id: 3, title: "men's clothing"},
    {id: 4, title: "women's clothing"}
  ]
  
  return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/categorylist" component={CategoryList}/>
            <Route path="/cart" component={Cart}/>
            <Route exact path="/category/:id" component={Category} />
            {/* <Route path="/error" component={Error}/> */}
          </Switch>
        </main>
      </BrowserRouter>
  )
}

export default App

