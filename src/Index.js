//  Imports
const express = require("express");
var data = require("./Data.js");

// App and specify port.
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "\\index.html");
});

app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});