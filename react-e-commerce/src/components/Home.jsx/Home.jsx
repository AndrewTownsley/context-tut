import React from 'react'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import Category from '../Category/Category'
import CategoryList from '../CategoryList/CategoryList';


const Home = ({ categories}) => {
    return (
        <div className="Home">
          <CategoryList categories={categories}/>
        </div>
    )
}

export default Home
