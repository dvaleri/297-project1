// ./index.js
// * Imports

const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

const port = 8080;

require("./routes") (app);

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}/`);

});

const Blockchain = require("./src/blockchain");
global.difficulty = 1;
global.blockchain = new Blockchain();
global.transactions = [];