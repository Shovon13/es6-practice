function add(num1, num2) {
    return num1 + num2;
}
const total = add(5)
// kno karone ba bhule 2nd argument na dile NaN dekhabe to amra jodi NaN dekhte na chai
function add2(num1, num2) {
    if (num2 === undefined) {
        num2 = 0;
    }
    return num1 + num2
}
const total2 = add2(5)
// eta aro shortcut e kora jaay
function add3(num1, num2) {
    num2 = num2 || 0;
    return num1 + num2;
}
const total3 = add3(7)
// ES6 e default parameter pass kore
function addDefault(num1, num2 = 1) {
    return num1 + num2;
}
const totalDefault = addDefault(5);
console.log(totalDefault)