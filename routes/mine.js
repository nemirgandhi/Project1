// ./routes/brew.js
// * The server attempts to brew coffee, but fails, because it is a teapot.



//Tried to create a class for a block but it isn't seeming to work
// class CryptoBlock{
//     constructor(index, timestamp){
//      this.index = index;
//      this.timestamp = timestamp;    
//     } 

//     return (this.index, this.timestamp)
// }

// index = 1;

// time = getDate()



function mine(app) {
    // (Attempt) to get some coffee
    app.get("/mine", function (request, response) {
    new CryptoBlock(index, time);
    index += 1
        // Send the response for brewing coffee
        response
            .status(418) // HTTP status code 418: I'm a teapot
            .send("This page is for mining"); // Response message
            //.send(CryptoBlock);
    });
}


module.exports = mine;