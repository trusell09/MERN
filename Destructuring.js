const person = { 
        firstName: 'Bob', 
        lastName: 'Marley', 
        email: 'bob@marley.com', 
        password: 'sekureP@ssw0rd9', 
        username: 'barley', 
        createdAt: 1543945177623
    };
    





    // OLD WAY
    let bobsFirstName = person.firstName;
    let bobsLastName = person.lastName;
    let bobsemail = person.email;

    console.log(bobsFirstName)
    console.log(bobsLastName)
    console.log(bobsemail)


    //New ES6 way of doing the above (refered to as DESTRUCTURING)

    let {firstName:AltFirstName, lastName, email:bobsemailAotherOne} = person; 
    console.log(AltFirstName)
    console.log(lastName)
    console.log(bobsemailAotherOne)   




const animals = ['horse', 'dog', 'fish', 'cat', 'bird']; 

//old way
// let dog = animals[1];
// let cat = animals[3];

//new way - destructuring from an array 

let [,dog2,,cat2] = animals; //the commas in the [] are how you skip a value in the array 

console.log(dog2)
console.log(cat2)
