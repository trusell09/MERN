import React, { useState } from 'react';

const BoxGenerator = ()=>{
    
    let [color, setColor] = useState("");

    let [boxesList, setBoxesList] = useState([])
    
    const submitHandler =  (eventPrevent)=>{
        eventPrevent.preventDefault(); //prevents the form from reloading the page
        console.log({color})
        let newBox = {color} 

    setColor("")
    setBoxesList([...boxesList, newBox])
    }   
    return(
        <>
        <form onSubmit = {submitHandler}>
            <div className="form-group">
            <label htmlFor="">Color: </label>
                <input type="text" name="" id="" className="form-control" onChange={(event)=>{setColor(event.target.value)}} value={color}/>
            </div>
            <input type="submit" value="ADD" className="btn btn-success mt-3" />
        </form>
        {
            boxesList.map(box=>{
                return <div style={{backgroundColor: box.color, width: "100px", height: "100px"}}>
                    <p>
                    </p>
                </div>
            })
        }
        </>
    )
}


export default BoxGenerator;
