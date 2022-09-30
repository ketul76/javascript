const convertToRs = (dollar) =>{
  if(typeof dollar === 'number'){
    return dollar * 79.25;
  }else{
    throw Error('amount needs to in number')
  }
}
// const myValues = convertToRs("five");
//   console.log(myValues);  
try {
  const myValues = convertToRs("five");
  console.log(myValues);  
} catch (error) {
  console.log(error);
}
console.log("i will not run program crashes");

