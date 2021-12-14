import React from 'react'
import '../App.css';
import { BrowserRouter, Switch, NavLink, Route } from 'react-router-dom';
import Home from './Home.jsx/Home';
import Category from './Category/Category';
import Cart from './Cart.jsx/Cart';
import CategoryList from './CategoryList/CategoryList';



const App = () => {

  const categories = [
    {id: 12, title: "electronics"},
    {id: 23, title: "jewelry"},
    {id: 34, title: "men's clothing"},
    {id: 45, title: "women's clothing"}
  ]
  
  return (
      <BrowserRouter>
        <main>
          <Switch>
            
            <Route exact path="/" >
              <Home categories={categories} />
            </Route>

            <Route exact path="/categorylist">
              <CategoryList categories={categories} />
            </Route>


            <Route exact path="/category/:title">
              <Category categories={categories} />
            </Route>

            {/* <Route path="/cart" component={Cart}/> */}
            {/* <Route path="/error" component={Error}/> */}
          </Switch>
        </main>
      </BrowserRouter>
  )
}

export default App

