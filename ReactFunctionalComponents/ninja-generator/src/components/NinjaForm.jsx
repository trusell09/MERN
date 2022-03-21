import React, { useState } from 'react';


const NinjaForm = ()=>{
    
    //create state variables to store info collected from each form input
    let [name, setName] = useState("");
    let [profilePicUrl, setProfilePicUrl] = useState("");
    let [favColor, setFavColor] = useState("");
    let [favLang, setFavLang] = useState("");

    //variable for if student has completed a project or not -> similar to to-do list assignment 
    let [projectUploaded, setProjectUploaded] = useState(false)
//state variable to store all submitted ninja objects inside and initialize is as empty list useState ([])
let [ninjaList, setNinjaList] = useState([])


const submitHandler =  (eventPrevent)=>{
    eventPrevent.preventDefault(); //prevents the form from reloading the page
    console.log({name, profilePicUrl, favColor, favLang})
    let newNinjaObject = {name, profilePicUrl, favColor, favLang, projectUploaded} // create a new ninja object using info from form

    //clear out state variables which will clear out form inputs if assigned from input values to state variables
    setName("")
    setProfilePicUrl("")
    setFavColor("")
    setFavLang("Python") //Python is entered as default so it will log, otherwise if Python was selected it would apear as an empty "", any of the languages could be selected

    //add the ninja object to the ninjaList array
    //ninjaList.push(newNinjaObject) // this option works, but is not best practice
    setNinjaList([...ninjaList, newNinjaObject]) //set the ninjaList variable using the setter (setNinjaList()) to contain a copy of whaterver is currently in the ninjaList (...ninjaList) and add the new ninja object to the end of that list (, newNinjaObject);
}

//DELETE ninja function
const deleteNinja = (indexNum)=>{
    console.log("delete ninja -->", indexNum) // indexNum represents the index of the ninnja clicked on with "Delete Ninja" button

    //use the filter function to loop through the original array and filter out the item  we want to delete

    //use the filter function to loop through the original array and filter out the item wanted we want to delete by the index number
    let filteredNinjaList = ninjaList.filter((ninja,index)=>{
        return index!=indexNum;
    })
    console.log("filtered ninja list -->", filteredNinjaList)

    //upadte state array ninjaList to this new filterdNinjaList
    setNinjaList(filteredNinjaList)
    }

    const projectCheckbox = (indexNumber)=>{
        console.log("index number of student to update -->", indexNumber)
        console.log("Here is the ninja to update", ninjaList[indexNumber].projectUploaded)

        //make a copy of original array and modify the copy
        let copyOfNinjaList = [...ninjaList]
        
        //update the ninja object from the ninjaList at the specified index to toggle from true to false or true to false
        copyOfNinjaList[indexNumber].projectUploaded = !copyOfNinjaList[indexNumber].projectUploaded
        
        //update the state variable using the modified copy so react knows to update the DOM(document object model)
        setNinjaList(copyOfNinjaList)
    }

    return(
        <>
        <form onSubmit = {submitHandler}>
            <div className="form-group">
                <label htmlFor="">Name: </label>
                <input type="text" name="" id="" className="form-control" onChange={(event)=>{setName(event.target.value)}} value={name}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Profile Picture Link: </label>
                <input type="text" name="" id="" className="form-control"onChange={(event)=>{setProfilePicUrl(event.target.value)}} value={profilePicUrl}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Favorite Color: </label>
                <input type="text" name="" id="" className="form-control"onChange={(event)=>{setFavColor(event.target.value)}} value={favColor}/>
            </div>
            <div className="form-group">
                <lable htmlFor="">Favorite Language:</lable>
                <select name="" id="" className="form-select" onChange={(event)=>{setFavLang(event.target.value)}} value={favLang}>
                    <option value="Python">Python</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Java">Java</option>
                    <option value="C#">C#</option>
                </select>
            </div>
            <input type="submit" value="ADD NINJA" className="btn btn-success mt-3" />
        </form>
            {
                ninjaList.map((ninja, indexNumber)=>{ //ninja can be named anything, just name the below the same
                    return <div key={indexNumber} style={{backgroundColor: ninja.favColor, border: ninja.projectUploaded? "20px solid gold": ""}}>
                        {/* key = indexNumber above removes the unique child error in the console */}
                        <h1>{ninja.name} - {indexNumber}</h1>
                        <p>Favorite Color: {ninja.favColor}</p>
                        <p>Favorite Language: {ninja.favLang}</p>
                        <p><img src={ninja.profilePicUrl} alt="" height="250px" width="250px" /></p>
                        <button onClick={()=>deleteNinja(indexNumber)} className="btn btn-danger">Delete {ninja.name}</button>
                        <label htmlForm=""> Student Completed Projected </label>
                        <input onClick = {()=> projectCheckbox(indexNumber)} type="checkbox" name="" id="" />
                        <hr />
                    </div>
                })
            }
        </>
    )
}

export default NinjaForm;
