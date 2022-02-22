
// Function to generate random fake IP addresses that look real
// xxx.xxx.xxx.xxx
function generateRandomIPv4() {
    let ipv4 = "";
    ipv4 += Math.floor(Math.random() * 255) + 1;
    ipv4 += ".";

    ipv4 += Math.floor(Math.random() * 255) + 1;
    ipv4 += "."

    ipv4 += Math.floor(Math.random() * 255) + 1;
    ipv4 += "."

    ipv4 += Math.floor(Math.random() * 255) + 1;

    return ipv4;
}

// Generate a random amount of money for the transaction
// Obviously in real life this would not be the case...
function generateRandomMoney() {
    return Math.floor(Math.random() * 1000000)
}

// Transaction object
// Contains the sending address, recieving address, and amount of money transfered
// Everything is randomized for now
class Transaction {
    constructor(fromAddress = "", toAddress = "", amount = 0){
        this.fromAddress = generateRandomIPv4();
        this.toAddress = generateRandomIPv4();
        this.amount = generateRandomMoney();
    }

    prettify() {
        let txStr = `<div>Host <i>${this.fromAddress}</i> sent <i>${this.toAddress}</i> \$${this.amount}.</div>`;
        return txStr;
    }
}

module.exports = Transaction;