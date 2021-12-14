import React from 'react'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import Header from '../Header/Header'
import Category from '../Category/Category'
import CategoryList from '../CategoryList/CategoryList';


const Home = ({ categories}) => {
    return (
        <div className="Home">
          <Header/>
          <CategoryList categories={categories}/>
        </div>
    )
}

export default Home
