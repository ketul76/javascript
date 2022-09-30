let myObj = {
    foo: 1,
    bar: 2,
};
myObj.qux = 3;
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});
console.log("-----" );
for (let key in myObj) {
    console.log(key); 
}
console.log("--------------");
for (let key in myObj) {
    if (myObj.hasOwnProperty(key)) {
      console.log(key);
    }
}