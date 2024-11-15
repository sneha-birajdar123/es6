// JavaScript for...of loop :

// const students = ['John', 'Sara', 'Jack'];
// for ( let element of students ) {
//     console.log(element);
// }



// for of with strings :

// const string = 'code';
// for (let i of string) {
//     console.log(i);
// }


// for of with sets :

// const set = new Set([1, 2, 3]);
// for (let i of set) {
//     console.log(i);
// }


// for of with maps :

// let map = new Map();
// map.set('name', 'Jack');
// map.set('age', '27');
// for (let [key, value] of map) {
//     console.log(key + '- ' + value);
// }



// user defined iterators :

// const iterableObj = {
//     [Symbol.iterator]() {
//         let step = 0;
//         return {
//             next() {
//                 step++;
//                 if (step === 1) {
//                     return { value: '1', done: false};
//                  }
//                 else if (step === 2) {
//                     return { value: '2', done: false};
//                 }
//                 else if (step === 3) {
//                     return { value: '3', done: false};
//                 }
//                 return { value: '', done: true };
//             }
//         }
//     }
// }
// for (const i of iterableObj) {
//  console.log(i);
// }




// for of with generators :

function* generatorFunc() {
  
    yield 10;
    yield 20;
    yield 30;
}
const obj = generatorFunc();
for (let value of obj) {
    console.log(value);
}