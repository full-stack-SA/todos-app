const { getTodos, addTodo, deleteTodo, updateTodo } = require('./todos.js');

app.get('/api/todos', function(req,res) {
    res.json(getTodos());
});


app.delete('/api/todos/:todoId', function(req,res) {
    const { todoId }= req.params;
    res.json(deleteTodo(todoId));
});

app.post('/api/todos', function(req,res) {
    const newTodo = req.body;
    res.json(addTodo(JSON.parse(newTodo)));
});

app.put('/api/todos/:todoId', function(req,res) {
    const updatedTodo = req.body;
    const { todoId }= req.params;
    res.json(updateTodo(todoId, JSON.parse(updatedTodo)));
})