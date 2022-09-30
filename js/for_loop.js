// for(i = 0; i <= 10; i++){
//     console.log(i);
// };

// const myStates = ["gj","rj","tm","mh","up",1947];
// for (let i = 0; i < myStates.length; i++){
//     console.log(myStates[i]);
// }


const myStates = ["gj","rj","tm","mh","up",1947];
for (let i = 0; i < myStates.length; i++){
    if (typeof myStates[i] !== 'string') continue;
    console.log(myStates[i]);
}