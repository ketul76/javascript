// sayhello();                       //Global Context
// function sayhello() {
//     console.log("Hello");
// }
//-------------------------------------
function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}
tipper("5");

var bigTipper = function(a)
{
    var bill = parseInt(a);
    console.log(bill + 5); 
}
bigTipper("25");

console.log(name);
var name = "ketul";

function sayName(){
    var name = "mr. k";
    console.log(name);
}
sayName();
console.log(name);