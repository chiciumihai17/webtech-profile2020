const express = require("express");
const app = express();

app.use('/', express.static('frontend'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/home", (req, res) => {
   res.send("Hello World");
});

app.get("/messages", (req, res) => {
    var messages = [];
    var message = {
        name: "Mihai",
        text: "Hello from the web"
    };
    messages.push(message);
    res.status(300).send(messages);
});

app.post("/messages", (req, res) => {
    console.log(req.body);
    // console.log(req)
    res.send("Data: " + req.body);
});

app.listen(3000, () => {
    console.log("Server has started!");
});