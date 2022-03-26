const mongoose = require('mongoose');


//mongoose is used to create a table(collection). Instructions for creating collection.
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required!"], 
        minlength: [2, "Setup must be at least 2 characters long!"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required!"], 
        minlength: [2, "Setup must be at least 2 characters long!"]
    },
    },
    {timestamps: true}
)


//register collection instructions above in order to use at collection in MongoDB
const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;


