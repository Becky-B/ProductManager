import React, {useState, setState} from 'react';
import axios from 'axios';


const ProductForm = props => {
    const {initialTitle, initialPrice, initialDesc, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle)
    const [price, setPrice] = useState(initialPrice)
    const [desc, setDesc] = useState(initialDesc)
        
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, desc});
    }
    
    return(
        <div>
            <form onSubmit = {onSubmitHandler}>
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

