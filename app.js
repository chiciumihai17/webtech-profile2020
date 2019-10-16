const express = require("express");
const app = express();

app.use('/', express.static('frontend'));

app.get("/home", (req, res) => {
   res.send("Hello World");
});

console.log(process.env.IP);

app.listen(3000, () => {
    console.log("Server has started!");
});