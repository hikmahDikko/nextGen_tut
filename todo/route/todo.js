const express = require("express");
const todoController = require("../controller/todo");

const router = express.Router();

const { createTodo, getAll } =   todoController;

router.route("/").get( getAll).post(createTodo);

module.exports = router;
