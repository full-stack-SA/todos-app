const router = require('express').Router();
const todosController = require('../controllers/todos.js')

router.get('/api/todos', todosController.getTodos); 
router.delete('/api/todos/:todoId', todosController.deleteTodo);
router.post('/api/todos/', todosController.createTodo);
router.put('/api/todos/:todoId', todosController.updateTodo);

module.exports = router;