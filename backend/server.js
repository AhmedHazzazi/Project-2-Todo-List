const express = require("express");
const app = express();
const db = require('./db');
const Todo = require('./todo');

app.get('/', (req, res) => {
    res.json("GET / is Working");
});

app.get("/tasks", (req, res) => {
    Todo.find({}, (err, data) => {
        if(err) {
            console.log("ERROR: ", err);
        }
    });
});

app.post()

app.listen(5000, () => {
    console.log("SERVER IS WORKING ..");
})