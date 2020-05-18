import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import axios from 'axios';


export default props => {
    const [product, setProduct] = useState({})


    useEffect(() => {
        axios.get ('http://localhost:8001/api/products/' + props.id)
            .then(res => setProduct({
                ...res.data
            }));
    }, [])
    

    return(
        <div>
            <h2>Title: {product.title}</h2>
            <h4>Price: {product.price}</h4>
            <hr/>
            <p>Description: {product.desc}</p>
        </div>
    )
}