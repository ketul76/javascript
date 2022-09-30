//length
let arr = ["red","green","blue"];
console.log(arr.length); 

//push                     - Add in last
let num = [10,2,0,0,0,0]; 
num.push(1);
num.push(2);
num.push(3);
num.push(4);
num.push(5);
console.log(num);

//pop                      -Remove last
num.pop();                 
console.log(num);


// splice                ------deleting element----------
let scores = [1,2,3,4,5];
let deletingscores = scores.splice(0,3);
console.log(scores);     

// splice                ---------inserting----------
let colors = ["red","black","white"];
colors.splice(2,0,"blue");
console.log(colors);

// Splice                 --------replacing--------------
let lang = ['c','c++','php'];
lang.splice(0,1,'javascript');
console.log(lang);
