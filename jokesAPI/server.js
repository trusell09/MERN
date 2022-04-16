const express = require("express");
const app = express();
const port = 8000;

app.use( express.json( ));
app.use( express.urlencoded({ extended: true}) );

// connect server to the code in mongoose.config.js file in config folder
require("./server/config/mongoose.config")

//server file sends code to routes file
require("./server/routes/joke.routes")(app)

app.listen( port, () => console.log(`Listening on port: ${port}`) );
