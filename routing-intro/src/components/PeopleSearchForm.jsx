import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';


const PeopleSearchForm = () => {
    
    let [id, setId] = useState(null);
    let [selectedColor, setSelectedColor] = useState("")

    //initialize useHistory into a variable
    const history = useHistory();
    
    
    const submitHandler = (event) => {
        event.preventDefault(); //prevents form submission from reloading the entire window

        if(selectedColor.length>0){
        //if the form has info for color also filled out, then redirect to /people/id/selectedColor -> eg: /people/23/red
            history.push(`/people/${id}/${selectedColor}`)
        
        }
        else{
        //otherwise redirect to /people/${id}
            history.push(`/people/${id}` )
        }
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Person ID: </label>
                    <input type="number" name="" id="" className="form-control" onChange={(event)=>setId(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite Color</label>
                    <input type="text" name="" id="" className="form-control" onChange={(event)=>setSelectedColor(event.target.value)}/>
                </div>
                <input type="submit" value="Search" />
            </form>
        </div>
    );
};



export default PeopleSearchForm;