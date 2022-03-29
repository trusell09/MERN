const Author = require('../models/authors.model');





module.exports.helloWorld = (request,response)=>{
    response.json({msg: "Hello World Modularized Style!!"})
}


module.exports.findAllAuthors = (request, response)=>{
    Author.find()
        .then(allAuthors => {
            response.json({results: allAuthors})
        })
        .catch(err=> response.json({ messsage: "findAllAuthors: Something went wrong", error: err}));
}

module.exports.createAuthor = (request,response) =>{
    console.log("request.body:", request.body)
    Author.create(request.body)
    .then(newAuthor =>{
        response.json({results: newAuthor})
    })
    .catch(err=> response.json({ messsage: "createAuthor: Something went wrong", error: err}));
}

module.exports.getOneAuthor = (request,response)=>{
    Author.findOne({_id: request.params.id })
        .then(foundAuthor =>{
            response.json({results: foundAuthor})
        })
        .catch(err => response.json({ message: 'getOneAuthor: Something went wrong', error: err }));
}

module.exports.updateOneAuthor = (request,response)=>{
    Author.findOneAndUpdate(
        {_id: request.params.id },
        request.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor=>{
            response.json({results: updatedAuthor})
        })
        .catch(err => response.json({ message: 'updateOneAuthors: Something went wrong', error: err }));
}


module.exports.deleteOneAuthor = (request,response)=>{
    Author.deleteOne({_id: request.params.id })
        .then(deletedAuthor =>{
            response.json({results: deletedAuthor})
        })
        .catch(err => response.json({ message: 'Something went wrong', error: err }));

}