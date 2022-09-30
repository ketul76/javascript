// Switch Case:- 

var user = "testprep";
switch (user) {
    case "admin":
        console.log("You Get Full Access");
        break;
    case "subadmin":
        console.log("get access to create/delete course");
        break;
    case "testprep":
        console.log("get access to create/delete tests");
        break;
    case "user":
        console.log("get access to consume content");
        break;
    default:
        break;
}