import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const AuthorForm = (props) => {

    let [author, setAuthor] = useState("");

    let [formErrors, setFormErrors] = useState({})

    const history = useHistory();

    const addAuthor = (event)=>{
        event.preventDefault();

        let formInfo = {author};

        axios.post("http://localhost:8000/api/authors", formInfo)
            .then(response =>{
                console.log("POST RESPONSE:", response);
                if(response.data.error){ //form isnt filled out correctly
                    setFormErrors(response.data.error.errors);
                }else{ //form is filled out properly
                props.setFormSubmitted(!props.formSubmitted)

                //clear form information out. clear state variables first.
                setAuthor("");
                setFormErrors({});

                history.push("/")
                }
            })
            .catch(err =>{
                console.log("Hold On! POST FORM ERROR:", err);
            })
    }

    return (
        <div>
            <form onSubmit={addAuthor}>
                <div className="form-group">
                    <label htmlFor="">Author:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(event)=>(setAuthor(event.target.value))} value={author}/>
                    <p className="text-danger">{formErrors.author?.message}</p>
                </div>
                <input type="submit" value="Create Author" />
            </form>
        </div>
    );
};



export default AuthorForm;