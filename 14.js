// javascript classes :

// define a class named 'Person'

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//         greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }
// let person1 = new Person("Jack", 30);
// let person2 = new Person("Tina", 33);
// person1.greet();
// person2.greet();



// create objects without classes :

// let person = {
//     name: "Jack",
//     age: 30,
//     greet: function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//     }
// };
// person.greet(); 




// features of javascript class :

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
        greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let person1 = new Person("Jack", 30);
let person2 = new Person("Tina", 33);
person1.greet();
person2.greet();