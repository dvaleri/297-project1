// Imports
const fs = require("fs");

// Reads all the file names in this directory (routes), skipping this file
// Grabs all these files and loads them as routes.
function dynamicallyLoadRoutes(app) {
    fs.readdirSync(__dirname).forEach(function (file) {
        if (
            file == "index.js" || 
            file.substr(file.lastIndexOf(".")+1) !== "js"
        )
            return;

        let name = file.substr(0, file.indexOf("."));
        require("./" + name) (app);
    });
}

module.exports = dynamicallyLoadRoutes;