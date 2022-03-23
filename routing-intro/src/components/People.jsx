import React from 'react';
import { useParams } from "react-router";


const People = () => {
    //exract the route param from the route and put it into a variable
    const { id, borderColor } = useParams();

    console.log("id" , id)
    console.log("borderColor", borderColor)
    
    return(
        <div style = {{border: borderColor ===undefined?"20px solid black": `20px solid ${borderColor}`}}> 
        {/* Above are back ticks `` used */}
            {
                isNaN(id)? 
                    <h1>Could not find: {id}. Please use numeric ID</h1>:
                    id == 23? 
                        <p>Lebron James 
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG9paZRYSPljtTDIoDv--2XjmUaI7Hcn7H_A&usqp=CAU" alt="" />
                        </p>:
                    id == 7?
                        <p>Ronaldooooo!!!!
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7lsuaH8IUX_nwZh7oA7_HvNfF4FXe1DsuQ&usqp=CAU" alt="" />
                        </p>:
                    <h1>Details about person {id}</h1>
            }
        </div>
    )   
}

export default People;