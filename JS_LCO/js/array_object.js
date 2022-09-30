// const myTodos = ["buy bread" ,"go to gym","record Youtube vidios"];
// console.log(myTodos.indexOf("Buy bread"));
console.log("----------------------------------------------------");

const newTodos = [{
  title: 'buy bread',
  isDone: false,
},{
  title: 'go to gym',
  isDone: false,
},{
  title: 'record youtube vidios',
  isDone: true,
}]
// const index = newTodos.findIndex(function(todo,index){
//   return todo.title === 'go to gym'
// })
// console.log(index);

// const findTodo = function(myTodos,title){
//   const index = myTodos.findIndex(function(todo,index){
//     return todo.title.toLowerCase() === title.toLowerCase()
//   })
//   return myTodos[index];
// }
// let printMe = findTodo(newTodos,"GO TO GYM");
// console.log(printMe);

const findTodo = function(myTodos,title){
  const titleRetuned = myTodos.find(function(todo,index){
    return todo.title.toLowerCase() === title.toLowerCase();
  })
  return titleRetuned;
}
let printMe = findTodo(newTodos,"GO TO GYM");
console.log(printMe);