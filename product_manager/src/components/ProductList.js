import React, {useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import DeleteProduct from './DeleteProduct';


const ProductList =({products, setProducts, removeFromDom})=> {
    const  productClick = (e, item)=>{
            setProducts(item.products);
    }

        return (
            <div className="row">
                <div className="col-sm">
                    <ul className="list-unstyled">
                        {products.map((product, i) => {
                            return <li key = {i}>
                                <Link to ={`/products/${product._id}`}>{product.title}</Link>
                                |
                                <DeleteProduct productId = {product._id} successCallback = {() => removeFromDom(product._id)}/>
                                </li>
                        })}
                    </ul>
                </div>
            </div>
        )
}
export default ProductList;
