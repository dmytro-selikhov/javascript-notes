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

// task 33
/* *
 *
 * 1. Добавить элемент "abc" с индексом 10.
 *
 * 2. Выведите результирующий массив в консоль. Объясните результаты.
 *
 * 3. Какова длина конечного массива?
 */

const myArray = [1, 2]

myArray[10] = 'abc';
console.log(myArray);
console.log(`my Array length is ${myArray.length}`);



// task 34
/* *
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const myCarsArray = [
	{
		carBrand: "BMW",
		price: 10000,
		isAvailableForSale: true
	} ,
	{
		carBrand: "Pego",
		price: 8000,
		isAvailableForSale: false
	}, 
	{
		carBrand: "Mersedes",
		price: 15000,
		isAvailableForSale: true
	}

]

myCarsArray.push({
		carBrand: "Audi",
		price: 12000,
		isAvailableForSale: true
	})


console.log(myCarsArray);

// task 35

/*
 * 1. Переберите все собственные свойства объекта
 *
 * 2. Если имя свойства (ключ) равно "key1" или "key3",
 * выведите значение свойства в консоль.
 */


// Рабочий вариант 1

const myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
}

for (key in myObject){
	if (key === 'key1' || key === 'key3'){
		console.log(myObject[key]);	
	}
}




// Рабочий вариант 2

const myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
}

const objArray = Object.keys(myObject);
console.log(myObject);

 Object.keys(myObject).forEach(key => {
 	if (key === 'key1' || key === 'key3'){
		console.log(myObject[key]);
 	}

})


// Рабочий вариант 3

const myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
}

const objectKeys = Object.keys(myObject)
objectKeys.forEach((key) => {
	if (key === 'key1' || key === 'key3') {
		console.log(myObject[key]);
	}
})


// task 36
/*
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const MIN = 1000
const MAX = 9999

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]


function getRandomInt() {
	let numberGen =  Math.floor(Math.random() * (MAX - MIN) + MIN); // The maximum is exclusive and the minimum is inclusive


	for (const key in myNumbers) {
		if(myNumbers[key] === numberGen) {
			 numberGen =  Math.floor(Math.random() * (MAX - MIN) + MIN); // The maximum is exclusive and the minimum is inclusive
		} else {
			myNumbers.push(numberGen);
		}
	}
	console.log(myNumbers);
  }


getRandomInt()









const MIN = 1000
const MAX = 9999

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]


let numberGen = () => {
	const result =  Math.floor(Math.random() * (MAX - MIN) + MIN); // The maximum is exclusive and the minimum is inclusive
	return result;
}
numberGen()
console.log(numberGen)


let checkArray = () => {
	for (let i = 0; i < myNumbers.length; i++) {
		if (myNumbers[i] === numberGen){
			numberGen();
		} else {
			myNumbers.push(numberGen);
		}
	}
	console.log(myNumbers);
}

let makeFun = () => {
	numberGen();
	checkArray();
}

makeFun();








const MIN = 1000
const MAX = 9999
let result = 0;

let myRandom = () => {
	result = Math.floor(Math.random() * (MAX - MIN) + MIN);
	console.log(result);

    return result;
}

  myRandom()



 const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]	


for (const key in myNumbers) {
	if ( myRandom !== myNumbers[key]) {
		myNumbers.push(myRandom)
		console.log(myRandom);
		console.log(myNumbers);

	} else {
		console.log('We have same number in array')
		console.log(myRandom)
	}
		
}


// Решение лектора

const MIN = 1000
const MAX = 9999

// const MIN = 1
// const MAX = 10


const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]
// const myNumbers = [1, 3, 5, 7, 9, 10];


const randomNumber = (min, max) => {
  	return Math.floor(Math.random() * (max - min + 1) + min); 
}

// console.log(randomNumber(MIN, MAX));


const addRandomNumberToArray = (arr, min, max) =>{
	let newRandomNumber;
	const updatedArray = [ ...arr]

	do {
		newRandomNumber = randomNumber(min, max);
		console.log(newRandomNumber);
	} while (updatedArray.includes(newRandomNumber))
	
	updatedArray.push(newRandomNumber);

	return updatedArray;

}

 const updatedArray =  addRandomNumberToArray(myNumbers, MIN, MAX)

console.log('UPDATED ARRAY', updatedArray)
console.log('ORIGINAL ARRAY', myNumbers)

// console.log(myNumbers.includes(2355))


// task 37
/*
 * Внутри цикла "for .. in" перед выводом значения свойства в консоль
 * выполните проверку того, что свойство является
 * собственным свойством объекта
 */

