const arr = [1,2,3,5,6,8,10];
const items = [];
// function getvalue(value){
// if (value > 5){
//     return items.push(value);
// }
//     return false;
// }
// console.log(items);

// const getvalue = (value) => {
//     if(value > 5){
//         return items.push(value);
//     }
//     return false;
// }
// arr.forEach(getvalue);
// console.log(items);

// arr.forEach(function(v){
//     if (v > 5){
//         return items.push(v);
//     }
//     return false;
// })
// console.log(items);


// arr.forEach((v) => {
//     if(v > 5){
//         return items.push(v);
//     }
//     return false;
// })
// console.log(items);

arr.forEach((v) => console.log(items.push(v) > 5))    
