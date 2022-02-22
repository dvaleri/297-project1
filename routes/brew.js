
function brew(app) {
    // GET request to "brew coffee"
    // Fails
    app.get("/brew", function(request, response) {
        response
            .status(418) // I'm a teapot status code
            .send("I'm a teapot, so I cannot breq coffee!");

    });
}

module.exports = brew;