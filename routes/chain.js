// ./routes/chain.js
// * The server attempts to create a chain for the blockchain.

function chain(app) {
    // (Attempt) to get some coffee
    app.get("/chain", function (request, response) {
        // Send the response for brewing coffee
        response
            .status(418) // HTTP status code 418: 
            .send("This page is the chain of the blockchain"); // Response message
    });
}

module.exports = chain;