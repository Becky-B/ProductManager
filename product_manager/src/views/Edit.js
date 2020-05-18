import React, {useEffect, useState} from `react`;
import axios from `axios`;

export default props => {
    const {id} = props;
    const {title, setTitle}= useState();
    const {price, setPrice} = useState();
    const {desc, setDesc} = useState();
    

    useEffect(() => {
        axios.get("http://localhost:8001/api/products/" + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDesc(res.data.price);
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
                    <input type="text" name="title" value={title} onChange={e} => {setTitle(e.target.value)}/>
                </h5>
            </form>
        </div>
    )
}