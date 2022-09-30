function makeCounter(){
  let count = 0;
  increment = function(){
    return count ++; 
  }
  return increment;
}
counter1 = makeCounter();
counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log("-------------");
console.log(counter2());console.log(counter2());console.log(counter2());
