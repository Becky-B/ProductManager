import React, {useState} from 'react';
import {Link} from '@reach/router';

const Product =({products, setProducts})=> {
    const  productClick = (e, item)=>{
            setProducts(item.products);
    }
        return (
            <div className="row">
                <div className="col-sm">
                    <ul className="list-unstyled">
                        {products.map((product, i) => {
                            return <li><Link to ={`/products/${product._id}`} key = {i}>{product.title}</Link></li>
                        })}
                    </ul>
                </div>
            </div>
        )
}
export default Product;

// export default props => {
//     console.log(props)
//     const productClick = (e,item) => {
//         setProducts(item.products);

//     }
//     return (
//         <div>
//             {props.products.map((product, i) => {
//                 return <li onClick ={ (e) => productClick(e,item) } style ={{display : "inline"}} key = {i}>{product.title}</li>
//             })}
//         </div>
//     )
// }