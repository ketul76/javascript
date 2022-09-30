//   && AND --- operator --- both all sides need to true.
//   || OR  --- operator --- one side need to true.

// let isVerified = false;
// let isLoggedIn = false;
// let hasPayment = false;
// let isGuest    = true;

// if(isVerified && isLoggedIn && hasPayment && isGuest){
//     console.log("you'r Welcome");
// }
// else {
//     console.log("Plz go Back");
// }


let isVerified = false;
let isLoggedIn = false;
let hasPayment = false;
let isGuest    = true;

if(isVerified || isLoggedIn || hasPayment || isGuest){
    console.log("you'r Welcome");
}
else {
    console.log("Plz go Back");
}