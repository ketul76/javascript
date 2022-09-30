const object1 = {};

console.log(Object.isExtensible(object1));

Object.preventExtensions(object1);

console.log(Object.isExtensible(object1));

