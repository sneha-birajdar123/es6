// Create JavaScript Set

// create Set :

// const set1 = new Set(); 
// console.log(set1); 



// Set with multiple types of value :

// const set2 = new Set([1, 'hello', {count : true}]);
// console.log(set2); 


// Set with duplicate values

// const set3 = new Set([1, 1, 2, 2]);
// console.log(set3);



// Access Set Elements

// const set1 = new Set([1, 2, 3]);
// console.log(set1.values()); 
// const set1 = new Set([1, 2, 3]);
// console.log(set1.has(1));



// Adding New Elements

// const set = new Set([1, 2]);
// console.log(set.values());
// set.add(3);
// console.log(set.values());
// set.add(1);
// console.log(set.values());


// Removing Elements

// The delete() method removes a specific element from a Set. For example,

// const set = new Set([1, 2, 3]);
// console.log(set.values()); 
// set.delete(2);
// console.log(set.values()); 
// const set = new Set([1, 2, 3]);
// console.log(set.values()); 
// set.clear();
// console.log(set.values()); 



// Iterate Sets

// const set = new Set([1, 2, 3]);
// for (let i of set) {
//     console.log(i);
// }



// JavaScript WeakSet

// const weakSet = new WeakSet();
// console.log(weakSet); 

// let obj = {
//     message: 'Hi',
//     sendMessage: true
// }
// weakSet.add(obj);
// console.log(weakSet); 
// weakSet.add('hello');
// console.log(weakSet);





// WeakSet Methods :


// const weakSet = new WeakSet();
// console.log(weakSet); 

// const obj = {a:1};

// weakSet.add(obj);
// console.log(weakSet); 
// console.log(weakSet.has(obj)); 
// weakSet.delete(obj);
// console.log(weakSet); 


// WeakSets Are Not iterable

// const weakSet = new WeakSet({a:1});
// for (let i of weakSet) {

//     console.log(i);
// }


// Mathematical Set Operations

// Example: Set Union Operation

// function union(a, b) {
//     let unionSet = new Set(a);
//     for (let i of b) {
//         unionSet.add(i);
//     }
//     return unionSet
// }

// let setA = new Set(['apple', 'mango', 'orange']);
// let setB = new Set(['grapes', 'apple', 'banana']);

// let result = union(setA, setB);

// console.log(result);


// Example: Set Intersection Operation


// function intersection(setA, setB) {
//     let intersectionSet = new Set();

//     for (let i of setB) {
//         if (setA.has(i)) {
//             intersectionSet.add(i);
//         }
//     }
//     return intersectionSet;
// }

// two sets of fruits
// let setA = new Set(['apple', 'mango', 'orange']);
// let setB = new Set(['grapes', 'apple', 'banana']);

// let result = intersection(setA, setB);

// console.log(result);



// Example: Set Difference Operation

// function difference(setA, setB) {
//     let differenceSet = new Set(setA)
//     for (let i of setB) {
//         differenceSet.delete(i)
//     }
//     return differenceSet
// }

// two sets of fruits
// let setA = new Set(['apple', 'mango', 'orange']);
// let setB = new Set(['grapes', 'apple', 'banana']);

// let result = difference(setA, setB);

// console.log(result);

// Example: Set Subset Operation

// function subset(setA, setB) {
//     for (let i of setB) {
//         if (!setA.has(i)) {
//             return false
//         }
//     }
//     return true
// }

// two sets of fruits
// let setA = new Set(['apple', 'mango', 'orange']);
// let setB = new Set(['apple', 'orange']);

// let result = subset(setA, setB);

// console.log(result);