const myTodos = [];

myTodos.push('buy Bread');
myTodos.push('learn js');
myTodos.push('go to gym');

myTodos.forEach(function(day){
  console.log(day);
})

myTodos.unshift('buy bread');
myTodos.unshift("learn js");
myTodos.unshift("go to gym");

for(let i = 0; i < myTodos.length;i++){
  console.log(myTodos[i]);
}

