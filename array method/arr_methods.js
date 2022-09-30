const companies = [
    {name : "google" , category : "product based",start :1981},
    {name : "amaZone" , category : "product based",start :1992},
    {name : "paytm" , category : "product based",start :1999},
    {name : "Coforge" , category : "servise based",start :1989},
    {name : "Mindtree" , category : "servise based",start :1989}
];
const ages = [33,12,45,65,62,32,25,75,5,10,78];
//for loop
// for (i=0;i<companies.length;i++){
//     console.log(companies[i]);
// }

// foreach
companies.forEach((c) => console.log(c));
// companies.forEach(function(c,i){
//     console.log(c);
// });

// companies.forEach((company,index) => {
//    // console.log(company);
// });

// companies.forEach((c) => console.log(c));

// filter

// const age1 = ages.filter(function(age) {
//     if(age >= 20){
//     return true;
//     }
// });
// console.log(age1);


// const final = ages.filter(age => age >= 20);
// console.log(final);

// const sb =companies.filter(function(c){
//     if (c.category === "servise based"){
//         return true;
//     }
// });
// console.log(sb);

// let sb = companies.filter(company => company.category === "servise based");
// console.log(sb);


//map

// const cp = companies.map(function(c,index){
//     return `${c.name}  ${c.category}`
// })
// console.log(cp);

//sort 

// let sortedArrays = ages.sort((a,b) => (a-b));
// console.log(sortedArrays);
//  // 

// // reduce
// const sum =ages.reduce(function(total,age){
//     return total + age;
// })
// console.log(sum);

// const sum = ages.reduce((total,age) => total+age);
// console.log(sum);