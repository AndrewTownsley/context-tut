import React, { useState, useEffect, useContext } from 'react'

const ProductList = () => {
    const [products, setProducts] = useState([]);

    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    // Create CONTEXT FILE WITH THE STATE FOR THE PRODUCTS  
    // rENDER THE CATEGORIES ON THIS PAGE.  lINK TO EACH CATEGORY PAGE
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////


    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products?limit=10`)
                const results = await response.json();
                setProducts(results)
                console.log(results);
            }
            catch(error) {
                console.log(error);
            }
        }
        fetchProducts();
    }, [setProducts])
    


    return (
        <div>
            <h1>Product List</h1>
            {
                products.map(product => (
                    <article key={product.id}>
                        <img src={product.img} alt="" />
                        <h3>{product.title}</h3>
                        <h3>{product.price}</h3>
                        <p>{product.category}</p>
                    </article>
                ))
            }
        </div>
    )
}

export default ProductList
