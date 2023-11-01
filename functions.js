/** program to demonstrate defining functions in jas */

function add(x, y) {
    return console.log("Sum is " + (x+y))
}

const sub = (x, y)=> {
    return console.log("difference is " + (x-y))
}

for (let i = 0; i < 10; i++) {
    add(i, i+1);
    sub(i, i+1)
}