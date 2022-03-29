const AuthorController = require('../controllers/author.controller');


//routes file works as one big function. using app.get to export information
module.exports = (app) =>{
    app.get('/api/hello', AuthorController.helloWorld)

    //find all ninjas
    app.get("/api/authors", AuthorController.findAllAuthors)

    //create one 
    app.post("/api/authors", AuthorController.createAuthor)

    //find one by id
    app.get("/api/authors/:id", AuthorController.getOneAuthor)

    //update one by id
    app.put("/api/authors/:id", AuthorController.updateOneAuthor)

    //delete one by id
    app.delete("/api/authors/:id", AuthorController.deleteOneAuthor)
}




