//  JavaScript arrow functions :

const addNumbers = (a, b) => a + b;
const result = addNumbers(5, 3);
console.log(result);



// Arrow functions with no arguments :

let sayHello = () => "hello world"
console.log(sayHello());


// Arrow functions with one argument :

let a = x => x + 1
console.log(a(2));



// this Keyword With Arrow Function :
// constructor function

function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayAge = function () {
        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age);
        }
        innerFunc();
    }
}
const x = new Person();
x.sayAge();