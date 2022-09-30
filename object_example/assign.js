const course = {
    title : "Javascript",
    enroll(){
        console.log("You are Successfull Enrolled");
    }
}
const course_1 = Object.assign({},course);
course_1.title = 'reactJs';
console.log(course);
console.log(course_1);