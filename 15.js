// JavaScript Class Inheritance
// Class Inheritance

// class Person { 
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }
// class Student extends Person {
// }
// let student1 = new Student('Jack');
// student1.greet();


// JavaScript super() keyword :

// class Person { 
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }
// class Student extends Person {
//     constructor(name) {
//         console.log("Creating student class");
//                 super(name);
//     }
// }
// let student1 = new Student('Jack');
// student1.greet();




// Overriding Method or Property :

class Person { 
    constructor(name) {
        this.name = name;
        this.occupation = "unemployed";
    }
    
    greet() {
        console.log(`Hello ${this.name}.`);
    }
}
class Student extends Person {
    constructor(name) {
                super(name);
                this.occupation = 'Student';
    }
        greet() {
        console.log(`Hello student ${this.name}.`);
        console.log('occupation: ' + this.occupation);
    }
}
let p = new Student('Jack');
p.greet();