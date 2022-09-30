
//------------------------------------------------

function showMessage(firstName)
{
    function sayHello() {
        return ("Hello " + firstName);
    }
    let msg = sayHello();
	return msg;
}
console.log(showMessage("ketul Patel"));

//-------------------------------------------------------

let age = 5;
let welcome = (age < 18 ) ? () => console.log("baby") : ()  =>console.log("adult");
welcome();


//----------------------------------------------------------