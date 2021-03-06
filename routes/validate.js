// ./routes/validate.js
// * The server attempts to validate transactions.

function validate(app) {
    // (Attempt) to get some coffee
    app.get("/validate", function (request, response) {
        // Send the response for brewing coffee
        response
            .status(418) // HTTP status code 418: I'm a teapot
            .send("This page validates the new transaction"); // Response message
    });
}

module.exports = validate;