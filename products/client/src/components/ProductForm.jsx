import axios from 'axios';
import React, { useState } from 'react';


const ProductForm = (props) => {

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");

    let [formErrors, setFormErrors] = useState({})

    const addProduct = (event)=>{
        event.preventDefault();
        //create object to store the form information
        let formInfo = {title, price, description};

        axios.post("http://localhost:8000/api/products", formInfo)
            .then(response =>{
                console.log("POST RESPONSE:", response);
                if(response.data.error){ //form isnt filled out correctly
                    setFormErrors(response.data.error.errors);
                }else{ //form is filled out properly
                props.setFormSubmitted(!props.formSubmitted)

                //clear form information out. clear state variables first.
                setTitle("");
                setPrice("");
                setDescription("");
                setFormErrors({});
                }
            })
            .catch(err =>{
                console.log("Hold On! POST FORM ERROR:", err);
            })
    }

    return (
        <div>
            <form onSubmit={addProduct}>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(event)=>(setTitle(event.target.value))} value={title}/>
                    <p className="text-danger">{formErrors.title?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price: $</label>
                    <input type="number" name="" id="" className="form-control" onChange={(event)=>(setPrice(event.target.value))} value={price}/>
                    <p className="text-danger">{formErrors.price?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(event)=>(setDescription(event.target.value))} value={description}/>
                    <p className="text-danger">{formErrors.description?.message}</p>
                </div>
                <input type="submit" value="Create Product" />
            </form>
        </div>
    );
};



export default ProductForm;