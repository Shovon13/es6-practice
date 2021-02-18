// function doubleIt(num) {
//     return num * 2;
// };

// Function expression
// const doubleIt = function (num) {
//     return num * 2;
// };

// ES6 Arrow function
// const doubleIt = num => num * 2;

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const total = doMath(7, 2);
console.log(total)