const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];


const [firstAnimal, secondAnimal, ...restOfTheAnimals] = animals;
// spread operator is ... it puts the variables in an array


console.log(firstAnimal)
console.log(secondAnimal)
console.log(restOfTheAnimals)


const person = {
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


let {email,password,...restOfInfo} = person;
// console.log(email)
// console.log(password)
// console.log(restOfInfo)




// below is how you make a copy, /et {...personCopy} = person; copies the person object

let {...personCopy} = person;
//const personCopy = {...person};     reads the same as above 


person.firstName = "Damian"
console.log(person);
console.log(personCopy);