const myObject = {
  name: 'Mike',
  age: 30,
  city: 'London',
}

Object.prototype.country = 'England'

for (let key in myObject) {
	if (myObject.hasOwnProperty(key)) {
		  console.log(myObject[key])
		}

}

myObject.hasOwnProperty(key)




const myObject = {
  name: 'Mike',
  age: 30,
  city: 'London',
}
console.log(myObject)

Object.prototype.country = 'England'

for (let key in myObject) {
  console.log(myObject[key])
}


//Решение ментора


const myObject = {
  name: 'Mike',
  age: 30,
  city: 'London',
}

Object.prototype.country = 'England'

for (let key in myObject) {
	if (myObject.hasOwnProperty(key)) {
		  console.log(myObject[key])
		}

}


// task 38
/*
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

function isArrayEmpty(inputArray) {
  if (inputArray.length > 0) {
    return 'Массив не пустой'
  } else {
    return 'Массив пустой'
  }
}

console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))

// Solution 1

function isArrayEmpty(inputArray) {
  if (inputArray.length > 0) {
    return 'Массив не пустой'
  } 
  if (!inputArray.length) {
    return 'Массив пустой'
  }
}


console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))

// Mentors Solution
function isArrayEmpty(inputArray) {
  if (inputArray.length > 0) {
    return 'Массив не пустой'
  } 

  return 'Массив пустой'
}

// Solution 2

function isArrayEmpty(inputArray) {
   inputArray.length > 0 
   ? console.log('Массив не пустой')
   : console.log('Массив пустой')
  }


console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))


// Example
value
	? console.log('True') // True
	: console.log('False')

// Mentors Solution
function isArrayEmpty(inputArray) {
  return inputArray.length > 0 
   ? 'Массив не пустой'
   : 'Массив пустой'
  }

console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))



// Solution 3

const isArrayEmpty = (inputArray) => {
   inputArray.length > 0 
   ? console.log('Массив не пустой')
   : console.log('Массив пустой')
  }


console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))

// Mentors Solution

// Явное возвращение результата
const isArrayEmpty = (inputArray) => {
  return inputArray.length > 0 
   ? 'Массив не пустой'
   : 'Массив пустой'
  }


console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))


// Не явное возвращение результата
const isArrayEmpty = (inputArray) =>  inputArray.length > 0 ? 'Массив не пустой' : 'Массив пустой'

console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))


// task 39
/*
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

// Solution 1

const myCities = ['London', 'New York', 'Singapore']


function cityInfo(city, index) {

	let result = `${city} is at the ${index} in the myCities array`;
	
	console.log(result);
	// return result;
}


for (let i = 0; i < myCities.length; i++){
	cityInfo( myCities[i], i);
}



// Solution 2
const myCities = ['London', 'New York', 'Singapore']

const cityInfo = () =>{
	myCities.forEach((city, index) => {
		let result = `${city} is at the ${index} in the myCities array`;
	
		console.log(result);
		// return result;
	}) 
}

cityInfo()


// Mentors Solution

const myCities = ['London', 'New York', 'Singapore']

const cityInfo = (city, index) => `${city} is at the ${index} in the myCities array`;

myCities.forEach((city, index) => console.log(cityInfo(city, index)))



// task 40
/* 
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

//Solution

const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
]

const newArray = [];
let postStringified;

const converFunc = () => {
	postsJSON.forEach((el) => {
		postStringified = JSON.parse(el)
		newArray.push(postStringified)
	})
	return newArray;
}

console.log(newArray);
converFunc()

console.log(newArray[1].postId)
console.log(newArray[3].commentsQuantity)

console.log(convectoredObject[1]['postId']);
console.log(convectoredObject[3]['commentsQuantity']);

//Mentors Solution

 const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
]
// Option 1
// const postsJS = postsJSON.map((post) => JSON.parse(post))

// Option 2
const postsJS = postsJSON.map(JSON.parse)


console.log(postsJS)
console.log(postsJS[1].postId);
console.log(postsJS[postsJS.length - 1].commentsQuantity);


// task 41
/*
 *
 * 1. Создайте функцию "findPostById" с двумя параметрами:
 *  - ID поста
 *  - массив постов
 *
 * 2. Функция должна вернуть пост с определенным ID
 *
 * 3. Если поста с определенным ID в массиве постов нет,
 * функция должна вернуть "undefined"
 *
 * 4. Также внутри функции выведите в консоль ID поста
 */

