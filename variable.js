// program to demonstrate usage of variables ( var, let and const ) in js
// var is a keyword used to declare a variable before it was widely after ES6 its not used because it creates bugs
// let is a keyword used to declare a variable used tp declare a block scope variable
// const is a a keyword or a identifier used to store a constant value and this value or variable is constant throughout the javascript program

console.log("Variable allocation in js");

let a = 31;  // here a stores 31 which is integer
console.log(a)  // display the value stored in a

a = "darshan"   // dynamically changing the variable type from integer to string as variable a is now storing a string
console.log(a)  // display the value stored in a

/** snippet showing the scope and uasage of different variable declaring identifiers */
var b = 10 // storing a integer in b
var c = null // storing null(empty) in c 
var d = undefined   // storing a undefined value in d

// creating a block
{
    var b = "Nidhi" // assign a string to a variable b inside the block
    console.log(b)  // display the value stored in b
}
console.log(b) // display the value in b

// here in the above code snippet the value of b is over written from integer to string if we use var

b = 10  // reassigning the value of b as 10
// creating a block
{
    let b = "Nidhi" // assign a string to a variable b inside the block
    console.log(b)  // display the value stored in b
}
console.log(b) // display the value in b

// here the data in variable is not overwritten and it is scope resoluted without affecting the global value of b which is 10