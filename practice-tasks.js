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

Выражение - это часть кода, которая возвращает определенное значение(Вызов функции, арифметическая операция)
Инструкция - это часть кода, выполняющая определенные действия(цикл, условная инструкция)
Выражение - инструкция - это выражение, которое находится на отдельной строке кода и завершаются точкой с запятой
/*
*
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

// expression statement
//выражение-инструкция
15

// statement
// инструкция
const myObject = {
  // Object literal is expression
  // выражение
  x: 10,
  y: true,
}

// expression statement
// выражение-инструкция
myObject.z = 'abc' // <-- expression
					// выражение

// expression statement
// выражение-инструкция
delete myObject.x

// statement
// инструкция
let newVariable

// expression statement
// выражение-инструкция
newVariable = 30 + 5 // <-- expression
					// выражение

// expression statement
// выражение-инструкция
console.log(newVariable)
/**             ^
 *          expression выражение
 */

// statement
// инструкция
if (newVariable > 10) {
  /**       ^
   *    expression выражение
   */

  // expression statement
  // выражение-инструкция
  console.log(`${newVariable} больше 10`) // <-- newVariable is expression выражение
  /**         _________________________
   *                      ^
   *                 expression выражение
   */
}


// task 26
/*
 * Что будет выведено в консоли?
 * Ответьте на вопрос без запуска кода
 */

function fn() {
  console.log('Привет из функции fn')

  return function (a) {
    console.log(a)
  }
}

fn()(true)

// Привет из функции fn
// true


// task 27
/*
 * Ответьте на следующие вопросы:
 *   1. Почему после 13 строки не выдается ошибка?
 *   2. Почему после строки 18 генерируется TypeError?
 *
 * Измените одну строку кода, чтобы эта ошибка исчезла.
 * Не меняйте строки 13, 18
 */

let arr = [1, 2] // <-- Объявление переменной используя const

arr.push(3)

console.log(arr)
// [1, 2, 3]

arr = [1, 2, 3, 4]
// ДО: Uncaught TypeError: Assignment to constant variable.
// ПОСЛЕ: Нет ошибки

console.log(arr)
// [1, 2, 3, 4]



// task 28
/*
 *
 * Измените код так, чтобы ошибка исчезла
 */

let myFavoriteAnimal = 'Monkey'

console.log(myFavoriteAnimal)
// 'Monkey'

myFavoriteAnimal = 'Cat'

console.log(myFavoriteAnimal)
// 'Cat'

// task 29

/*
 * 1. Исправьте ошибку, которая возникает при включенном строгом режиме
 *
 * 2. Что будет, если отключить строгий режим?
 */

'use strict'

function myFunction() {
 const a = 2
  return a
}

myFunction()

// task 30
/*
 * 1. Что будет выведено в консоль?
 * Постарайтесь ответить без запуска кода.
 *
 * 2. Нужно ли как-то исправить этот код?
 */

setTimeout(function myFn() {
  console.log('Привет из функции myFn')
}, 2000)

myFn()

setTimeout(() => console.log('Привет из функции myFn'), 2000)

// task 31
/*
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */
Попытка

function message(){

	for (let i = 1; i <= 5; i++){

		let timerId = setInterval(() => console.log(`Message number ${i}`), 2000);

		console.log(`Message number ${i}`);	

		setTimeout(() => { clearInterval(timerId); }, 15000);
	}

	
}

message()

setInterval(() => console.log('Message'), 2000); // Регулярный вывод сообщений


Правильное решение:



let i = 1;
const messageIntervalID = setInterval(() => {

	
	console.log(`Message ${i}`)
	i += 1;

}, 2000);


setTimeout(() => clearInterval(messageIntervalID), 12000)


// task 32
/* *
 * 1. Добавьте элементы а начало массива:
 *  - сначала строку "Привет"
 *  - потом число 100
 *
 * 2. Выведите длину результирующего массива в консоль
 */

const myArray = [true, null]
	
	myArray.unshift(100, 'Hello');
	console.log(myArray);
	console.log(`My array length is ${myArray.length}`)
// Напишите код здесь

console.log(myArray) // [100, "Hello", true, null]








































