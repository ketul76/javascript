// This 

console.log(this);
let game = "cricket";

// function sayName()
// {
//     var name = "ketul";
//     console.log(this);
// }
// sayName();















function showMessage(firstName)
{
    function sayHello() {
        return ("Hello " + firstName);
    }
    let msg = sayHello();
	return msg;
}
console.log(showMessage("ketul Patel"));

