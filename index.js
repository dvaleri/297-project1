
// Import the Express and Morgan classes
const express = require("express");
const morgan = require("morgan");

// Initialize express object
const app = express();

app.use(morgan("dev"));

// Use localhost port number 8080
const port = 8080;

// To load all of the routes from the routes folder
require("./routes") (app);

// Sets up the server to start running.
// It will listen for requests
app.listen(port, () => {
    // Prints to terminal to tell us the server is running
    console.log(`Server is listening at http://localhost:${port}/`);

});

// Import
const Blockchain = require("./src/blockchain");

// Set global variables. 
global.difficulty = 1;
// Our copy of the blockchain
global.blockchain = new Blockchain();
// List of our current transactions
global.transactions = [];