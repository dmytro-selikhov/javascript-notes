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

// task 13

const myString = 'Here is a test string!'

console.log(myString.length);

// task 14

const myFavoriteDish = 'Borsh';

console.log(myFavoriteDish instanceof String)
console.log(typeof myFavoriteDish);

const upperCaseValue = myFavoriteDish.toUpperCase();	
console.log(upperCaseValue);


//Создание эклемпляра String
const myString = new String('Dimas');
console.log(myString instanceof String);
console.log(typeof myString);
console.log(myString.toUpperCase());

// task 15
// My Solution

const greeting = 'Good Morning';

const greeting2 = greeting.replace('Morning', 'Evening');

console.log(greeting2);


// task 16

const myArray = [1, 'abc', true];

console.log(myArray[0]);
console.log(myArray.length);

// task 17

const myBigArray = [true, 'one', 14, 'world'];

// for(let i = 0; i < myBigArray.length; i++){
// 	console.log(myBigArray[i]);
// }
console.log(myBigArray);

console.log('Here we are chenging array');
myBigArray[1] = 'this is long string';

// for(let i = 0; i < myBigArray.length; i++){
// 	console.log(myBigArray[i]);
// }
console.log(myBigArray);


// task 18

const myArray18 = ['three', 14, true, 'five', 'long string'];

myArray18.forEach((el) => console.log(el));



// task 19

const myArray19 = ['three', 14, true, 'five', 'long string'];

console.log(myArray19.length);

myArray19.push('nummber 19');
myArray19.push(55, true);

console.log(myArray19.length);



// task 20

const timeNow = new Date(); // Создание нового экземпляра даты
const currentTime = timeNow.getTime(); // Конвертируем в милисекунды

console.log(currentTime);

// task 21
/*
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

Вариант 1

let myVariable1 = 10
let myVariable2 = '5'

	 console.log(parseInt(myVariable1) <= parseInt(myVariable2))
	  console.log(parseInt(true))
	  console.log(parseInt(false))
// Напишите код здесь

myVariable1 = '20'
myVariable2 = 100

 console.log(parseInt(myVariable1) <= parseInt(myVariable2))
// Напишите код здесь

Вариант 2

function compare(myVariable1, myVariable2){

	if (+myVariable1 <= +myVariable2) {
		console.log(true);
	} else {
		console.log(false);
	}
}

let myVariable1 = 10
let myVariable2 = '5'

compare(myVariable1, myVariable2);


myVariable1 = '20'
myVariable2 = 100

compare(myVariable1, myVariable2);

// task 22
/*
 * 1. Выведите в консоль остаток от деления "myNumber1" на "myNumber2".
 *
 * 2. Какой приоритет и ассоциативность
 * имеет оператор остаток от деления?
 *
 * 3. Проверьте ассоциативность самостоятельно
 */

const myNumber1 = 10 // 10 = 3 + 3 + 3 + 1
const myNumber2 = 3

console.log(myNumber1%myNumber2);


// task 23

console.log(3 || (true && null) || false)

(true && null) // false
(3 || false || false) // 3


console.log(3 || true && null || false) // 3

// task 24

/*
 *
 * В каждом выражении замените два оператора на один бинарный
 */

let a = 10

a += 1
console.log(a) // 11

a *= 2
console.log(a) // 22

a -= 5
console.log(a) // 17

a /= 2
console.log(a) // 8.5

// task 25
/*
*
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

// expression statement
15

// statement
const myObject = {
  // Object literal is expression
  x: 10,
  y: true,
}

// expression statement
myObject.z = 'abc' // <-- expression

// expression statement
delete myObject.x

// statement
let newVariable

// expression statement
newVariable = 30 + 5 // <-- expression

// expression statement
console.log(newVariable)
/**             ^
 *          expression
 */

// statement
if (newVariable > 10) {
  /**       ^
   *    expression
   */

  // expression statement
  console.log(`${newVariable} больше 10`) // <-- newVariable is expression
  /**         _________________________
   *                      ^
   *                 expression
   */
}









