// Function to view the entire blockchain
function chain(app) {
    app.get("/chain", function (request, response) {
        // Grabs the string representation of our blockchain
        let chainStr = global.blockchain.prettify();
        response
            .status(200)
            .send(chainStr); // Respond with this string
    });

}



module.exports = chain;