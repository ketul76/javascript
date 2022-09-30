const companies = [
    {name : "google" , category : "product based",start :1981},
    {name : "amaZone" , category : "product based",start :1992},
    {name : "paytm" , category : "product based",start :1999},
    {name : "Coforge" , category : "servise based",start :1989},
    {name : "Mindtree" , category : "servise based",start :1989}
];
const ages = [33,12,45,65,62,32,25,75,5,10,78];

//filter

const age1 = ages.filter(function(v){
    if (v >= 20){
        return true;
    }
    return false;
});
console.log(age1);

console.log("------------------------------------");


const final = ages.filter(age => age >= 20);
console.log(final);

console.log("-------------------------------------");


const sb1 =companies.filter(function(c){
   if (c.category === "servise based"){
            return true;
   }
});
console.log(sb1);

console.log("---------------------------------------");

let sb = companies.filter(company => company.category === "servise based");
console.log(sb);

console.log( "Just          !@#$%^&*()_+          Fun" );
console.log("END Of the Programmme");