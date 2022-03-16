import React, {useState} from 'react';

const HookForm = () =>{
    //First Name
    let [firstName, setFirstName] = useState("")
    //Last Name
    let [lastName, setLastName] = useState("")
    //Email
    let [email, setEmail] = useState("")
    //password
    let [password, setPassword] = useState("")
    //confirm password
    let [confirm, setConfirm] = useState("")

    return (
        <>
        <form>
        <div className="form-group">
            <label htmlFor="">First Name: </label>
            <input type="text" name="" id="" className="form-control" onChange={(e)=>setFirstName(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="">Last Name: </label>
            <input type="text" name="" id="" className="form-control" onChange={(e)=>setLastName(e.target.value)} />
        </div>
        <div className="form-group">
            <label htmlFor="">Email: </label>
            <input type="email" name="" id="" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="">Password: </label>
            <input type="password" name="" id="" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="">Confirm Password: </label>
            <input type="password" name="" id="" className="form-control" onChange={(e)=>setConfirm(e.target.value)}/>
        </div>
        </form>
        <h1>Your Data Form</h1>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: password</p>
        <p>Confirm Password: password</p>
        </>
    )
}

export default HookForm;