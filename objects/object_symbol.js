let obj = {};
let a = Symbol("a");
let b = Symbol.for("b");

obj[a] = "localSymbolValue";
obj[b] = "globalSymbolValue";


let objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length);
console.log(objectSymbols); 
console.log(objectSymbols[0]); 