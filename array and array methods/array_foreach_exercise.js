let total = 0;
let cart = [5,6,7,8];
function checkOut(element){
    total = total + element;
};
cart.forEach(checkOut);
console.log(total);