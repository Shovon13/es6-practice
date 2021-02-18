const firstName = 'Justin';
const lastName = 'TimberLake';
// const fullName = firstName + lastName;
// ekhon eta erokom output dekhabe 'JustinTimberLake' er majhe space dite chaile
const fullName = firstName + ' ' + lastName + ' is a good boy';
// ES6 e eta tamplate kore aro sohoje kora jaay
const fullName2 = `${firstName} ${lastName} is a good boy`;
console.log(fullName2);

const multiLine = `I am a good boy
I read everyday
I wan to be good reader.`
console.log(multiLine)