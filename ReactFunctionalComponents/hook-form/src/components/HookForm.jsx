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
            <input type="text" name="firstName" id="" className="form-control" onChange={(e)=>setFirstName(e.target.value)}/>
                {
                    firstName.length<2 && firstName.length>0? 
                    <p className='text-danger'>First name must be at least 2 characters</p> : null
                }
        </div>
        <div className="form-group">
            <label htmlFor="">Last Name: </label>
            <input type="text" name="lastName" id="" className="form-control" onChange={(e)=>setLastName(e.target.value)} />
                {
                    lastName.length<2 && lastName.length>0? 
                    <p className='text-danger'>Last name must be at least 2 characters</p> : null
                }
        </div>
        <div className="form-group">
            <label htmlFor="">Email: </label>
            <input type="email" name="email" id="" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
                {
                    email.length<5 && email.length>0? 
                    <p className='text-danger'>Email must be at least 5 characters</p> : null
                }
        </div>
        <div className="form-group">
            <label htmlFor="">Password: </label>
            <input type="password" name="password" id="" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
                {
                    password.length<8 && password.length>0? 
                    <p className='text-danger'>Password must be at least 8 characters</p> : null
                }
        </div>
        <div className="form-group">
            <label htmlFor="">Confirm Password: </label>
            <input type="password" name="confirm" id="" className="form-control" onChange={(e)=>setConfirm(e.target.value)}/>
                {
                    password !== confirm && confirm.length>0? 
                    <p className='text-danger'>Password must match</p> : null
                }
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