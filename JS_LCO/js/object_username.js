let userEmail = 'abc12345';
let password = '1234';

let userChecker =function(mystring){
  if((mystring.includes(123)) && (mystring.length > 6)){
    return true;
  }
  return false;
}
// console.log(userChecker(userEmail));
let passchecker = function(pass){
  if((pass.includes(1234)) && (pass.length > 8)){
    return true;
  }
  return false;
}
console.log(userChecker(password));