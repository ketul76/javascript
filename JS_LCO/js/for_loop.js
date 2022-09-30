const days = ['mon','tue','wed','thur','fri','sat'];

for(let i = 0; i < days.length; i++){
  if (days[i].length > 3){
  console.log(days[i]);
  }
  else
  {};
}
console.log("--------------------------------------------");
for(let i = days.length-1; i>= 0;i-- )
{
  console.log(days[i]);
}