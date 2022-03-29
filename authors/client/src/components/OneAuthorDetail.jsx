import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";


const OneAuthorDetail = () => {
    
    const{_id} = useParams();
    const [info, setInfo] = useState({})
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(response=>{
                console.log("Response:" ,response)
                setInfo(response.data.results);
            })
            .catch(err=>{
                console.log("OneAuthorDetail Error:", err)
            })
    }, []) //DEPENDANCY ARRAY [] STOPS THE FUNCTION FROM ENDLESSLY LOOPING. CRUCIAL COMPONENT!!!!!

    const deleteAuthor = ()=>{
        console.log("deleteAuthor by authorId", _id)
        axios.delete(`http://localhost:8000/api/authors/${_id}`)
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
            <h1>Author: <b>{info.author}</b></h1>
            <button onClick={deleteAuthor} className="btn btn-danger">Delete {info.author}</button>
        </div>
    );
};



export default OneAuthorDetail;