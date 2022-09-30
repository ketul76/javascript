const person = {
    isHuman : false,
    printIntroduction : function(){
            console.log(`My Name is ${this.name}. am I human? ${this.isHuman}`);
    },
};
const me = Object.create(person);
me.name = "Ketul";
me.isHuman = true;
me.printIntroduction();