const express = require("express");
const faker = require("faker");
const app = express();

class User {
    constructor() {
        this._id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email= faker.internet.email(this.firstName,this.lastName);
        this.password= faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.address = [faker.address.streetAddress(),faker.address.city(),faker.address.state(),faker.address.zipCode(),faker.address.country()];
    }
}

app.get("/api/users/new",(req,res) => {
    return res.json({newUsers : new User()});
});

app.get("/api/companies/new",(req,res) => {
    return res.json({newCompany : new Company()});
});

app.get("/api/user/company",(req,res) => {
    return res.json([{newUsers: new User()},{newComany: new Company()}]);
});

app.listen(3000,() => {
    console.log("Successfully Connected to Local Host 3000");
});
