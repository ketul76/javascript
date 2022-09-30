// scope in let 

let iAmGlobal = "code"
if(true){
    let iAmLocal = 123456
    console.log(iAmGlobal);
    console.log(iAmLocal);
}
console.log(iAmLocal);            // shown Error 

