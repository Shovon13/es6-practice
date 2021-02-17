const hubby = 'Elias Kanchan';
// hubby = 'Omor Sunny'; error dibe.. const diye declare variable er value change hobe na
console.log(hubby);

const numbers = [12, 45];
//ekhetree array kno element change korte parbo
numbers[1] = 50;
//notun element dhukateo pari ba push korte pari
numbers.push(12);
// kintu ami pura array k change korte parbo na
// numbers = ['Sanny', 'Salam', 'omit'];
console.log(numbers);

//same jinista object er belay o hobe
const nayok = {
    name: 'Sakib Khan',
    phone: 4578,
};
// ekhetree ekta kore element er value update kora jabe . notun property add o kora jabe
nayok.phone = 22569;
nayok.name = 'Bappy'
console.log(nayok)
// let diye variable declare korle amra value change korte parbo
let patientName = 'Rahim Chacha';
patientName = 'Fatema Khala';
console.log(patientName)

let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;
    console.log(i)
}
// var i = 0 hole loop er baire console kora jabe kintu let dile loop er baire jabe na