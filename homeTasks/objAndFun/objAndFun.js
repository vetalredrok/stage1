//Create a car object, add a color property to it with the value equals 'black'
const car = {
    color: 'black',
};

// Change the color property of the car object to 'green'
car.color = 'green';

//Add the power property to the car object, which is a function and displays the engine power to the console
car.power = enginePower => console.log(`Engine power: ${enginePower}`);
console.log(car);
car.power(100);

// Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
const addFruits = (pears, apples) => console.log(+pears + +apples);
addFruits(100, 200);
addFruits('acb', 'abc');

//Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
const helloFunc = (name= '') => {
  if (name.length){
      return console.log(`Hello ${name}`)
  } else {
      return console.log('There is no such name')
  }
};
helloFunc();
helloFunc('Vitalii');

//Write a function for calculating the type of argument and type output to the console
const calculateType = arg => console.log(typeof arg);
calculateType(123);
calculateType(true);
calculateType([1,2,3]);
calculateType('green');
calculateType(null);
calculateType(BigInt(222222222222222222222222222222222222222222));

//Write a function that determines whether a number is prime or not

const checkPrime = num => {
    const sqrt = Math.sqrt(num);
    for(let i = 2; i <= sqrt; i++){

        if(num % i === 0) return false;
    }
    return num > 1;
}

console.log(checkPrime(4));
console.log(checkPrime(2));
console.log(checkPrime(1));
console.log(checkPrime(53));
