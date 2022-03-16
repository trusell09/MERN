import React, { useState } from 'react';

const Petform = ()=>{
    //name of pet
    let [name, setName] = useState("")
    //age of pet
    let [age, setAge] = useState(null)
    //appointment date
    let [date, setDate] = useState("")
    //pet image 
    let [petImg, setPetImg] = useState("")

    return (
    <>
    <form>
        <div className="form-group">
            <label htmlFor="">Name: </label>
            <input type="text" name="" id="" className="form-control" onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="">Age: </label>
            <input type="number" name="" id="" className="form-control" onChange={(e)=>setAge(e.target.value)} />
        </div>
        <div className="form-group">
            <label htmlFor="">Appointment Date: </label>
            <input type="date" name="" id="" className="form-control" onChange={(e)=>setDate(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="">Pet Image: </label>
            <input type="text" name="" id="" className="form-control" onChange={(e)=>setPetImg(e.target.value)}/>
        </div>
        <input type="submit" value="Make Appointment" className="btn btn-success mt-3" />
        {/* mt-3 above is for margin in bootstrap */}
    </form>
    <p>Registered Name: {name}</p>
    <p>Age: {age}</p>
    <p>Date: {date}</p>
    <p><img src={petImg} alt="" height="350px" width="350px"/></p>
    </>
    )
}

export default Petform;