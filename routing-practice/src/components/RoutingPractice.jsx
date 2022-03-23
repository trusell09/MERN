import React from 'react';
import { useParams } from "react-router";

const RoutingPractice = () => {

    const { id, backgroundColor, color } = useParams();

    console.log("id", id)

    return(
        <div style = {{backgroundColor: backgroundColor===undefined?"white": `${backgroundColor} `, color: color===undefined?"black": `${color} `}}>
            {
                isNaN(id)?
                <h1 >The word is: {id}</h1> : <h1>The number is: {id}</h1>
            }
        </div>
    )
}




export default RoutingPractice;