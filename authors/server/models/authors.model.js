const mongoose = require('mongoose');

//mongoose is used to create a table(collection). Instructions for creating collection.
const AuthorSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, "Author is required!"], 
        minlength: [2, "Author must be at least 2 characters long!"]
    },
    },
    {timestamps: true}
)

//register collection instructions above in order to use at collection in MongoDB
const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;


