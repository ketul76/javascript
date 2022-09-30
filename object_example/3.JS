const course = {
    title : "Javascript",
    enroll(){
        console.log("You are Successfull Enrolled");
    }
}
const course_1 = {...course};
course_1.title = "react js"
console.log(course); 
console.log(course_1);