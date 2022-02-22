// Mines a block
function mine(app) {
    app.get("/mine", (request, response) => {
        // Call the addBlock function, which calls the mine function
        global.blockchain.addBlock();
        // Clear the list of current transactions because they have now 
        // already been placed in a block and mines
        global.transactions = [];
        // Respond with the string representation of the block
        let msg = `Block added: ${global.blockchain.getLastBlock().prettify()}`;
        response
            .status(200)
            .send(msg);
    });
}

module.exports = mine;