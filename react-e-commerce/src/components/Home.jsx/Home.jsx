import React from 'react'
import Filters from '../Filters/Filters';
import Products from '../products/Products';
// import Category from '../Category/Category'
// import CategoryList from '../CategoryList/CategoryList';


const Home = () => {
    return (
        <div className="Home">
          <Filters/>
          <Products/>
        </div>
    )
}

export default Home
