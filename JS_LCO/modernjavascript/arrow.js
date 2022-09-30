const sayHello = (name) => {
  return "hello " + name + "!";
}
console.log(sayHello('ketul'));

const hello = (name) => `hi how are you ${name}`;
console.log(hello('ketul patel'));


const todos = [{
  title: "buy bread",
  isDone: true,
},{
  title: "go to gym",
  isDone: false,
},{
  title: "record vidios on youtube",
  isDone: true,
}]

const thingsDone = todos.filter((todo) => todo.isDone == true)

console.log(thingsDone);