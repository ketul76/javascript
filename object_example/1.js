const course = {
    lecture: 10,
    section: 3,
    title : "javascript",
    notes : {
        introduction : "welcome to Js course",
    },
    enroll(){
        console.log("You are successfull Enrolled");
    },
};
console.log(course.enroll());
course.price = 10000;
console.log(course);