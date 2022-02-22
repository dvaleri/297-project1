// Import Transaction
const Transaction = require("../src/transaction");

// Creates a new transaction
function newtransaction(app) {
    // Get request 
    app.get("/newtransaction", function(request, response) {
        // Creates the transaction
        let tx = new Transaction();
        // Add transaction to the global list of current transactions
        global.transactions.push(tx);
        response
            .status(200)
            .send(tx.prettify()); // String representation of transaction
    });
}

module.exports = newtransaction;