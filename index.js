//  Imports
const express = require("express");
const path = require('path');
var data = require("./src/data.js");

// App and specify port.
const app = express();
const port = 3000;

// Used to access files from the public folder.
app.use(express.static(path.join(__dirname, 'public')));

// Serve html file.
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/index.html");
});

app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});