
function Person(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}
let person = new Person('ketul', 'patel', 'k@gmail.com');
console.log(person);

function book(author){
    this.author = author;
    return this.author;
}
console.log(book("Chetan Bhagat"));