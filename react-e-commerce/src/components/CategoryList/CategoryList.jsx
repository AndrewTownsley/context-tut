import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter, useParams, Switch, Link, Route } from 'react-router-dom';
import Category from '../Category/Category';
import { nanoid } from 'nanoid';

const CategoryList = ({ categories}) => {
    
console.log(categories);

    return (
        <div>
            <h1>Main Page Category List</h1>
            {
                categories.map(category => (
                    <article key={nanoid()} id={nanoid()}>
                        <Link to={`/category/${category.title}`} >CategoryName: {category.title}</Link>
                        {/* <img src="https://picsum.photos/100/100" alt="" /> */}
                    </article>
                ))
            }
        </div>
    )
}

export default CategoryList
