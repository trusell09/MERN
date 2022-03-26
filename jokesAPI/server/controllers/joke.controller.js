const Joke = require('../models/jokes.model');





module.exports.helloWorld = (request,response)=>{
    response.json({msg: "Yo!!"})
}


module.exports.findAllJokes = (request, response)=>{
    Joke.find()
        .then(allJokes => {
            response.json({results: allJokes})
        })
        .catch(err=> response.json({ messsage: "Something went wrong", error: err}));
}

module.exports.createJoke = (request,response) =>{
    Joke.create(request.body)
    .then(newJoke =>{
        response.json({results: newJoke})
    })
    .catch(err=> response.json({ messsage: "Something went wrong", error: err}));
}

module.exports.getOneJoke = (request,response)=>{
    Joke.findOne({_id: request.params.id })
        .then(foundJoke =>{
            response.json({results: foundJoke})
        })
        .catch(err => response.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateOneJoke = (request,response)=>{
    Joke.findOneAndUpdate(
        {_id: request.params.id },
        request.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke=>{
            response.json({results: updatedJoke})
        })
        .catch(err => response.json({ message: 'Something went wrong', error: err }));
}


module.exports.deleteOneJoke = (request,response)=>{
    Joke.deleteOne({_id: request.params.id })
        .then(deletedJoke =>{
            response.json({results: deletedJoke})
        })
        .catch(err => response.json({ message: 'Something went wrong', error: err }));

}