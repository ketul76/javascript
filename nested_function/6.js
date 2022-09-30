//nested Function

function add(a,b){
  function logToConsole(message){
    console.log(message);
  }
  let result = a + b;
  logToConsole('result is: ' + result);
}
add(5,7);