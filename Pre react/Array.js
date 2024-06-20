let arr = ["1", 1, 1.1, true];
arr[5] = "Jesse";

function ofinLoops() {
    // For of loop
    // i will will take the value of each element of the array
    // Include undefined
    for (i of arr) {
        console.log(i);
    }

    // For in loop
    // i will take the array index
    // Doesn't include undefined
    for (i in arr) {
        console.log(arr[i]);
    }
}



// Spread operator
let arr1 = [1,2];
arr = [...arr, ...arr1];
console.log(arr);