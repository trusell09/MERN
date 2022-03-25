const { response } = require("express");
const express = require("express"); 
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


class User {
    constructor() {
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}
console.log(new User());

class Company {
    constructor() {
        this.id = faker.datatype.uuid();
        this.company = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCodeByState(),
            country: faker.address.country()
        }
    }
}
console.log(new Company());

app.get("/api/users/new", (request, response) => {
    let fakeUser = new User();

    response.json({fakeUser})
});

app.get("/api/company/new", (request, response) => {
    let fakeCompany = new Company();

    response.json({fakeCompany})
});

app.get("/api/user/company", (request,response)=>{
    let fakeUser = new User();
    let fakeCompany = new Company();
    response.json({fakeUser, fakeCompany})
});

//bottom of file
app.listen ( port, () => console.log(`Listening on port: ${port}`) );