import React from 'react'
import '../styles/App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx/Home';
import Header from './Header/Header';
import Cart from './Cart.jsx/Cart';
import Products from './products/Products';
// import Category from './Category/Category';
// import CategoryList from './CategoryList/CategoryList';



const App = () => {

  const categories = [
    {id: 12, title: "electronics"},
    {id: 34, title: "men's clothing"},
    {id: 45, title: "women's clothing"}
  ]
  
  return (
        <main>
            <Header/>
          <Switch>
            
            <Route exact path="/" >
              <Home categories={categories} />
            </Route>
            {/* ///////////////////////////////////// */}
{/* 
            <Route exact path="/categorylist">
              <CategoryList categories={categories} />
            </Route> */}

{/* 
            <Route exact path="/category/:title">
              <Category categories={categories} />
            </Route> */}
              {/* ///////////////////////////////////// */}

            <Route exact path="/products">
              <Products />
            </Route>

            <Route path="/cart" >
              <Cart categories={categories} />
            </Route>
            {/* <Route path="/error" component={Error}/> */}
          </Switch>
        </main>
  )
}

export default App

