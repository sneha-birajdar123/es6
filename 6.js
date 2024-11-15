// Javascript promise :

let countValue = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Promise resolved!");
    }, 5000);
});
countValue.then(function successValue(result) {
    console.log(result);
});






//  Javascript rest parameter :

// function with ...args rest parameter

function show(a, b, ...args) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("args:", args);
}
show(1, 2, 3, 4, 5);



// spread operator :


let numArr = [1, 2, 3];
console.log([numArr, 4, 5]);  
console.log([...numArr, 4, 5]);  