const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 },
]


function findPostById(id,i, posts){
	let result;

	posts.forEach((el) => {
		if (el[i].postId === id){
			result = el[i]
			console.log(result);
			return result;
		} else {
			result = undefined
			console.log(result)
			return result
		}
	})
}




console.log(findPostById(6134, posts)) // { postId: 6134, commentsQuantity: 2 }

console.log(findPostById(4511, posts)) // undefined


// Mentors Solution

function findPostById(postId, posts) {
	return posts.find((post) => post.postId === postId)
}



const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 },
]




console.log(findPostById(6134, posts)) // { postId: 6134, commentsQuantity: 2 }

console.log(findPostById(4511, posts)) // undefined



// task 42
/*
 *
 * 1. Создайте функцию "arraySortInfo" с одним параметром - "inputArray"
 *
 * 2. Если хотя бы один элемент в массиве не является числом - вернуть "Некоторые элементы не являются числами"
 *
 * 3. Если числа в массиве отсортированы по возрастанию - вернуть "Массив отсортирован по возрастанию"
 *
 * 4. Если числа в массиве отсортированы по убыванию - вернуть "Массив отсортирован по убыванию".
 *
 * 5. Если массив не отсортирован - вернуть "Массив не отсортирован"
 */

const a = [5, 'abc', 10, 1]
const b = [4, 10, 14, 25, 25, 50]
const c = [150, 132, 80, 40]
const d = [15, 26, 10, 23, 85]


function arraySortInfo(inputArray) {
	
	let message;


	inputArray.forEach((el) => {
		if (typeof el !== 'number') {
			console.log(`Some elements are not numbers`)
		} else {
			// console.log(el)
		}
	})

}

function isIncreasing(arr) {
  let prev, cur;

  for (let i = 0; i < arr.length; i++) {
    cur = arr[i];
    if (i && cur !== prev && cur !== prev + 1) return false;
    prev = cur;
  }

  return true;
}

console.log(arraySortInfo(a)) // Некоторые элементы не являются числами
console.log(arraySortInfo(b)) // Массив отсортирован по возрастанию
console.log(arraySortInfo(c)) // Массив отсортирован по убыванию
console.log(arraySortInfo(d)) // Массив не отсортирован

/**
 * ПОДСКАЗКИ
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Подсказка 1: Используйте метод массивов "every"
 * Подсказка 2: Вы должны использовать два параметра в колбэк функции "element", "index"
 * Подсказка 3: Каждый элемент массива, кроме первого, следует сравнивать с предыдущим
 */



// Mentors Solution


const a = [5, 'abc', 10, 1]
const b = [4, 10, 14, 25, 25, 50]
const c = [150, 132, 80, 40]
const d = [15, 26, 10, 23, 85]

const arraySortInfo = (inputArray) => {
	if (inputArray.find((element) => typeof element !== 'number')){
		return 'Некоторые элементы не являются числами';
	}

	if (inputArray.every((element, index) => index > 0 ? element >= inputArray[index - 1]))

	return 'Массив не отсортирован'; 
}





console.log(arraySortInfo(a)) // Некоторые элементы не являются числами
console.log(arraySortInfo(b)) // Массив отсортирован по возрастанию
console.log(arraySortInfo(c)) // Массив отсортирован по убыванию
console.log(arraySortInfo(d)) // Массив не отсортирован








































