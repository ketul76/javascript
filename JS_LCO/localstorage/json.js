const student = {
  name : 'ketul',
  age: 25,
  isActiive:true,
}
 
// convert object into a string in localstorage

const convertJson = JSON.stringify(student);
console.log(typeof convertJson);

// localStorage.setItem('student',convertJson);

const jsonParse = JSON.parse(convertJson);
console.log(typeof jsonParse);