import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductForm from "../components/ProductForm";

export default props => {
    const {id} = props;
    const [title, setTitle]= useState();
    const [price, setPrice] = useState();
    const [desc, setDesc] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8001/api/products/" + id)
            .then(res => {
                setTitle(res.data.title);   
                setPrice(res.data.price);
                setDesc(res.data.desc);
                setLoaded(true);
            })
    },[])

    const editProduct = ({title, price, desc}) => {
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
            {loaded && <ProductForm onSubmitProp = {editProduct} initialTitle = {title} initialPrice= {price} initialDesc= {desc}/>}
            <hr/>
        </div>
    )
}