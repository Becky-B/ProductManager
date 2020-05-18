import React, {useState, setState} from 'react';
import axios from 'axios';


const ProductForm = props => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [desc, setDesc] = useState("")
        
    const AddProduct = e => {
        e.preventDefault();
        axios.post("http://localhost:8001/api/products/new", {
            title,
            price,
            desc
        })
            .then(res=>{
                setTitle("")
                setPrice("")
                setDesc("")
                console.log(res)
            })
            .catch(err=>console.log(err))
        
    }
    return(
        <div>
            <form onSubmit = {AddProduct}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" value={title} name="title" onChange = {(e)=>setTitle(e.target.value)}   />
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input type= "number" value={price} name="price" onChange= {(e)=>setPrice(e.target.value)}  />
                </div>
                <div>
                    <label htmlFor="desc">Description: </label>
                    <input type="text" value={desc} name="desc" onChange= {(e)=>setDesc(e.target.value)}  />
                </div>
                <div>
                    <input className="btn btn-primary" type="submit"/>
                </div>
            </form>
        </div>
    )
}
export default ProductForm;

