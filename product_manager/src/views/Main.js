import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';



export default () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8001/api/products')
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
                setLoaded(true);
            });
    },[])
    


    return (
        <div>
            <h1>Add a Product!</h1>
            <ProductForm/>
            <hr/>
            <h2>All Products</h2>
            {loaded && <ProductList products = {product}/>}
        </div>
    )
}