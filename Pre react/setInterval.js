let count = 0
const myInt = setInterval(() => {
    console.log("Puffy")
    count ++;
    if (count > 3) {
        clearInterval(myInt);
    }
}, 1000);




