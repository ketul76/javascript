// alert("file is attached");

// console.log(document.getElementById('idone'));
// console.log(document.getElementsByClassName('classone'));

// const myElement = document.querySelectorAll('p');
// console.log(myElement);


// const myPelements = document.querySelector('p');
// myPelements.textContent = 'im changed';


// const myPelements = document.querySelectorAll('p');
// myPelements.forEach((p) => p.textContent = 'This IS a Changed By Loop');

// const myNewPara = document.createElement('p');
// myNewPara.textContent = 'i was added via js';
// document.querySelector('body').appendChild(myNewPara);


// document.querySelector('button').addEventListener('click',(event)=>{
//   event.target.textContent = "this was Button Pressed changed"
// })
  //track input form


// document.querySelector('#myform').addEventListener('input',(event)=>{
//   console.log(event.target.value);
// })

//validation

// function myvalidation(){
//   let myvalue = document.getElementById('myform').value;

//   if(isNaN(myvalue) || myvalue < 1 || myvalue > 20){
//     console.log("not valid input");
//   }
//   else{
//     console.log("this input is ok");
//   }
// }


//form validation

document.querySelector('.myform').addEventListener('submit',(event)=>{
  event.preventDefault();
  console.log(event.target.username.value);
  console.log(event.target.realname.value);
  event.target.username.value = ''; 
})




























