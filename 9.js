// Javascript template literals :

// let firstName = "Sneha"
// let lastName = "Birajdar"

// console.log("hello" + " " + firstName + " " + lastName);  // output : hello Sneha Birajdar (using strings)
// console.log(`hello ${firstName} ${lastName}`);  //output : hello Sneha Birajdar (using template literals)

function displayMessage(message) {
    return message;
}

// create a tagged template

let result = displayMessage`Hello Jack`;
console.log(result);  // [ 'Hello Jack' ]





// let number1 = 8;
// let number2 = 3;
// let result = `The sum of ${number1} and ${number2} is ${number1 + number2}.`;
// console.log(result);



// // Default parameters :

// function sum(a, b = 5){
//     console.log(a + b);    
// }
// sum(10, 20)  // output : 30
// sum(10) // output : 15