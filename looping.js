for (let i = 0; i < 500; i++) {
    console.log(i);
    
}

let obj = {
    nidhi : 5,
    darshan : 10,
    nithesh : 20,
    gaurav : 30,
}

// usign for loop for objects
for (let a in obj) {
    console.log(a + obj[a])
}

// for of loop
for (const b of "darshan") {
    console.log(b)
}

// while loop
let i = 0;
let n = 100;
while (i<n) {
    console.log(i)
    i++
}


// do while loop
do {
    console.log(i)
    i++
} while (i<n);