// f-6
// function multiply(x,y){
//   return x*y;
// }
// let result = multiply(5,5);
// console.log(result);

// let multiply = (x,y) => {
//     return x*y;
// } 
// console.log(multiply(5,5));

// let greeting = (a,b="world") => {
//     return a + " " + b;
// }
// console.log(greeting("hello"));

// f-7
// function greeting(a,b="world"){
//   return a + " " + b;
// }
// console.log(greeting("hello"));


// let multiply = (num) => {
//     if(num <= 5){
//         return num * num;
//     }     
//     else{
//         return "Not Available";
//     }
// } 
// console.log(multiply(5));


// <f-8>
// function multiply(num){
//   if(num > 5){
//     return num*num;
//   } 
//
//  return 0;
//  
// }
// let res = multiply(5);
// console.log(res);
//------------------------------------------

// a-2
// const arr = ["One","TWO","Three","Four"];
// console.log(arr[0]);

//a-3
//Write function to get last element of an array
// Using what we learned earlier, let's write a generic function that returns the last element of an array we pass to it. As you can see, we use that function to get the last element of both arrOne and arrTwo. But, the function is not complete yet. Add what's missing to get the last element of any array we pass to it – you may need to use the Array.length property.

// function getLastElementOfArray(requestedArr){
//     // last element get 
//    return requestedArr[requestedArr.length -3];
// }
// const arr = [7,8]
// console.log(getLastElementOfArray(arr));

// let getLastElementOfArray = (requestedArr) => {
//     return requestedArr[requestedArr.length - 1];
// }
// const arr = [1,23,52];
// console.log(getLastElementOfArray(arr));

// function getElementOfArray(reaquestedArray,requestedIndex){
//     if(requestedIndex <= reaquestedArray.length-1)
//         {
//             return reaquestedArray[requestedIndex];
//         }
//         return "index greater";
// }
// const arr = [7,5,6,-1];
// console.log(getElementOfArray(arr,3));


// const getElementOfArray = (requestedArray,requestedIndex) => {
//     if(requestedIndex <= requestedArray.length - 1){
//         return requestedArray[requestedIndex];
//     }
//     return "index Greater";
// }
// const arr = [7,5,6,78,8,8];
// console.log(getElementOfArray(arr,2));



// index array na element ni index karta vadhare hase to undefined.
// array element 0 thi nana hase to undefined avse.

//a - 3
// Create a JavaScript array using variables
// You can put any value inside an array. Here, the array named arr even contains another array. You can also insert values from other variables into the array.Insert the value of the variable string into the arr. Insert it in the right place so that the console.log() statement logs true.





//a-4
// const arr = ["1","2","3","4","5"];
// console.log(arr.indexOf("3") === 2);


//a-5
// const arr = [1,2];
// arr.push(3);
// console.log(arr[2] === 3);

//----------------------------------------------


//l-1





//l-2
// const arr = [1,2,3,4,"ketul"];
// for(let i = 0;i<arr.length;i++){
//     if(typeof arr[i] === 'number'){
//         console.log(arr[i]);
//     }
// }

//l-3
// const arr = ["ketul",1,2,"manan"];
// for(let i = 1;i<arr.length;i++){
//     if(typeof arr[i] !== "number"){
//         break;
//     }
//     console.log(arr[i]);
// }

//--------------------------


// function myFunc(a,n){
//     for(let i=0;i < a.length;i++){
//         if(n === i+1){
//             return a[i];    
//         }
//     }
// }
// console.log(myFunc('abcd',4));


// function myFunc(a,n){
//     return a[n -1 ]
// }
// console.log(myFunc('abcd',3));

// const myFunc = (a,n) => {
//     return a[n-1]
// } 
// console.log(myFunc("abcd",1));

// const incrementElement = (requestedElement,incrementAmount) => {
//     console.log(requestedElement+incrementAmount);
// }

// const arr = [1,2,3,45,5];
// arr.forEach((currentvalue,index,array) => incrementElement(currentvalue,index))

// const myFunction = (a,n) => {
//    return a[n - 1];
// }
// console.log(myFunction([1,2,3,4,5],3));
