// ./routes/newtransactions.js
// * The server attempts to make transactions with blocks.

function newtransactions(app) {
    // (Attempt) to get some coffee
    app.get("/newtransactions", function (request, response) {
        // Send the response for brewing coffee
        response
            .status(418) // HTTP status code 418: I'm a teapot
            .send("This page is to make a new transaction"); // Response message
    });
}

module.exports = newtransactions;