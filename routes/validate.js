// Validates the blockchain
function validate(app) {
    app.get("/validate", function (request, response) {
        // Call the isChainValid function
        let isValid = global.blockchain.isChainValid();

        // This tells us of the chain is valid or not.
        // Respond with an appropriate message
        let responseStr = "";
        if (isValid){
            responseStr = "The blockchain is valid!";
        } else {
            responseStr = "The blockchain is invalid";
        }

        response
            .status(200)
            .send(responseStr);
    });
}

module.exports = validate;