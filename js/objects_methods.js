// let user = {
//     firstName : "ketul",
//     lastName: "patel",
//     role : "Admin",
//     loginCount : 32,
//     facebookLogin : true,
//     courseList : [],
//     buyCourse : function(courseName){
//         this.courseList.push(courseName);
//     },
//     getcoursecount : function(){
//         return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
//     },
// } ;
// var courseList = true;
// console.log(user.firstName);
// console.log(user.getcoursecount());
// user.buyCourse("js course");
// console.log(user.getcoursecount());


// let person = new Object();

// person.firstName = "ketul";
// person.lastName = "patel";
// person.email = 'k@gmail.com';

// // person.info = function(){
//     // return `${this.firstName} ${this.lastName}, ${this.email}`; }
// console.table(keys);



function Person(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}
let person = new Person('ketul', 'patel', 'k@gmail.com');
console.log(person);




















