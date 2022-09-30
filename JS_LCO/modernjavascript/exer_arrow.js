const myTodos = [{
  title: "playing Cricket",
  isDone: true,
},{
  title: "reading Book",
  isDone: true,
},{
  title: "learn Coding",
  isDone: false,
},{
  title: "newspaper",
  isDone: false,
},{
  title: "job",
  isDone: true,
},{
  title: "music",
  isDone: true,
}]


let rslt = myTodos.filter((todo) => todo.isDone === false);
rslt.forEach(element => console.log(element.title))