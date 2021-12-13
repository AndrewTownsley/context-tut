import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter, useParams, Switch, Link, Route } from 'react-router-dom';
import Category from '../Category/Category';
import { nanoid } from 'nanoid';

const categories = [
    {id: 1, title: "electronics"},
    {id: 2, title: "jewelry"},
    {id: 3, title: "men's clothing"},
    {id: 4, title: "women's clothing"}
]


const CategoryList = () => {
    
console.log(categories);

    return (
        <div>
            <h1>Main Page Category List</h1>
            {
                categories.map(category => (
                    <article key={nanoid()} id={nanoid()}>
                        <Link to={`/category/${category.id}`} >CategoryName:{category.title}</Link>
                        <img src="https://picsum.photos/100/100" alt="" />
                    </article>
                ))
            }
        <Switch>
        <Route exact path="/category/:id" >
            <Category categories={categories}/>
        </ Route>
        </Switch>
        </div>
    )
}

export default CategoryList
