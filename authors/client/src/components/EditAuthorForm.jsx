import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";


const EditAuthorForm = (props) => {

    let [authorInfo, SetAuthorInfo] = useState({})
    
    let {_id} = useParams();

    const history = useHistory();

    useEffect(()=>{
    axios.get(`http://localhost:8000/api/authors/${_id}`)
        .then(response =>{
            console.log("UPDATE AUTHOR .GET RESPONSE:", response);
            SetAuthorInfo(response.data.results)
        })
        .catch(err=>{
            console.log("UPDATE AUTHOR .GET ERROR:", err);
        })
    }, [])

    const changeHandler = (event)=>{
            SetAuthorInfo({
                ...authorInfo,
                [event.target.name]: event.target.value,
            })
    }
    
    const updateAuthor = (event)=>{
        event.preventDefault();

        axios.put(`http://localhost:8000/api/authors/${_id}`, authorInfo)
        .then(response=>{
            console.log("UPDATE AUTHOR .PUT RESPONSE:", response)
            history.push("/")
        })
        .catch(err=>{
            console.log("UPDATE AUTHOR .PUT ERROR:", err)
        })
    }

    return (
        <div>
            <h1>Editing: {authorInfo.author}</h1>
            <form onSubmit={updateAuthor}>
                <div className="form-group">
                    <label htmlFor="">Author:</label>
                    <input type="text" name="author" id="" className="form-control" onChange={changeHandler} value={authorInfo.author}/>
                </div>
                <input type="submit"  className="btn btn-success m-2" value="Edit Author" />
            </form>
        </div>
    );
};




export default EditAuthorForm;