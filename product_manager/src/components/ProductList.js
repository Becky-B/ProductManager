import React, {useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';


const ProductList =({products, setProducts, removeFromDom})=> {
    const  productClick = (e, item)=>{
            setProducts(item.products);
    }

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8001/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
        return (
            <div className="row">
                <div className="col-sm">
                    <ul className="list-unstyled">
                        {products.map((product, i) => {
                            return <li key = {i}>
                                <Link to ={`/products/${product._id}`}>{product.title}</Link>
                                |
                                <button onClick= {(e) => {deleteProduct(product._id)}}>Delete</button>
                                </li>
                        })}
                    </ul>
                </div>
            </div>
        )
}
export default ProductList;
