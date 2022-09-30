// 5 thi vadhare
let arr = [1,2,3,4,5,6,7,8,9,10];
const rslt = arr.filter(maxValue);
function maxValue(value){
    if (value > 5){
        return true;
    }
    return false;
}
console.log(rslt);