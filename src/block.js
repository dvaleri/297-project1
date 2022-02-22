// Import crypto for encryption functions
const crypto = require("crypto")

// Creates a hash of our transaction strings using SHA256
// Can be represented in hexadecimal
function SHA256(message) {
    return crypto  
        .createHash("sha256")
        .update(message)
        .digest("hex")
}

// The Block object
// Contains time of creation, list of transactions, the hash of the block,
// hash of the previous block, and the nonce.
// The block calls the mine function when created
class Block {
    constructor(prevHash = "", transactions = []){
        this.timeStamp = Date.now();
        this.transactions = transactions;
        this.hash = this.getHash();
        this.prevHash = prevHash;
        this.nonce = 0;

        this.mine();
    }

    // Helper function to get the block hash
    getHash() {
        let txStr = "";
        for (let i=0; i<this.transactions.length; i++) {
            txStr += JSON.stringify(this.transactions[i]);
        }

        return SHA256(
            this.prevHash + this.timeStamp + txStr + this.nonce
        );
    }

    // Function to mine the block
    mine() {
        // To mine, the block's hash needs to start with some number of zeros
        // For now I set it to 2 so it is fast.
        let checkString = Array(global.difficulty + 1).join("0");

        // Keep track of how many tries out of interest
        let tries = 0;

        // Continue to increment the nonce, which will drastically change the block hash
        // until the hash starts with the correct number of zeros.
        // Once this happens, the block has been mined.
        while(!this.hash.startsWith(checkString)) {
            this.nonce++;
            this.hash=this.getHash();
            tries++;
        }

        console.log(`Block mined with ${tries} attempts. Hash: ${this.hash}`);
    }

    prettify() {
        let blockStr = `<div><b>Block</b> #${this.hash}</div>`;
        blockStr += `<div><b>Timestamp:</b> ${this.timeStamp}</div>`;
        blockStr += `<div><b>Previous Hash:</b> ${this.prevHash}</div>`;
        blockStr += "<div><b>Transactions:</b></div><div>";

        // Iterate through all transactions
        for (let i = 0; i < this.transactions.length; i++) {
            blockStr += "    " + this.transactions[i].prettify();
        }

        blockStr += "</div>";

        return blockStr;
    }
}

module.exports = Block;