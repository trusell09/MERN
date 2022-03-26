//connect to mongoDB using mongoose
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://root:root@mern-db.jquvz.mongodb.net/jokes_api?retryWrites=true&w=majority", {
    
useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));


