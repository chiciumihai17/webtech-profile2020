const express = require("express");
const app = express();

app.use('/', express.static('frontend'));

app.get("/home", (req, res) => {
   res.send("Hello World");
});

app.listen(8080, process.env.IP, () => {
    console.log("Server has started!");
});