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
let dog = animals[1];
let cat = animals[3];

//new way - destructuring from an array 

//let [,dog2,pescado,cat2,] = animals; //the commas in the [] are how you skip a value in the array 
let [,,,,tweety] = animals



// console.log(dog2)
// console.log(cat2)
// console.log(pescado)
console.log(tweety)


// If list is very long instead of using ,,,, use the below syntax to pull the last variable
// let lastAnimal = animals[animals.length-1]
// console.log(lastAnimal)




//Nested Destructuring    multiple examples below
const anotherPerson = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
    {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
    },
    {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
    }
    ],
    createdAt: 1543945177623
};

//old way 
// let firstAddress = anotherPerson.addresses[0]
// let firstCity = anotherPerson.addresses[0].city

// console.log(firstAddress)
// console.log(firstCity)




//let{addresses} = anotherPerson;   Prints both addresses
//console.log(addresses)



//let {addresses: [,secondAddress]} = anotherPerson;     Prints second address
//console.log(secondAddress)


//let{addresses: [, {city}]} = anotherPerson;      Prints second city
//console.log(city)



let {addresses: [,{city:secondCity}]} = anotherPerson;      //PRINTS SECOND CITY
console.log(secondCity)  