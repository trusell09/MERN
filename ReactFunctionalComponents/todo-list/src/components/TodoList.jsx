import React, { useState } from 'react';

const TodoList = ()=>{
    
    let [task, setTask] = useState("");
    let [taskUpdated, setTaskUpdated] = useState(false)
    let [taskList, setTaskList] = useState([])

    const submitHandler =  (eventPrevent)=>{
        eventPrevent.preventDefault(); //prevents the form from reloading the page
        console.log({task})
            let newTask = {task} 

            setTask("")
            setTaskList([...taskList, newTask])
    }

    const deleteTask = (indexNum)=>{
        console.log("Delete Task -->", indexNum)


        let filteredTaskList = taskList.filter((taskItem,index)=>{
            return index!=indexNum;
        })

        setTaskList(filteredTaskList)
    }

    const taskCheckbox = (indexNumber)=>{
        console.log("index number of task to update-->", indexNumber)
        console.log("Here is the task to update", taskList[indexNumber].taskUpdated)

        let copyOfTaskList = [...taskList]

        copyOfTaskList[indexNumber].taskUpdated = !copyOfTaskList[indexNumber].taskUpdated

        setTaskList(copyOfTaskList)
        
    }
    return(
        <>
        <form onSubmit = {submitHandler}>
            <div className="form-group">
                <label htmlFor="">Task: </label>
                <input type="text" name="" id="" className="form-control" onChange={(event)=>{setTask(event.target.value)}} value={task}/>
            </div>
            <input type="submit" value="ADD" className="btn btn-success mt-3" />
        </form>
        {
            taskList.map((taskItem, indexNumber)=>{
                return <div key={indexNumber}>
                    <hr />
                    <h1>{taskItem.task}</h1>
                    <button onClick={()=>deleteTask(indexNumber)} className="btn btn-danger">Delete </button> ||
                        <label htmlForm=""> Task Completed </label>
                        <input onClick = {()=> taskUpdated(indexNumber)} type="checkbox" name="" id="" />
                    <hr />
                </div>
            })
        }
        </>
    )
}

export default TodoList;