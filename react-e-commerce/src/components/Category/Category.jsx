import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Category = ({ categories }) => {
    const [products, setProducts] = useState([]);
    const { title} = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await fetch(`https://fakestoreapi.com/products/category/${title}`);
            const result = await data.json();
            setProducts(result);
            console.log(result);
        }
        fetchProducts()
        }, [title])


    return (
        <div className="categories">
            <h1>Category detail page</h1>
            <h3>{title}</h3>
            {
                products.map(product => (
                    <article key={product.id}>
                        <h3>{product.title}</h3>
                        <img src={product.image} alt="" />
                        <h3>${product.price}</h3>
                        <h5>rating: {product.rating.rate}</h5>
                        <p>{product.description}</p>
                    </article>
                ))
            }
        </div>
    )
}

export default Category
