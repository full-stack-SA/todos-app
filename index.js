const express = require('express');
const cors= require('cors');
let app = express();

//module exports
// const todosRoutes = require('./routes/todos.js');

//router
const todosRouter = require('./routes/todos-router')


app.use(express.json());
app.use(cors());

//module exports
// todosRoutes(app);

//router
app.use(todosRouter)

app.listen(3000, ()=>{console.log('app is running')});


