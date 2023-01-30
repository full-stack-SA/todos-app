const {readFileSync, writeFileSync}= require('fs');

function getTodos() {
   const value= readFileSync('./todos.txt')
   .toString()
   .split('\n');
   return value;
}
module.exports = {
    getTodos
};
// getTodos();

