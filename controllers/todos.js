const todosService = require('../services/todos.js');

function getTodos(req,res) {
    res.json(todosService.getTodos());
};

 function deleteTodo (req,res) {
    const { todoId }= req.params;
    res.json(todosService.deleteTodo(todoId));
};

 function createTodo(req,res) {
    const newTodo = req.body;
    res.json(todosService.addTodo(JSON.parse(newTodo)));
};

function updateTodo(req,res) {
    const updatedTodo = req.body;
    const { todoId }= req.params;
    res.json(todosService.updateTodo(todoId, JSON.parse(updatedTodo)));
}

module.exports = {
    getTodos,
    deleteTodo,
    createTodo,
    updateTodo
}