const object1 = {
    property1: 46
  };
Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);  
  
delete object1.property1; // cannot delete when sealed
console.log(object1.property1);
