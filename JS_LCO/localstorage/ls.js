localStorage.setItem('hero','thor');

localStorage.setItem('todo','buy a laptop');

let myHero = localStorage.getItem('todo');
console.log(myHero);

localStorage.setItem('todo','go to gym');
console.log(localStorage.getItem('todo'));

localStorage.removeItem('hero');
localStorage.clear();