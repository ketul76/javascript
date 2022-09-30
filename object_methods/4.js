let myObj = {
    b: 1,
    a : 3,
    c : 5,
}
let uppercase = [];
let objectkeys = Object.keys(myObj);
objectkeys.forEach(function(key){
    uppercase.push(key.toUpperCase());
})
console.log(uppercase);