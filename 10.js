//  spread operator :

// let numArr = [1, 2, 3];
// console.log([numArr, 4, 5]);  
// console.log([...numArr, 4, 5]);  


let numbers = [1, 2, 3];
console.log(numbers[0], numbers[1], numbers[2])
console.log(...numbers);



// Javascript spread operators inside arrays:

let fruits = ["Apple", "Banana", "Cherry"];
let moreFruits1 = ["Dragonfruit", fruits, "Elderberry"];
let moreFruits2 = ["Dragonfruit", ...fruits, "Elderberry"];
console.log(moreFruits1);
console.log(moreFruits2);





// Spread Operator With Object

let obj1 = { x : 1, y : 2 };
let obj2 = { z : 3 };
let obj3 = {...obj1, ...obj2};
let obj4 = {obj1, obj2};
console.log("obj3 =", obj3);
console.log("obj4 =", obj4);



// javascript rest operator :

let printArray = function(...args) {
    console.log(args);
}
printArray(3);
printArray(4, 5, 6);



// Spread Operator as Part of Function Argument

function sum(num1, num2 , num3) {
    console.log(num1 + num2 + num3);
}
let num1 = [1, 3, 4, 5];
sum(...num1); 