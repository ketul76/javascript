/*
DEfine  a function that can answer the role of a user.
A user can following roles:- 
- Admin - with all access
- Subadmin - with access to create/delete cources
- testprep - with access to create/delete cources
- user - consume all content
- other - trail user. 
*/
function getUserRole(name,role){
    switch (role) {
        case "admin":
            return `${name} is admin with full acess`;
            break;
        case "subadmin":
            return `${name}  with access to create/delete cources`;
            break;
        case "testprep":
            return `${name}  with access to create/delete tests`;
            break;
        case "user":
            return `${name}  consume all content`;
            break;
        default:
            return "Trail User"
            break;
    }
}
console.log(getUserRole("ketul","user"));
var getrole  =  getUserRole("manan","admin");
console.log(getrole);




