const Todo = require("../model/todo");

exports.createTodo = async (req, res) => {
    try {
        const { name, description } = req.body;
        const todo = await Todo.create({ name, description });
        return res.status(200).send({
            status : "success",
            meassage : "Successfully created a todo",
            data : {
                todo
            }
        });
          
    } catch (error) {
        const errors = handleError(error)
        res.status(400).json({ errors });
    } 
}

exports.getAll = async (req, res) => {
    try {
        const todo = await Todo.find();
        res.status(200).json({
            status: "success",
            results: todo.length,
            data: todo,
      }); 
    } catch (error) {
        const errors = handleError(error)
        res.status(400).json({ errors });
    }
}