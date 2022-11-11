const express = require("express");
const todoRoutes = require("./route/todo")
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Admin:admin@todo.u6zsqus.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("connected to DB"))
.catch((err) => console.log(err))


app.listen(4020, () => {
    console.log("Hello from port 4020");
})



app.use(express.json());

app.use("/api/v1/todos", todoRoutes);

module.exports = app;