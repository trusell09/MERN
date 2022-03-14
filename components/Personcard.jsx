import React, { Component } from 'react'; // import react and component to creat a class based react component

class Personcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //age: is the state variable created(it can now be updated in react, its unable to update in props variable)
            age: this.props.age
        };

        this.birthdayButtonHandler= ()=>{
            console.log("Birthday Click")
            // alert("Birthday Click for, " + this.props.firstName)
            this.setState({age: this.state.age +1})// in order to update state variable, use .setState variable
        }
    }

    
    
    
    
    render (){
        return(
        <>
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <h3>Age: {this.state.age}</h3>
                <h3>Hair Color: {this.props.hairColor}</h3>
            <button onClick={this.birthdayButtonHandler}> Bithday Button for {this.props.firstName} {this.props.lastName}</button>
            <hr />
            </div>
        </>
        )
    }
}




export default Personcard;