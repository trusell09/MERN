const Product = require('../models/products.model');


module.exports.helloWorld = (request,response)=>{
    response.json({msg: "Hello World Modularized Style!!"})
}

module.exports.findAllProducts = (request, response)=>{
    Product.find()
        .then(allProducts => {
            response.json({results: allProducts})
        })
        .catch(err=> response.json({ messsage: "findAllProducts: Something went wrong", error: err}));
}

module.exports.createProduct = (request,response) =>{
    console.log("request.body:", request.body)
    Product.create(request.body)
    .then(newProduct =>{
        response.json({results: newProduct})
    })
    .catch(err=> response.json({ messsage: "createProduct: Something went wrong", error: err}));
}

module.exports.getOneProduct = (request,response)=>{
    Product.findOne({_id: request.params.id })
        .then(foundProduct =>{
            response.json({results: foundProduct})
        })
        .catch(err => response.json({ message: 'getOneProduct: Something went wrong', error: err }));
}

module.exports.updateOneProduct = (request,response)=>{
    Product.findOneAndUpdate(
        {_id: request.params.id },
        request.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct=>{
            response.json({results: updatedProduct})
        })
        .catch(err => response.json({ message: 'updateOneProduct: Something went wrong', error: err }));
}

module.exports.deleteOneProduct = (request,response)=>{
    Product.deleteOne({_id: request.params.id })
        .then(deletedProduct =>{
            response.json({results: deletedProduct})
        })
        .catch(err => response.json({ message: 'Something went wrong', error: err }));
}