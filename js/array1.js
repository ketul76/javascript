// Array is a collection of data items.
// in Js mix Datatype stored in array.
// In Array index Start A Zero.
//=====================================================

//-- Access Elements Of Array --\\

let myArray = ['h','e','l','l','o'];
console.log(myArray[0]);          // output :-  h
console.log(myArray[1]);          // output :-  e

//-------------------------------------------------------

//-- Add An Elements Of an Array --\\
//-- Two Methods to add elements an array --\\
//- push()     add elements at a last
//- unshift()  add elements at a beggining

let countries = ['india' , 'USA'];
countries.push('Russia');             // russia add in last
countries.unshift('israel');          // israel add in first
console.log(countries);        

//------------------------------------------------------------

// remove element

let number = [1,2,3,4,5];
number.pop();
number.shift();
console.log(number);

//---------------------------------------------------------
// length

let num = [1,2,3,4,5,6,7];
console.log(num.length);

// index of (find out Index in programmatic array)

let mixValue = ["ketul" , "s" , 1, 2 ,"m"];
console.log(mixValue.indexOf("m"));

console.log(Array.from("ketul")); // "ketul" into Array like ['k','e','t','u','l'];
 


