//closure Function

const add = function(){
  let counter = 0;
  return function(){
    counter = counter + 1;
    return counter;
  }
}
console.log(add());
console.log(add());
console.log(add());