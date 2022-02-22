
const Block = require("./block");

// Blockchain object
// Simply an array of Block objects
class Blockchain {
    constructor() {
        // Genesis block
        this.chain = [new Block(Array(65).join("0"))];
    }

    getLastBlock() {
        return this.chain[this.chain.length-1];
    }

    getChainLength() {
        return this.chain.length;
    }

    addBlock() {
        // Use the global list of transactions to put in the block
        let newBlock = new Block(this.getLastBlock().hash, global.transactions);
        // Freeze makes the block immutable
        this.chain.push(Object.freeze(newBlock));
    }

    // Validates every block in the blockchain
    isChainValid(blockchain = this){
        for(let i=1; i<blockchain.chain.length; i++) {
            const currentBlock = blockchain.chain[i];
            const prevBlock = blockchain.chain[i-1];

            // Ensure each block has the correct hash of the previous block
            if(
                currentBlock.hash !== currentBlock.getHash() ||
                prevBlock.hash !== currentBlock.prevHash
            ) {
                return false;
            }

            // Ensure each block's hash was mined corrrectly and has the correct number of starting zeros
            let checkString = Array(global.difficulty +1).join("0");
            if (!currentBlock.hash.startsWith(checkString)){
                return false;
            }

            return true;
        }
    }

    // When there are conflicting chains, the longest chain is kept.
    replaceChain(newChain) {
        // If the new chain is shorter, do not replace.
        if (newChain.length <= this.chain.length) return;

        // If the new chain is invalid, do not replace
        if (!this.isChainValid(newChain)) return;

        // Otherwise, the new chain is longer and valid so it should become the consensus chain
        this.chain = newChain;
    }

    prettify() {
        let chainStr = "";

        for (let i = 0; i < this.chain.length; i++) {

            chainStr += this.chain[i].prettify();

            chainStr += "<br><hr>";

        }

        return chainStr; 
    }
}

module.exports = Blockchain;