// JavaScript Map :

// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: 26});
// console.log(map1); 


// Map with object key

// let map2 = new Map();
// let obj = {};
// map2.set(obj, {name: 'Jack', age: "26"});
// console.log(map2); 


// Map with object key

// let map2 = new Map();
// let obj = {};
// map2.set(obj, {name: 'Jack', age: "26"});
// console.log(map2); 


// check map elements :

// const set1 = new Set([1, 2, 3]);
// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});
// console.log(map1.has('info')); 


// removing elements :

// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});
// map1.delete('address'); 
// console.log(map1); 
// map1.delete('info'); 
// console.log(map1); 



// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});
// map1.clear();
// console.log(map1); 




// javascript map size :

// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});
// console.log(map1.size); 



// Iterate Through a Map

// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');
// for (let [key, value] of map1) {
//     console.log(key + '- ' + value);
// }



// using forEach method()

// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');
// map1.forEach(function(value, key) {
//   console.log(key + '- ' + value)
// })


// Iterate Over Map Values

// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');
// for (let values of map1.values()) {
//     console.log(values);
// }



// Get Key/Values of Map

// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');
// for (let elem of map1.entries()) {
//     console.log(`${elem[0]}: ${elem[1]}`);
// }



// JavaScript WeakMap

// const weakMap = new WeakMap();
// console.log(weakMap); 
// let obj = {};
// weakMap.set(obj, 'hello');
// console.log(weakMap); 



// weak map methods :

// const weakMap = new WeakMap();
// console.log(weakMap);
// let obj = {};
// weakMap.set(obj, 'hello');
// console.log(weakMap); 
// console.log(weakMap.get(obj));
// console.log(weakMap.has(obj)); 
// console.log(weakMap.delete(obj)); 
// console.log(weakMap); 


// weakMap methods are not iterables :

const weakMap = new WeakMap();
console.log(weakMap); 

let obj = {};
weakMap.set(obj, 'hello');
for (let i of weakMap) {

    console.log(i);  
}



