const str = ["ketu","sumit","joshi"];
const items = [];
// function getString(value){
//     if(value.length > 4){
//         return items.push(value)
// }
// }
// str.forEach(getString);
// console.log(items);

// const getString = (v) => {
//     if(v.length > 4){
//         return items.push(v);
//     }
//     return false;
// }
// str.forEach(getString);
// console.log(items);

// str.forEach(function(v){
//     if(v.length > 4){
//         return items.push(v);
//     }
//     return false;
// })
// console.log(items);


str.map((v) => {
    if(v.length > 4){
        return items.push(v);
    }
    return false;
})
console.log(items);
