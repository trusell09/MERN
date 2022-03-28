import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";


const OneProductDetail = () => {
    
    const{_id} = useParams();
    const [info, setInfo] = useState({})
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(response=>{
                console.log("Response:" ,response)
                setInfo(response.data.results);
            })
            .catch(err=>{
                console.log("OneProductDetail Error:", err)
            })
    }, []) //DEPENDANCY ARRAY [] STOPS THE FUNCTION FROM ENDLESSLY LOOPING. CRUCIAL COMPONENT!!!!!

    const deleteProduct = ()=>{
        console.log("deleteProduct by productId", _id)
        axios.delete(`http://localhost:8000/api/products/${_id}`)
        .then(response=>{
            console.log(response)
            history.push("/");
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>
            <h1>Title: <b>{info.title}</b></h1>
            <h2>Price: {info.price}</h2>
            <h1>Description: {info.description}</h1>
            <button onClick={deleteProduct} className="btn btn-danger">Delete {info.title}</button>
        </div>
    );
};


export default OneProductDetail;