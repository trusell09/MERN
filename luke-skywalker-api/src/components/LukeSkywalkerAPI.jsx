import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const LukeSkywalkerAPI = () => {
    
    const {obj, num} = useParams();

    let [lukeAPI, setLukeAPI] = useState([]);
    let [resource, setResource] = useState("people");
    let [id, setId] = useState("1");
    let [anErr, setAnErr] = useState(false);

    useEffect(()=>{
        console.log("working");
        if(num!==undefined){
            setResource(obj);
            setId(num);
            resource = obj;
            id = num;
        }
        axios.get(`https://swapi.dev/api/${resource}/${id}`)
            .then((response)=>{
                setLukeAPI(response.data);
                console.log(response.data);
            })
            .catch((_err)=>{
                console.log("error");
                setAnErr(true);
            }
            )},[])
    const submitHandler = (e)=>{
        e.preventDefault();
        window.location = `/${resource}/${id}`;
    }
    const err = () => {
        return (
            <div>
            <h3>"UH OH!"</h3>
            <img src="https://lumiere-a.akamaihd.net/v1/images/Darth-Maul_632eb5af.jpeg?region=0%2C44%2C1600%2C800" width="500px" height="500px" alt="" />
            </div>
        );
    }

    return (
        <>
            <form onSubmit = {submitHandler}>
            <div className="form-group">
                <label htmlFor="">Search for:</label>
                <select name="" id="" className='form-select' onChange={(event)=>{setResource(event.target.value)}} value={resource}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="">Id:</label>
                <input type="number" name="" id="" className="form-control" onChange={(event)=>{setId(event.target.value)}} value={id}/>
            </div>
            <input type="submit" value="Search" className="btn btn-success mt-3" />
            </form>
        <hr/>
            {
                <>
                    {anErr === true?err():null}
                    <h3>{Object.keys(lukeAPI)[0]}: {lukeAPI[Object.keys(lukeAPI)[0]]}</h3>
                    <h3>{Object.keys(lukeAPI)[1]}: {lukeAPI[Object.keys(lukeAPI)[1]]} cm</h3>
                    <h3>{Object.keys(lukeAPI)[2]}: {lukeAPI[Object.keys(lukeAPI)[2]]} kg</h3>
                    <h3>{Object.keys(lukeAPI)[3]}: {lukeAPI[Object.keys(lukeAPI)[3]]}</h3>
                    <h3>{Object.keys(lukeAPI)[4]}: {lukeAPI[Object.keys(lukeAPI)[4]]}</h3>
                </>
            }
        </>
    );
}


export default LukeSkywalkerAPI;