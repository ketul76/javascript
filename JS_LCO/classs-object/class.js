class User{
  constructor(firstname,middlename,lastname,credits){
    this.firstname = firstname;
    this.middlename = middlename
    this.lastname = lastname;
    this.credits = credits;
  }
 getFullName(){
  return `${this.firstname} ${this.middlename} ${this.lastname} is my full name`;
 } 
 getEdit(newname){
  const myname = newname.split(' ');
  this.firstname = myname[0];
  this.middlename = myname[1];
  this.lastname = myname[2]; 
 }
}
const newUser = new User('ketul','patel',25);
// console.log(newUser);

// const newEmp = new User();
// console.log(newEmp);
// console.log(newUser.getFullName());
newUser.getEdit('Ketul surendraBhai Patel');
console.log(newUser.getFullName());