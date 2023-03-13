const { getTodos, setTodos, addTodo, deleteTodo, updateTodo } = require('./services/todos.js');


function displayTodos() {
    const todos = getTodos()
    .map((item) => `${item.id}
    ${item.task}
    User: ${item.user}
    Category: ${item.category}
    Done? ${item.isDone ? 'Yes' : 'No'}`)
    .join('\n\n')
    console.log(todos);
}

// console.log(displayTodos(getTodos()));



function crud() {
    const operation = process.argv[2];
    switch (operation) {
        case 'create':
            addTodo(process.argv[3]);
            console.log('Your task was added!');
            break;
        case 'update':
            updateTodo(process.argv[3], process.argv[4])
            console.log('Your task was updated!');
            break;
        case 'delete':
            deleteTodo(process.argv[3])
            console.log('Your task was deleted!');
            break;

        default:
            displayTodos();
    }
}
crud();

