let myMultiplayer = function(num1,num2){
  return num1 * num2;
}
console.log(myMultiplayer(2,2));

console.log("-----------------------");

let guestUser = function(name = 'unName',courseCount = 0){
  return 'hello ' + name  + " and your course count is " + courseCount; 
}
console.log(guestUser('ketul',5));