const mongoose = require('mongoose');

//mongoose is used to create a table(collection). Instructions for creating collection.
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"], 
        minlength: [2, "Title must be at least 2 characters long!"]
    },
    price: {
        type: Number,
        required: [true, "Price is required!"],
        min: [0.01, "Product must have a price!"]
    },
    description: {
        type: String,
        required: [true, "Description required!"],
        minlength: [5, "Description must be at least 2 characters long!"]
    }
    },
    {timestamps: true}
)

//register collection instructions above in order to use at collection in MongoDB
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;


