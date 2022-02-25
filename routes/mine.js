// ./routes/brew.js
// * The server attempts to brew coffee, but fails, because it is a teapot.

function mine(app) {
    // (Attempt) to get some coffee
    app.get("/mine", function (request, response) {
        // Send the response for brewing coffee
        response
            .status(418) // HTTP status code 418: I'm a teapot
            .send("This page is for mining"); // Response message
    });
}

module.exports = mine;