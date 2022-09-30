// length of string
let text = "ketul patel";
console.log(text.length);

//------------------------------
// return the character in text1 
let text1 = "ketul s Patel";
console.log(text1.charAt(7));    // output is space 

//---------------------------------
console.log(text1.charCodeAt(2));  // return unicord values

//------------------------------------
let final = text1.concat(" is a happy");
console.log(final);

//------------------------------------------------
console.log(String.fromCharCode(72,69,76,76,79));

//--------------------------------------------------
let text3 = "Hello world, welcome to the universe.";
let result = text3.indexOf(".");
console.log(result);

//-----------------------------------------
let msg = "call bat"
let rslt = msg.replace("c", "b");
console.log(rslt);

//----------------------------- 
let nam = "ketul patel";
substr = "l"
console.log(nam.lastIndexOf(substr));

//--------------------------------------------------
const message = "JavaScript is a fun programming language.";
const exp = /programming/;
let re = message.match(exp);
console.log(re);

//--------------------------------------------------------------
var intRegex = /[0-9 -()+]+$/;  
var myNumber = 'k';
var isInt = myNumber.search(intRegex);
console.log(isInt);

//-------------------------------------------------------
const message1 = "JavaScript is fun";
let result1 = message1.slice(0, 10);
console.log(result1);

///-----------------------------------------------
const message2 = "JavaScript::is::fun";

let result2 = message2.split("::");
console.log(result2);

//------------------------------------------------
let msgme = "excellent"
console.log(msgme.substring(0,4)) //returns "exce"

//--------------------------------------------------
const que = "JavaScript is fun.";

let answer = que.substring(0, 10);
console.log(answer);

//----------------------------------------------

let nameIs = "KeTuL";
const lowerMessage = nameIs.toLowerCase();
console.log(lowerMessage);
const upperMessage = nameIs.toUpperCase();
console.log(upperMessage);

//--------------------------------------------

const messageIs = "JavaScript is fun";
let resultIs = messageIs.includes("Java");
console.log(resultIs);

//-------------------------------------------- 
let sentence = "Javascript is A programming language";
let check = sentence.endsWith("language");
console.log(check);    

//=-------------------------------------------

let festival = "uttarayan";
let reslt = festival.repeat(2);
console.log(reslt);

//--------------------------------------------------

const messag = "     JAVASCRIPT IS FUN      ";
const newMessage = messag.trim();
console.log(newMessage);


//----------------------------------------
var mystr = "Hello World!";
var res = mystr.valueOf();
console.log(res);