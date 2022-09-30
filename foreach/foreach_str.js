const str = ["ketu","ahmedabad","sumit","joshi"];
const items = [];

// function oddvalue(v,i){
//     if (i % 2 === 1){
//         return items.push(v);
//     }
//     return false;
// }
// str.forEach(oddvalue);
// console.log(items);

// const oddvalue = (v,i) => {
//     if(i % 2 === 1){
//         return items.push(v);
//     }
//     return false;
// }
// str.forEach(oddvalue)
// console.log(items);

// str.forEach(function(v,i){
//     if (i % 2 === 1){
//         return items.push(v);
//     }
//     return false;
// })
// console.log(items);


str.forEach((v,i) => {
    if(i % 2 === 1){
        return items.push(v);
    }
    return false;
})
console.log(items);