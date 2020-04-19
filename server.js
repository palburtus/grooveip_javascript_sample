const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "8000";

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html'));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});