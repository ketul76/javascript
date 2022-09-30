// slice () :- 
// extracts a section of string.
// and return of a string.
// without modifying the original string.

let fullname = "Ketul patel";
let firstname;
let lastname;

firstname = fullname.slice(0,5);
 lastname = fullname.slice(6);

// firstname = fullname.slice(0,fullname.indexOf(" "));
// lastname = fullname.slice(fullname.indexOf(" ") + 1);

console.log(firstname);
console.log(lastname);