// JavaScript Proxies :
// Creating a Proxy Object :

// let student1 = {
//     age: 24,
//     name: "Felix"
// }

// const handler = {
//     get: function(obj, prop) {
//         return obj[prop] ? obj[prop] : 'property does not exist';
//     }
// }
// const proxy = new Proxy(student1, handler);
// console.log(proxy.name); 
// console.log(proxy.age); 
// console.log(proxy.class); 




// let student = {
//     name: 'Jack',
//     age: 24
// }
// const handler = { };
// const proxy1 = new Proxy(student, {});
// console.log(proxy1); 
// console.log(proxy1.name); 



// Proxy handlers

// get() handler :

// let student = {
//     name: 'Jack',
//    age: 24
// }
// const handler = {
//     get(obj, prop) {

//         return obj[prop];
//   }
// }
// const proxy = new Proxy(student, handler);
// console.log(proxy.name); 




// set() handler

// let student = {
//     name: 'John'
// }
// let setNewValue = {
//   set: function(obj, prop, value) {

//     obj[prop] = value;
//     return;
//   }
// };
// let person = new Proxy(student, setNewValue);
// person.age = 25;
// console.log(person);



// Uses of Proxy
// 1. For Validation


// let student = {
//     name: 'Jack',
//     age: 24
// }
// const handler = {
//     get(obj, prop) {
//     if (prop == 'name') {
//       return obj[prop];
//     } else {
//       return 'Not allowed';
//     }
//   }
// }
// const proxy = new Proxy(student, handler);
// console.log(proxy.name); 
// console.log(proxy.age); 



// 2. Read Only View of an Object

// let student = {
//     name: 'Jack',
//     age: 23
// }

// const handler = {
//     set: function (obj, prop, value) {
//         if (obj[prop]) {
            
//             console.log('Read only')
//         }
//     }
// };
// const proxy = new Proxy(student, handler);

// proxy.name = 'John'; 
// proxy.age = 33; 



// 3. side effects :

let student = {
    name: 'Jack',
    age: 23
}
const handler = {
    set: function (obj, prop, value) {
        if (obj[prop]) {
                        console.log('Read only')
        }
    }
};
const proxy = new Proxy(student, handler);
proxy.name = 'John'; 
proxy.age = 33; 