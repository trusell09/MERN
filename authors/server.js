const express = require("express");
const app = express();
const port = 8000;
//cors import-> connects React to backend
// CORS - Cross Origin Resource Sharing
const cors = require("cors");

app.use( express.json( ));
app.use( express.urlencoded({ extended: true}) );
app.use(cors())

//connect server to the code in mongoose.config.js file in config folder
require("./server/config/mongoose.config")

//server file sends code to routes file
require("./server/routes/author.routes")(app)


app.listen( port, () => console.log(`Listening on port: ${port}`) );