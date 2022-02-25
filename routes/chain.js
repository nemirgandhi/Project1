// ./routes/brew.js
// * The server attempts to brew coffee, but fails, because it is a teapot.

function chain(app) {
    // (Attempt) to get some coffee
    app.get("/chain", function (request, response) {
        // Send the response for brewing coffee
        response
            .status(418) // HTTP status code 418: I'm a teapot
            .send("This page is the chain of the blockchain"); // Response message
    });
}

module.exports = chain;