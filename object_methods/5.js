let myObj = {
    foo: 1,
    bar: 2,
};
myObj.qux = 3;
for (let key in myObj) {
    console.log(key);
  }