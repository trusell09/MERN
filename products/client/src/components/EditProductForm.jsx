import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";


const EditProductForm = (props) => {

    let [productInfo, SetProductInfo] = useState({})
    
    let {_id} = useParams();

    const history = useHistory();
    useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${_id}`)
        .then(response =>{
            console.log("UPDATE PRODUCT .GET RESPONSE:", response);
            SetProductInfo(response.data.results)
        })
        .catch(err=>{
            console.log("UPDATE PRODUCT .GET ERROR:", err);
        })
    }, [])

    const changeHandler = (event)=>{
        {
            SetProductInfo({
                ...productInfo,
                [event.target.name]: event.target.value,
            })
        }
    }
    
    const updateProduct = (event)=>{
        event.preventDefault();

        axios.put(`http://localhost:8000/api/products/${_id}`, productInfo)
        .then(response=>{
            console.log("UPDATE PRODUCT .PUT RESPONSE:", response)
            history.push("/")
        })
        .catch(err=>{
            console.log("UPDATE PRODUCT .PUT ERROR:", err)
        })
    }

    return (
        <div>
            <h1>Editing: {_id}</h1>
            <form onSubmit={updateProduct}>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input type="text" name="title" id="" className="form-control" onChange={changeHandler} value={productInfo.title}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input type="text" name="price" id="" className="form-control" onChange={changeHandler} value={productInfo.price}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" name="description" id="" className="form-control" onChange={changeHandler} value={productInfo.description}/>
                </div>
                <input type="submit" value="Edit Product!" />
            </form>
        </div>
    );
};



export default EditProductForm;