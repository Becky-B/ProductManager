import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default props => {
    const {id} = props;
    const [title, setTitle]= useState();
    const [price, setPrice] = useState();
    const [desc, setDesc] = useState();
    

    useEffect(() => {
        axios.get("http://localhost:8001/api/products/" + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDesc(res.data.desc);
            })
    },[])

    const editProduct = e => {
        e.preventDefault();
        axios.put("http://localhost:8001/api/products/" + id, {
            title,
            price,
            desc
        })
        .then(res => console.log(res));
    }

    return(
        <div>
            <h1>Edit Product Info</h1>
            <form className="form-group" onSubmit={editProduct}>
                <h5>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </h5>
                <h5>
                    <label htmlFor="price">Price:</label>
                    <input type="number" name="price" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
                </h5>
                <h5>
                    <label htmlFor="desc">Desc:</label>
                    <input type="text" name="desc" value={desc} onChange={(e) => {setDesc(e.target.value)}}/>
                </h5>
                <div>
                <input className="btn btn-primary" type="submit"/>
                </div>
            </form>
        </div>
    )
}