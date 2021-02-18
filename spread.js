const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 26, 22, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);// 3 ta array k eksath kora

// ES6 e
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2)

// 3 ta number er moddhe largest number
const numbers = [650, 450, 250];
const maximum = Math.max(...numbers);
console.log(maximum);
