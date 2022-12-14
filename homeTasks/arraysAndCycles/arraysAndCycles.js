//Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
const films = ['Morbidity', 'Fly', 'Drive'];
films.forEach(value => console.log(value));

//Given an array of car manufacturers, convert the array to a string and back to an array
const manufactures = ['BMW', 'Mercedes', 'McLaren'].join();
console.log(manufactures);
const result = manufactures.split(',');
console.log(result);
console.log(manufactures);

//Given an array of the names of your friends, add the words hello to each element of the array
const friends = ['Andrej', 'Vasya', 'Zhenia'].map(value => 'Hello ' + value);
console.log(friends);

//Convert numeric array to Boolean
const numbers = [0,1,3,6,7,4,8,1].map(value => Boolean(value));
console.log(numbers);

//Sort the array [1,6,7,8,3,4,5,6] in descending order
const arr = [1,6,7,8,3,4,5,6].sort((a, b) => b-a);
console.log(arr);

//Filter array [1,6,7,8,3,4,5,6] by value> 3
const filtered = arr.filter(value => value>3);
console.log(filtered);

//Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
const findNumber = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) return i;
    }
    return false
}

console.log(findNumber([1,2,3], 3));
console.log(findNumber([1,2,3], 4));

//Implement a loop that will print the number 'a' until it is less than 10

let a = 0;
while (a < 10){
    console.log(a);
    a++
}

//Implement a loop that prints prime numbers to the console
const checkPrime = num => {
    const sqrt = Math.sqrt(num);
    for(let i = 2; i <= sqrt; i++){

        if(num % i === 0) return false;
    }
    return num > 1;
}
const primeNumbers = (num1, num2) => {
    const temp = [];
    if(num2 < num1) return false;

    for (let i = num1; i<num2; i++){
        if (checkPrime(i)) temp.push(i)
    }
    return temp;
}

console.log(primeNumbers(1,100));

//Implement a loop that prints odd numbers to the console
let b = 0;

while (b < 10){
    if (b % 2 !== 0) console.log(b);
    b++
}