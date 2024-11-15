// JavaScript Default Parameters :

function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet(); 



// example :

function sum(x = 1, y = 2){
    return x + y
}
let result = sum(2, 3)
console.log(result);

result = sum(7)
console.log(result);

result = sum()
console.log(result);
