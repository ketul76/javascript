let john= {
  name : "i'm john",
  age:24,
  isActive:true,
}

let marry = {
  name: " i'm marry",
  age:23,
  isActive:true,
}
let sam ={
  name: "i'm Sam",
  age:29,
  isActive:false,
}
let users = new Map();
users.set('john',john);
users.set('marry',marry);
users.set('sam',sam);

console.log(users);
console.log(users.get('sam'));
console.log(users.keys);

for(const key of users.keys()){
  console.log(key);
}

for(const value of users.values()){
  console.log(value.name);
}

for(const [key,value] of users.entries()){
  // console.log(key + "==" + value.name);
  console.log(`the key is ${key} and the value is ${value.name} `);
}

users.forEach((value,key) => console.log(key + "==" + value.name));

let arr = [['one','1'],['two','2'],['third','3']];
let newMap = new Map(arr);
console.log(newMap);