/* conditionals in JS */

let a = prompt("whats your age?") 
a = Number.parseInt(a) // converting string to number
if (a>0){
    alert("valid age")
}else{
    alert("Invalid age")
}

// else-if 

// let a = prompt("whats your age?") 
// a = Number.parseInt(a) // converting string to number
if (a>0){
    alert("valid age")
}else if(a>10){
    alert("under age")
}else{
    alert("invalid age")
}


// switch statement

switch (a) {
    case 0:
        alert("invalid age")
        break;
    case 10:
        alert("under weight");
    default:
        break;
}