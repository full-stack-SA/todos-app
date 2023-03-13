const {readFileSync, writeFileSync}= require('fs');

function getTodos() {
   const value= JSON.parse(readFileSync('./todos.json')
   .toString());
   return value;
}

function setTodos(todos) {
    const newTodos= JSON.stringify(todos);
      writeFileSync('./todos.json', newTodos);
}

function addTodo ({task, user, isDone, category}) {
   const currentTodos= getTodos();
   currentTodos.push( {
    id:btoa(Math.random()),
    task,
    user,
    isDone,
    category
   }
   )
   setTodos(currentTodos);
   return currentTodos;
}

function deleteTodo (id) {
    const currentTodos= getTodos();
    setTodos(currentTodos.filter(todo => todo.id !== id));
    return (currentTodos.filter(todo => todo.id !== id));
}

function updateTodo(id, updatedTask) {
    const currentTodos= getTodos();
    const taskToUpdate = currentTodos.find(todo => todo.id === id);
    if (taskToUpdate) {
        taskToUpdate.task = updatedTask;
        setTodos(currentTodos);
    }
    else {
        console.log("no id found");
    }
    return currentTodos;
}

module.exports = {
    getTodos, setTodos, addTodo, deleteTodo, updateTodo
};
