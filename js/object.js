let user = {
    firstName : "ketul",
    lastName: "patel",
    role : "Admin",
    loginCount : 32,
    facebookLogin : true
} ;

console.log(user.firstName);
console.log(user["lastName"]);

user.firstName = "manan";
console.log(user.firstName);

console.table(user);