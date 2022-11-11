const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    description : {
        type : String,
        //required : [true, "Please enter your phone number"],
    },
    time : {
        type : Date,
        default : Date.now()
    },
});


const Todo = mongoose.model("Todo", userSchema);

module.exports = Todo;