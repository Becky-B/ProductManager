import React from 'react';
import axios from 'axios';

export default props => {
    const {productId, successCallback} = props
    const deleteProduct = e => {
        axios.delete('http://localhost:8001/api/products/' + productId)
            .then(res => {
                successCallback();
            })
    }

    return(
        
        <a href="#"  onClick = {deleteProduct}>
            Delete
        </a>
    )
}