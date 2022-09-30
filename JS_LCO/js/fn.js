let myPercentage = function(marks,total){
  finalPercentage = (marks/total) * 100;

  grade = "";

  if (finalPercentage > 90){
    grade = "A";
  }
  else if (finalPercentage > 80){
    grade = "B";
  }
  else if (finalPercentage > 70){
    grade = "C";
  }
  else if (finalPercentage > 60){
    grade = "D";
  }
  else{
    grade = "F";
  }
  return `your percentage is ${grade} and ${finalPercentage}`;

}
let rslt = myPercentage(91,100);
console.log(rslt);