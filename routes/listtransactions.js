// Import Transaction
const Transaction = require("../src/transaction");

// Lists all current transactions
function listtransactions(app) {
    app.get("/listtransactions", function(request, response) {
        let txStr = "";

        // For every transaction in the global list of transactions,
        // add the string representation to our outupt string
        for (let i = 0; i < global.transactions.length; i++) {

            txStr += global.transactions[i].prettify();

        }

        response
            .status(200)
            .send(txStr); // Response message
    });
}

module.exports = listtransactions;