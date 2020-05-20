import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';



export default () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [desc, setDesc] = useState('')
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    function grabProduct(){
        axios.get('http://localhost:8001/api/products')
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
                setLoaded(true);
            });
    }

    useEffect(() => {grabProduct()},[])
    
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._Id != productId));
        grabProduct();
    }

    const AddProduct = ({title, price, desc}) => {
        axios.post("http://localhost:8001/api/products/new", {
            title,
            price,
            desc,
        })
            .then(res=>{
                setTitle("")
                setPrice("")
                setDesc("")
                console.log(res)
            })
            .catch(err=>console.log(err))
        
    }

    return (
        <div>
            <h1>Add a Product!</h1>
            <ProductForm onSubmitProp = {AddProduct} initialTitle = {title} inititalPrice= {price} initialDesc= {desc}/>
            <hr/>
            <h2>All Products</h2>
            {loaded && <ProductList products = {product} setProducts = {setProduct} removeFromDom = {removeFromDom}/>}
        </div>
    )
}