import React, {useState} from 'react';
//importing useState above is called a hook, this is a form of destructuring
const MenuItem = (props)=> {
    
    //initialize the state variable to keep track of the like count -> initialize it to start with the number of likes from props
    let [likes, setLikes] = useState(props.likes)


    //regular javascript code can go here before the return statement
    
    return <div>
            <h3>{props.dishName}</h3>
                <p>Price: ${props.price}</p>
                <p>Number of likes: {likes}</p>
                <p>Description: Its deep fried in basil oil and basil leaves and all that. Its nice. </p>
                <button onClick={()=> setLikes(likes+1)}>Like</button>
        <hr />
</div>
}

export default MenuItem;