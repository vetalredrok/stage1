//Perform addition of various types (string + boolean, string + number, number + boolean)

const num = 15;
const bool = true;
const str = 'epam';

console.log(str + bool);
console.log(str + num);
console.log(num + bool);

//Perform multiplication of various types (string * boolean, string * number, number * boolean)

console.log(str*bool);
console.log(str*num);
console.log(num*bool);

//Divide different types (string / boolean, string / number, number / Boolean)
console.log(str/bool);
console.log(str/num);
console.log(num/bool);

//Perform explicit conversion (number, string, boolean)

const newStr = String(num);
const newNum = Number(bool);
const newBool = Boolean(str);


console.log(newStr, newNum, newBool);