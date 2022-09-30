function myFunction(){
  let a = 4;               // a is a local 
  return a*a;
}
console.log(myFunction());
console.log('-------------------');
let b = 10;
function myFun(){
  return b + 1;
}
console.log(myFun());