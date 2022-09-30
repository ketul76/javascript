function createCourse(title){
  return {
    lecture: 10,
    section: 3,
    title : title,
    notes : {
        introduction : "welcome to Js course",
    },
    enroll(){
        console.log("You are successfull Enrolled");
    },
}
}
const course = createCourse("Javascript");
console.table(course.title);