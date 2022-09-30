const arr = [1,2,3,5,6,8,10];
const items = [];
// function evenarr(v,i){
//     if (i % 2 === 0){
//         return items.push(v);
//     }
//     return false;
// }
// arr.forEach(evenarr);
// console.log(items);

// const evenarr = (v,i) => {
//     if (i % 2 === 0){
//         return items.push(v);
//     }
//     return false;
// }
// arr.forEach(evenarr);
// console.log(items);

// arr.forEach(function(v,i){
// if (i % 2 === 0){
//     return items.push(v);
// }
// return false;
// })
// console.log(items);
    
    
arr.forEach((v,i) => {
    if(i % 2 === 0){
        return items.push(v);
    }
    return false;
})
console.log(items);