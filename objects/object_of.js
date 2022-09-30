const proto = {};
const obj = Object.create(proto);
console.log(Object.getPrototypeOf(obj) === proto);
