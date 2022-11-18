// task 1

const myCountry = 'Ukraine';

console.log(myCountry);

// task 2

let isStudent;

isStudent = true;
console.log(isStudent);

isStudent = false;
console.log(isStudent);

// task 3

const num1 = 5;
const num2 = 2;
const mult = num1 * num2;

console.log(mult);

// task 4

const name = 'Dima';
const lastname = 'Selikhov';
const profession = 'Web Developer';

const total = `My name is ${name} ${lastname} and I am ${profession}!`;

console.log(total);

// task 5

const myVar = 'Sample Text'; // This is a description in one line

/*
Few
Lines
Comment
*/

// task 6

const myString = 'This is a String';
const myNumber = 14;
const myBoolean = true;
const myNull = null;
const myUndefined = undefined;
let myUndefined;
const myObject = {};
const myArray = [];

console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(typeof myNull);
console.log(typeof myUndefined);
console.log(typeof myObject);
console.log(typeof myArray);


// task 7

function printMyName() {
	console.log('Dima');
}

printMyName();

// task 8

const functionalExpression = function(name) {
	return `Hello ${name}`
}

console.log(functionalExpression('Dima'));
console.log(functionalExpression('Ksenia'));

// task 9

const myArrowFunction = () => {
	return 'Hello, world!'
}

console.log(myArrowFunction());


const myArrowFunction2 = () => 'Hello, world!';

console.log(myArrowFunction2());

// task 10

//Правильно
/*
 *Gives back the difference between num1 and num2
 *@param {number} num1
 *@param {number} num2
 *@returns {number} numbers difference
*/

function myDiff(num1, num2) {
	return num1 - num2;
}

myDiff(12, 7);
console.log(myDiff(12, 7));

// task 11

setTimeout(() => console.log('Hello, World'), 5000);

// task 12

const info = {
	name: 'Dima',
	surname: 'Selikhov',
	favoriteNumber: 14
}

console.log(`My name is ${info.name} ${info.surname} and my favorite number is ${info.favoriteNumber}`);
console.log('My name is ' + info.name + ' ' + info.surname + ' and my favorite number is ' + info.favoriteNumber);







