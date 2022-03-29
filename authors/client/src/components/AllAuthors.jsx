import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link //a href without the reload 
} from "react-router-dom";


const AllAuthors = (props) => {
    
    //state variable for all ninjas
    const [authorList, setAuthorList] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:8000/api/authors")
            .then(response => {
                console.log("this is my response:", response.data.results)
                setAuthorList(response.data.results)
            })
            .catch(err => {
                console.log("Not good, Error found", err)
            })
    }, [props.formSubmitted])

    const deleteAuthor = (AuthorId)=>{
        
        axios.delete(`http://localhost:8000/api/authors/${AuthorId}`)
            .then(response=>{
                console.log("RESPONSE .DELETE:", response)
                        let filteredList = authorList.filter((authorObject)=>{
                return authorObject._id != AuthorId //return NinjaIds that are not being deleted
                })
                setAuthorList(filteredList)
            })
            .catch(err=>{
                console.log(".DELETE ERROR:", err)
            })
    }

    return (
        <div>
            <h2>Authors</h2>
            {
                authorList.map((authorObject)=>{
                    return(
                        <div className="card" key={authorObject._id}>
                        <div className="card-body">
                        <h4 className="card-title"><Link to={`/details/${authorObject._id}`}>{authorObject.author}</Link> </h4>
                        <br />
                        <Link to={`/edit/${authorObject._id}`} className="btn btn-secondary m-2">Edit</Link>
                        <button onClick = {()=>{deleteAuthor(authorObject._id)}} className="btn btn-danger m-2">Delete</button>
                    </div>
                </div>
                    )
                })
            }
        </div>
    );
};



export default AllAuthors;