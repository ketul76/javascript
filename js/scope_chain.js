// Scope chainning

var name = "Ketul"; 

console.log("line number 3",name);

function sayName(){
    let name = "Mr. K";
    console.log("Line number 6",name);
    
    sayName2();
    function sayName2(){
        console.log("line Number 10",name);
    }
}

sayName();