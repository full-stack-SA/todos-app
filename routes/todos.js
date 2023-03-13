
// const { getTodosController, createTodoController, deleteTodoController, updateTodoController } = require('../controllers/todos.js');
// const {app, express} = require('../index.js');
// app.use(express.json());



module.exports=  function (app){
    app.get('/api/todos', getTodos); 

app.delete('/api/todos/:todoId', deleteTodo);

app.post('/api/todos/', createTodo);

app.put('/api/todos/:todoId', updateTodo);

}