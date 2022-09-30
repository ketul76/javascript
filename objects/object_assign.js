const a = {
    k: 1,
    p: 2,
}
const b = {
    p : 3,
    s : 4,
}
const target = Object.assign(b,a)
console.log(a);
console.log(target);
console.log(b);