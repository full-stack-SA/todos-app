const {getTodos} = require('./todos.js');

// function displayTodos() {
//     const todos= getTodos();
//     const todosBullet= todos.map((todo, index) => `${(index +1)}. ${todo}`)
//     .join('\n');
//      return todosBullet;
//  }

 function displayTodos(todos) {
    const todosBullet= todos.map((todo, index) => `${(index +1)}. ${todo}`)
    .join('\n');
     return todosBullet;
 }

 console.log(displayTodos(getTodos()));