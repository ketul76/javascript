// reduce
const ages = [33,12,45,65,62,32,25,75,5,10,78];
const sum1 =ages.reduce(function(total,age){
    return total - age;
})
console.log(sum1);

console.log("*******************************");

const sum = ages.reduce((total,age) => total+age);
console.log(sum);