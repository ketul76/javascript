const person = {
    name : "ketul",
    age : 25,
    city : "Ahmedabad"
}
for ([k,v] of Object.entries(person)){
    console.log(`key is ${k} value is ${v}`);
}
console.log("----------------------------------------");
const person1 = {
    name : "ketul",
    age : 25,
    city : "Ahmedabad"
}
console.log(Object.entries(person1));