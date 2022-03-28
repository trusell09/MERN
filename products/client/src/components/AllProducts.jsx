import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link //a href without the reload 
} from "react-router-dom";


const AllProducts = (props) => {
    
    const [productList, setProductList] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:8000/api/products")
            .then(response => {
                console.log("this is my response:", response.data.results)
                setProductList(response.data.results)
            })
            .catch(err => {
                console.log("Not good, Error found", err)
            })
    }, [props.formSubmitted])

    const deleteProduct = (ProductId)=>{
        
        axios.delete(`http://localhost:8000/api/products/${ProductId}`)
            .then(response=>{
                console.log("RESPONSE .DELETE:", response)
                        let filteredList = productList.filter((productObject)=>{
                return productObject._id != ProductId 
                })
                setProductList(filteredList)
            })
            .catch(err=>{
                console.log(".DELETE ERROR:", err)
            })
    }

    return (
        <div>
            <h2>ALL PRODUCTS</h2>
            {
                productList.map((productObject)=>{
                    return(
                        <div className="card" key={productObject._id}>
                        <div className="card-body">
                        <h4 className="card-title"><Link to={`/details/${productObject._id}`}>{productObject.title}</Link> </h4>
                        <p className="card-text">
                            Price: ${productObject.price}
                        </p>
                        <p>
                            Description: {productObject.description}
                        </p>


                        <br />
                        <Link to={`/edit/${productObject._id}`} className="btn btn-secondary m-2">Edit {productObject.firstName}</Link>
                        <button onClick = {()=>{deleteProduct(productObject._id)}} className="btn btn-danger m-2">Delete</button>
                    </div>
                </div>
                    )
                })
            }
        </div>
    );
};



export default AllProducts;