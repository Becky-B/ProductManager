import React, { useEffect, useState } from 'react';
import {Link} from '@reach/router';
import { navigate } from '@reach/router'
import DeleteProduct from '../components/DeleteProduct';
// import ProductList from '../components/ProductList';
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
        <>
            <div>
                <h2>Title: {product.title}</h2>
                <h4>Price: {product.price}</h4>
                <hr/>
                <p>Description: {product.desc}</p>
            </div>
            <div>
                <Link to = {"/product/" + product._id + "/edit"}>Edit</Link>
            </div>
            <div>
            <DeleteProduct productId = {product._id} successCallback = {() => navigate("/")}/>
            </div>
        </>
    )
}