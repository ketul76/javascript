function makeCounter(){
  let count = 0;

  increment = function(){
    return count++;
  }
  return increment;
}
counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());