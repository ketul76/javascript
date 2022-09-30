const arr = [[0,1,2,3],[1,2,5,7,8,69],[7,8,9]];
const items = [];

// function getvalue(value){
// if (value.length % 2 === 0){
//     return items.push(value);
// }
//     return false;
// }
// arr.forEach(getvalue);
// console.log(items);

// const getvalue = (value) => {
//     if(value.length % 2 === 0){
//         return items.push(value);
//     }
//     return false;
// }
// arr.forEach(getvalue);
// console.log(items);

// arr.forEach(function(v){
//     if (v.length % 2 === 0){
//         return items.push(v);
//     }
//     return false;
// })
// console.log(items);


arr.forEach((v) => {
    if(v.length % 2 === 0){
        return items.push(v);
    }
    return false;
})
console.log(items);
