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


const a = [5, false, 10, 1]
const b = [4, 10, 14, 25, 25, 50]
const c = [150, 132, 80, 40]
const d = [15, 26, 10, 23, 85]

const arraySortInfo = (inputArray) => {
	if (inputArray.some((element) => typeof element !== 'number')){
		return 'Некоторые элементы не являются числами';
	}

	if (inputArray.every((element, index) => index > 0 ? element >= inputArray[index - 1] : true)) {
		return 'Массив отсортирован по возрастанию';
	}

	if (inputArray.every((element, index) => index > 0 ? element <= inputArray[index - 1] : true)) {
		return 'Массив отсортирован по убывани';
	}

	

	return 'Массив не отсортирован'; 
}





console.log(arraySortInfo(a)) // Некоторые элементы не являются числами
console.log(arraySortInfo(b)) // Массив отсортирован по возрастанию
console.log(arraySortInfo(c)) // Массив отсортирован по убыванию
console.log(arraySortInfo(d)) // Массив не отсортирован


// task 43
/*
 *
 * 1. Создайте функцию "areArraysEqual" с двумя параметрами "firstArray" и "secondArray"
 *
 * 2. Верните "true" если два массива равны, а именно:
 *  - имеют одинаковое количество элементов
 *  - все элементы совпадают, например, firstArray[0] === secondArray[0] и т. д.)
 *
 * 3. В противном случае верните "false"
 *
 * ВАЖНО: Исходите из того, что массивы содержат элементы примитивных типов
 */

const a = [1, 2, 3]
const b = [1, 2, 3]

console.log(a === b) // false (Почему?)

const c = [2, 1, 3]
const d = [1, 2, 3, 4]

console.log(areArraysEqual(a, b)) // true
console.log(areArraysEqual(a, c)) // false
console.log(areArraysEqual(a, d)) // false



// Solution

const a = [1, 2, 3]
const b = [1, 2, 3]

console.log(a === b) // false (Почему?)

const c = [2, 1, 3]
const d = [1, 2, 3, 4]

const areArraysEqual = (firstArray, secondArray) => {
	return firstArray.length === secondArray.length && firstArray.every((element, index) => element === secondArray[index]);

}


console.log(areArraysEqual(a, b)) // true
console.log(areArraysEqual(a, c)) // false
console.log(areArraysEqual(a, d)) // false


// Solution 2

const a = [1, 2, 3]
const b = [1, 2, 3]

console.log(a === b) // false (Почему?)

const c = [2, 1, 3]
const d = [1, 2, 3, 4]

const areArraysEqual = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) return false;
  else {
    // Comparing each element of your array
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true;
  }
};


console.log(areArraysEqual(a, b)) // true
console.log(areArraysEqual(a, c)) // false
console.log(areArraysEqual(a, d)) // false



// Mentors Solution


const a = [1, 2, 3]
const b = [1, 2, 3]

console.log(a === b) // false (Почему?)

const c = [2, 1, 3]
const d = [1, 2, 3, 4]

const areArraysEqual = (firstArray, secondArray) => {
 	if (firstArray.length === secondArray.length 
 		&& 
 		firstArray.every((element, index) => element === secondArray[index])){
 		return true
 	} 
 	return false
}

console.log(areArraysEqual(a, b)) // true
console.log(areArraysEqual(a, c)) // false
console.log(areArraysEqual(a, d)) // false


// task 44
/*
 *
 * 1. Создайте функцию isElementInArray с двумя параметрами "inputArray" и "searchElement"
 *
 * 2. Если "searchElement" найден в "inputArray" - вернуть "true"
 *
 * 3. В противном случае вернуть "false"
 */

const transports = ['Bus', 'Car', 'Bicycle', 'Airplane']

console.log(isElementInArray(transports, 'Bus')) // true
console.log(isElementInArray(transports, 'Phone')) // false
console.log(isElementInArray(transports, 'Airplane')) // true


// Solution
const transports = ['Bus', 'Car', 'Bicycle', 'Airplane']


const isElementInArray = (inputArray, searchElement) => {
  return inputArray.includes(searchElement);
}

console.log(isElementInArray(transports, 'Bus')) // true
console.log(isElementInArray(transports, 'Phone')) // false
console.log(isElementInArray(transports, 'Airplane')) // true


console.log(isElementInArray(transports, 'Bic')) // true



// task 45
/* 
 * 1. Создайте функцию isElementInArray с двумя параметрами "searchElement" и "inputArray"
 *
 * 2. Если "searchElement" - не объект, просто используйте метод "includes"
 *
 * 3. Если "searchElement" - это объект или массив,
 * вам необходимо сначала преобразовать каждый элемент "inputArray" в строку,
 * а затем применить метод "includes" с аргументом, который также будет преобразован в строку
 */

const tags = [
  ['javascript', 'es6'],
  ['css', 'flexbox'],
  ['html', 'web-browser'],
]

const fruits = [
  { title: 'Orange', quantity: 10 },
  { title: 'Banana', quantity: 5 },
  { title: 'Apple', quantity: 25 },
]

const primitiveTypesArray = [25, 'x', true, undefined, null]

console.log(isElementInArray(['css', 'flexbox'], tags)) // true

console.log(isElementInArray(['flexbox', 'css'], tags)) // false

console.log(isElementInArray({ title: 'Apple', quantity: 25 }, fruits)) // true

console.log(isElementInArray({ title: 'Banana' }, fruits)) // false

console.log(isElementInArray(25, primitiveTypesArray)) // true


// Solution 

const isElementInArray = (searchElement, inputArray) => {
	if(typeof searchElement !== 'Object'){
		return inputArray.includes(searchElement);
	} else {
		 inputArray.forEach((el) =>{
		return JSON.stringify(el) === JSON.stringify(searchElement);
		})
	}
}


const tags = [
  ['javascript', 'es6'],
  ['css', 'flexbox'],
  ['html', 'web-browser'],
]

const fruits = [
  { title: 'Orange', quantity: 10 },
  { title: 'Banana', quantity: 5 },
  { title: 'Apple', quantity: 25 },
]

const primitiveTypesArray = [25, 'x', true, undefined, null]

console.log(isElementInArray(['css', 'flexbox'], tags)) // true

console.log(isElementInArray(['flexbox', 'css'], tags)) // false

console.log(isElementInArray({ title: 'Apple', quantity: 25 }, fruits)) // true

console.log(isElementInArray({ title: 'Banana' }, fruits)) // false

console.log(isElementInArray(25, primitiveTypesArray)) // true



// Mentors Solution


const tags = [
  ['javascript', 'es6'],
  ['css', 'flexbox'],
  ['html', 'web-browser'],
]

const fruits = [
  { title: 'Orange', quantity: 10 },
  { title: 'Banana', quantity: 5 },
  { title: 'Apple', quantity: 25 },
]

const primitiveTypesArray = [25, 'x', true, undefined, null]


const isElementInArray = (searchElement, inputArray) => {
	
	 if (typeof searchElement !== 'object'){
		return inputArray.includes(searchElement);
	}

	return inputArray
	.map((el) => JSON.stringify(el))
	.includes(JSON.stringify(searchElement))

}


console.log(isElementInArray(['css', 'flexbox'], tags)) // true

console.log(isElementInArray(['flexbox', 'css'], tags)) // false

console.log(isElementInArray({ title: 'Apple', quantity: 25 }, fruits)) // true

console.log(isElementInArray({ title: 'Banana' }, fruits)) // false

console.log(isElementInArray(25, primitiveTypesArray)) // true

// Solution 2


const tags = [
  ['javascript', 'es6'],
  ['css', 'flexbox'],
  ['html', 'web-browser'],
]

const fruits = [
  { title: 'Orange', quantity: 10 },
  { title: 'Banana', quantity: 5 },
  { title: 'Apple', quantity: 25 },
]

const primitiveTypesArray = [25, 'x', true, undefined, null]


const isElementInArray = (searchElement, inputArray) => {
	
	 if (typeof searchElement !== 'object'){
		return inputArray.includes(searchElement);
	}

	const convertedArray = inputArray.map((el) => JSON.stringify(el));
	console.log(convertedArray);
	
	const convertedSearch = JSON.stringify(searchElement);
	console.log(convertedSearch);

	return convertedArray.includes(convertedSearch);

}


console.log(isElementInArray(['css', 'flexbox'], tags)) // true

console.log(isElementInArray(['flexbox', 'css'], tags)) // false

console.log(isElementInArray({ title: 'Apple', quantity: 25 }, fruits)) // true

console.log(isElementInArray({ title: 'Banana' }, fruits)) // false

console.log(isElementInArray(25, primitiveTypesArray)) // true


// task 46

/*
 * 1. Создайте функцию "pushIfUnique" с двумя параметрами "inputArray" и "newElement"
 *
 * 2. Если "inputArray" уже содержит "newElement",
 * выведите в консоль "{newElement} уже находится в массиве"
 *
 * 3. В противном случае добавьте "newElement" в "inputArray"
 *
 * ПРИМЕЧАНИЕ: Мы предполагаем, что "inputArray" содержит элементы только примитивных типов
 */

const myNumbers = [123, 50, 27]

pushIfUnique(myNumbers, 50) // "50 уже в массиве"
console.log(myNumbers) // [123, 50, 27]

pushIfUnique(myNumbers, 80)
console.log(myNumbers) // [123, 50, 27, 80]

pushIfUnique(myNumbers, 80) // "80 уже в массиве"
console.log(myNumbers) // [123, 50, 27, 80]

pushIfUnique(myNumbers, 77)
console.log(myNumbers) // [123, 50, 27, 80, 77]

// My Solution

const pushIfUnique = (inputArray, newElement) => {
	if (inputArray.includes(newElement)) {
		console.log(`${newElement} already in ${inputArray}`);
	}

	return inputArray.push(newElement);
}


const myNumbers = [123, 50, 27]

pushIfUnique(myNumbers, 50) // "50 уже в массиве"
console.log(myNumbers) // [123, 50, 27]

pushIfUnique(myNumbers, 80)
console.log(myNumbers) // [123, 50, 27, 80]

pushIfUnique(myNumbers, 80) // "80 уже в массиве"
console.log(myNumbers) // [123, 50, 27, 80]

pushIfUnique(myNumbers, 77)
console.log(myNumbers) // [123, 50, 27, 80, 77]


// Mentors Solution

const pushIfUnique = (inputArray, newElement) => {
	if (inputArray.includes(newElement)) {
		return console.log(`${newElement} already in array`);
	}

	inputArray.push(newElement);
}



const myNumbers = [123, 50, 27]

pushIfUnique(myNumbers, 50) // "50 уже в массиве"
console.log(myNumbers) // [123, 50, 27]

pushIfUnique(myNumbers, 80)
console.log(myNumbers) // [123, 50, 27, 80]

pushIfUnique(myNumbers, 80) // "80 уже в массиве"
console.log(myNumbers) // [123, 50, 27, 80]

pushIfUnique(myNumbers, 77)
console.log(myNumbers) // [123, 50, 27, 80, 77]


// task 47

/* Использование метода "reduce" для создания массива
 * 1. Создайте функцию "popularPostsIds" с двумя параметрами "posts" и "minimalComentsQty"
 *
 * 2. Эта функция "popularPostsIds" должна возвращать массив идентификаторов постов сообщений,
 * у которых количество комментариев не меньше "minimalComentsQty"
 */

const inputPosts = [
  {
    title: 'Как быстро выучить JavaScript?',
    postId: 3421,
    comments: 25,
  },
  {
    title: 'Где используется JavaScript?',
    postId: 5216,
    comments: 3,
  },
  {
    title: 'Какая разница между React и Angular?',
    postId: 8135,
    comments: 12,
  },
]




console.log(popularPostsIds(inputPosts, 10)) // [3421, 8135]

console.log(popularPostsIds(inputPosts, 15)) // [3421]

console.log(popularPostsIds(inputPosts, 50)) // []

// Solution


const inputPosts = [
  {
    title: 'Как быстро выучить JavaScript?',
    postId: 3421,
    comments: 25,
  },
  {
    title: 'Где используется JavaScript?',
    postId: 5216,
    comments: 3,
  },
  {
    title: 'Какая разница между React и Angular?',
    postId: 8135,
    comments: 12,
  },
]



const newArr = []
const popularPostsIds = (posts, minimalComentsQty) => {
	posts.reduce((el) => {
		if (el.postId >= minimalComentsQty) {
			newArr.push(el.postId)
		}
	}, newArr)
	return newArr
}



console.log(popularPostsIds(inputPosts, 10)) // [3421, 8135]

console.log(popularPostsIds(inputPosts, 15)) // [3421]

console.log(popularPostsIds(inputPosts, 50)) // []



// Mentors Solution


const inputPosts = [
  {
    title: 'Как быстро выучить JavaScript?',
    postId: 3421,
    comments: 25,
  },
  {
    title: 'Где используется JavaScript?',
    postId: 5216,
    comments: 3,
  },
  {
    title: 'Какая разница между React и Angular?',
    postId: 8135,
    comments: 12,
  },
]

function popularPostsIds(posts, minimalComentsQty) {
	return posts.reduce((postsIds, post) => post.comments >= minimalComentsQty ? postsIds.concat([post.postId]) : postsIds, [])
}

console.log(popularPostsIds(inputPosts, 10)) // [3421, 8135]

console.log(popularPostsIds(inputPosts, 15)) // [3421]

console.log(popularPostsIds(inputPosts, 50)) // []


// task 48
/*
 - Использование метода "reduce" для создания объекта
 *
 * 1. Создайте функцию "quantitiesByCategories" с одним параметром "products"
 *
 * 2. Эта функция должна возвращать объект с ключами,
 * равными категориям, и значениями,
 * равными сумме всех количеств в каждой категории
 */

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
]

console.log(quantitiesByCategories(inputProducts))

/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */



// Solution

function quantitiesByCategories(products){

	products.reduce((finishObj, elements) => {
		if (products.category === !finishObj.category){
			finishObj.category == products.category
			finishObj.category 
		} else {

		}
	}, {})


	return {}
}

	


// Mentors Solution


const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
]


function quantitiesByCategories(products) {
	return products.reduce((qtysByCategories, product) =>{
		const { category, quantity} = product
		qtysByCategories[category] = (qtysByCategories[category] || 0) + quantity
		
		return qtysByCategories

	}, {})
}

console.log(quantitiesByCategories(inputProducts))


// task 49
/*- Сортировка объектов в массиве
 *
 * 1. Создайте функцию "sortProductsByPrice" с одним параметром "products"
 *
 * 2. Эта функция должна отсортировать входной массив товаров
 * по цене каждого товара в порядке возрастания
 * и вернуть отсортированный массив
 *
 * 3. Оригинальный массив должен остаться без изменений
 */

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
]

// const sortedProducts = sortProductsByPrice(inputProducts)

// console.log(sortedProducts) // Массив отсортированных товаров

// console.log(inputProducts) // Оригинальный массив не должен измениться


// Mentors Solution

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
]


const sortProductsByPrice = (products) => {
	const copyOfProducts = [...products]
	return copyOfProducts.sort((a, b) => a.price - b.price) // Мутирует исходный массив
}




const sortedProducts = sortProductsByPrice(inputProducts)

console.log(sortedProducts) // Массив отсортированных товаров

console.log(inputProducts) // Оригинальный массив не должен измениться


//task 50
/*
- Шаблонные строки
 *
 * 1. Создайте функцию "templateLiteral" с одним параметром "num"
 *
 * 2. Функция должна возвращать многострочную строку.
 *
 * 3. Ниже приведены примеры вызовов функции.
 */

// ТЕСТ 1
const myNumber = 9
console.log(templateLiteral(myNumber))
/* 
Число 9.
Это число меньше 10.
Квадратный корень этого числа - 3.
*/

// ТЕСТ 2
const myAnotherNumber = 25
console.log(templateLiteral(myAnotherNumber))
/* 
Число 25.
Это число больше или равно 10.
Квадратный корень этого числа - 5.
*/
 


// Solution

const templateLiteral = (num) => {
	if (num >= 10){
		squarNum = Math.sqrt(num)
		
		return str = ` Число ${num}.
		Это число больше или равно 10.
		Квадратный корень этого числа - ${squarNum}
		`
	} else {
		squarNum = Math.sqrt(num)
		
		return str = ` Число ${num}.
		Это число меньше 10.
		Квадратный корень этого числа - ${squarNum}
		`
	}
} 


const myNumber = 9
console.log(templateLiteral(myNumber))
/* 
Число 9.
Это число меньше 10.
Квадратный корень этого числа - 3.
*/

// ТЕСТ 2
const myAnotherNumber = 25
console.log(templateLiteral(myAnotherNumber))





//Mentors Solution


const templateLiteral = (num) => {
	return `Число ${num}.
Это число ${num < 10 ? 'меньше' : 'больше или равно'} 10.
Квадратный корень этого числа - ${Math.sqrt(num)}`
}

const myNumber = 9
console.log(templateLiteral(myNumber))
/* 
Число 9.
Это число меньше 10.
Квадратный корень этого числа - 3.
*/

// ТЕСТ 2
const myAnotherNumber = 25
console.log(templateLiteral(myAnotherNumber))



// task 51
/*  Операторы "rest" (остаток) и "spread" (распространение)
 *
 * 1. Создайте функцию "meanScore",
 * которая будет принимать любое количество аргументов,
 * объединять их в один массив и возвращать среднее значение всех аргументов,
 * округленное до 2 знаков после запятой.
 *
 * 2. Если хотя бы один элемент в этом массиве не является числом -
 * выводим в консоль следующую ошибку:
 * "Все аргументы в вызове функции должны быть числами!"
 *
 * ПОДСКАЗКА: В этом задании вы должны использовать как оператор "rest",
 * так и оператор "spread".
 */

const scores1 = [0, 1.5, 2.5, 3.7]
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2]
const scores3 = [1.3, 2.5, 1.9]
const scores4 = ['abc', 1.3, true, 2.5, 1.9]

console.log(meanScore(/* все элементы из массива "scores1" */))
// 1.93

console.log(meanScore(/* все элементы из массивов "scores1" и "scores2" */))
// 2.8

console.log(
  meanScore(/* все элементы из массивов "scores1", "scores2" и "scores3" */)
)
// 2.59

console.log(meanScore(/* все элементы из массива "scores4" */))
// Все аргументы в вызове функции должны быть числами!


//Solution 

const meanScore = (arr) => {
	const newArr = [...arr]
	let newArrLength = newArr.length;
	let middle;
	let result;
	const finRes = newArr.reduce((sum, el) => {
		if (typeof el !== 'number'){
			return `Все аргументы в вызове функции должны быть числами!`
		} else {
			sum += el;
			middle = sum / newArrLength;
			result = middle.toFix(2)
			return result
		}
	}, 0)

	return finRes

}


const scores1 = [0, 1.5, 2.5, 3.7]
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2]
const scores3 = [1.3, 2.5, 1.9]
const scores4 = ['abc', 1.3, true, 2.5, 1.9]

console.log(meanScore(/* все элементы из массива "scores1" */))
// 1.93

console.log(meanScore(/* все элементы из массивов "scores1" и "scores2" */))
// 2.8

console.log(
  meanScore(/* все элементы из массивов "scores1", "scores2" и "scores3" */)
)
// 2.59

console.log(meanScore(/* все элементы из массива "scores4" */))
// Все аргументы в вызове функции должны быть числами!





// Mentors Solution

// test example
const myFn = (a, ...b) => { // Воспользовались rest оператором и получили в "b" массив из [5, 7]
	console.log(a)
	console.log(b)
}
 
myFn(4, 5, 7) 



const scores1 = [0, 1.5, 2.5, 3.7]
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2]
const scores3 = [1.3, 2.5, 1.9]
const scores4 = ['abc', 1.3, true, 2.5, 1.9]

function meanScore(...numbers){
	if (numbers.some((num) => typeof num !== 'number')){
		console.error(`Все аргументы в вызове функции должны быть числами!`)
		// throw new Error(`Все аргументы в вызове функции должны быть числами!`)
		return 
	}

	/* Как считается среднее значение в функции reduce:
		num1 / numbers.length + num2 / numbers.length + ... + num10/ numbers.length
		РАВНОСИЛЬНО
		(num1 + num2 + ... + num10) / numbers.lenght
	*/

	return numbers.reduce((mean, num) => mean + num/numbers.length, 0).toFixed(2)
}

console.log(meanScore(...scores1))
// 1.93

console.log(meanScore(...scores1, ...scores2))
// 2.8

console.log(
  meanScore(...scores1, ...scores2, ...scores3)
)
// 2.59

console.log(meanScore(...scores4))
// Все аргументы в вызове функции должны быть числами!




// task 52
/*
- Параметры функции по умолчанию
 *
 * 1. Создайте функцию "weatherForecast" с двумя параметрами "city" и "weather"
 *
 * 2. Если второй аргумент отсутствует,
 * параметр "weather" должен получить значение "Отличная погода!"
 *
 * ВАЖНО:
 *  - Сначала решите это БЕЗ параметра функции по умолчанию
 *  - Закомментируйте предыдущее решение
 * и решите ту же задачу с параметром функции по умолчанию
 *
 * ПРИМЕЧАНИЕ:
 * Внимательно сравните свои результаты с результатами тестовых вызовов
 */

console.log(weatherForecast('Dubai', 'Солнечно'))
// Прогноз погоды для города Dubai: Солнечно

console.log(weatherForecast('London', 'Небольшой дождь'))
// Прогноз погоды для города London: Небольшой дождь

console.log(weatherForecast('Paris'))
// Прогноз погоды для города Paris: Отличная погода!

console.log(weatherForecast('Miami', ''))
// Прогноз погоды для города Miami:

console.log(weatherForecast('Las Vegas', undefined))
// Прогноз погоды для города Las Vegas: Отличная погода!


// My Solution

const weatherForecast = (city, weather) => {
	if (weather === undefined) {
		weather = 'Отличная погода!'
	} 
	console.log(`Прогноз погоды для города ${city}: ${weather}`)
	
}

console.log(weatherForecast('Dubai', 'Солнечно'))
// Прогноз погоды для города Dubai: Солнечно

console.log(weatherForecast('London', 'Небольшой дождь'))
// Прогноз погоды для города London: Небольшой дождь

console.log(weatherForecast('Paris'))
// Прогноз погоды для города Paris: Отличная погода!

console.log(weatherForecast('Miami', ''))
// Прогноз погоды для города Miami:

console.log(weatherForecast('Las Vegas', undefined))
// Прогноз погоды для города Las Vegas: Отличная погода!

// Solution 2


const weatherForecast = (city, weather = 'Отличная погода!') => {
	console.log(`Прогноз погоды для города ${city}: ${weather}`)
	
}

console.log(weatherForecast('Dubai', 'Солнечно'))
// Прогноз погоды для города Dubai: Солнечно

console.log(weatherForecast('London', 'Небольшой дождь'))
// Прогноз погоды для города London: Небольшой дождь

console.log(weatherForecast('Paris'))
// Прогноз погоды для города Paris: Отличная погода!

console.log(weatherForecast('Miami', ''))
// Прогноз погоды для города Miami:

console.log(weatherForecast('Las Vegas', undefined))
// Прогноз погоды для города Las Vegas: Отличная погода!



// Mentors Solution

function weatherForecast(city, weather) {
	weather = weather !== undefined ?  weather : 'Отличная погода!'
	return `Прогноз погоды для города ${city}: ${weather}`
}

console.log(weatherForecast('Dubai', 'Солнечно'))
// Прогноз погоды для города Dubai: Солнечно

console.log(weatherForecast('London', 'Небольшой дождь'))
// Прогноз погоды для города London: Небольшой дождь

console.log(weatherForecast('Paris'))
// Прогноз погоды для города Paris: Отличная погода!

console.log(weatherForecast('Miami', ''))
// Прогноз погоды для города Miami:

console.log(weatherForecast('Las Vegas', undefined))
// Прогноз погоды для города Las Vegas: Отличная погода!


// Mentors Solution 2

function weatherForecast(city, weather = 'Отличная погода!') {
	return `Прогноз погоды для города ${city}: ${weather}`
}


console.log(weatherForecast('Dubai', 'Солнечно'))
// Прогноз погоды для города Dubai: Солнечно

console.log(weatherForecast('London', 'Небольшой дождь'))
// Прогноз погоды для города London: Небольшой дождь

console.log(weatherForecast('Paris'))
// Прогноз погоды для города Paris: Отличная погода!

console.log(weatherForecast('Miami', ''))
// Прогноз погоды для города Miami:

console.log(weatherForecast('Las Vegas', undefined))
// Прогноз погоды для города Las Vegas: Отличная погода!



// task 53
/*- Сокращенное написание свойств объектов
 * 
 * 1. Исправьте все ошибки в коде.
 * 
 * 2. Измените объект, возвращаемый функцией "photosGallery", используя:
 *  - Сокращенные имена свойств
 *  - Сокращенные имена методов
 *  - Также нужно изменить одно свойство объекта
 * и сделать его вычисляемым свойством
 * 
 * 3. Сообщения в консоли должны быть точно такими же, 
 * как и в конце этой задачи
 */

const photosGallery = (title, dimensions, date) => {
  return {
    title: title,
    info: function() {
      console.log(
        "Фото "${title}" имеет разрешение ${date}`
      );
    },
    dimensions: dimensions
    publishInfo: () => {
      console.log(
        `Фото было опубликовано ${Math.floor(
          (new Date().getTime() - date.getTime()) / 1000
        )} секунды назад`
      );
    ,
    date: date
  }
}

const myDogPhoto = photosGallery(
  "My dog",
  "1920x1080",
  new Date()
)

const testDimension1 = "1920x1080"
const testDimension2 = "1080x720"

myDogPhoto.info()
/* Фото "My dog" имеет разрешение 1920x1080 */

setTimeout(() => myDogPhoto.publishInfo(), 2000)
/* Фото "My dog" было опубликовано 2 секунды назад */

/* ВОПРОС: Почему метод "publishInfo" все еще имеет доступ 
к параметрам функции "photosGallery" (например "date")? */

console.log(myDogPhoto[testDimension1]) // true
console.log(myDogPhoto[testDimension2]) // undefined


// Mentors Solution 

const photosGallery = (title, dimensions, date) => {
  return {
    title,
    date,
    [dimensions]: true,
    info() {
      console.log(
        `Фото "${title}" имеет разрешение ${dimensions}`
      );
    }, 
    publishInfo() {
      console.log(
        `Фото "${title}" было опубликовано ${Math.floor(
          (new Date().getTime() - date.getTime()) / 1000
        )} секунды назад`
      );
    },
 }
}

const myDogPhoto = photosGallery(
  "My dog",
  "1920x1080",
  new Date()
)

const testDimension1 = "1920x1080"
const testDimension2 = "1080x720"

myDogPhoto.info()
/* Фото "My dog" имеет разрешение 1920x1080 */

setTimeout(() => myDogPhoto.publishInfo(), 2000)
/* Фото "My dog" было опубликовано 2 секунды назад */

/* ВОПРОС: Почему метод "publishInfo" все еще имеет доступ 
к параметрам функции "photosGallery" (например "date")? */

console.log(myDogPhoto[testDimension1]) // true
console.log(myDogPhoto[testDimension2]) // undefined

// console.log(Object.keys(myDogPhoto))


// task 54
/*
 * Деструктуризация массива
 *
 * Измените раздел параметров в функции "processQuantities" так,
 * чтобы совпали выводы в консоли
 *
 * Используйте деструктуризацию массива
 */

const processQuantities = (/* parameters */) => {
  console.log(minQty) // 8
  console.log(maxQty) // 29
  console.log(defaultQty) // 10 в первом вызове, 0 во втором вызове
  return defaultQty + maxQty - minQty
}

const inputQuantities1 = [8, 29, 10]
console.log(processQuantities(inputQuantities1)) // 31

const inputQuantities2 = [8, 29]
console.log(processQuantities(inputQuantities2)) // 21


// My Solution 

const processQuantities = ([minQty, maxQty, defaultQty = 0]) => {
  console.log(minQty) // 8
  console.log(maxQty) // 29
  console.log(defaultQty) // 10 в первом вызове, 0 во втором вызове
  return defaultQty + maxQty - minQty
}

const inputQuantities1 = [8, 29, 10]
console.log(processQuantities(inputQuantities1)) // 31

const inputQuantities2 = [8, 29]
console.log(processQuantities(inputQuantities2)) // 21

// Mentors Solution 

const processQuantities = (arr) => {
  const [minQty, maxQty, defaultQty = 0] = arr
  console.log(minQty) // 8
  console.log(maxQty) // 29
  console.log(defaultQty) // 10 в первом вызове, 0 во втором вызове
  return defaultQty + maxQty - minQty
}

const inputQuantities1 = [8, 29, 10]
console.log(processQuantities(inputQuantities1)) // 31

const inputQuantities2 = [8, 29]
console.log(processQuantities(inputQuantities2)) // 21

// Mentors Solution 2

const processQuantities = ([minQty, maxQty, defaultQty = 0]) => {
  console.log(minQty) // 8
  console.log(maxQty) // 29
  console.log(defaultQty) // 10 в первом вызове, 0 во втором вызове
  return defaultQty + maxQty - minQty
}

const inputQuantities1 = [8, 29, 10]
console.log(processQuantities(inputQuantities1)) // 31

const inputQuantities2 = [8, 29]
console.log(processQuantities(inputQuantities2)) // 21


// task 55
/*  - Деструктуризация результата функции
 *
 * 1. Создайте функцию "minMax", которая принимает любое количество аргументов
 *
 * 2. Эта функция должна возвращать массив из двух элементов:
 *  - Первый элемент массива - минимальное значение среди всех аргументов.
 *  - Второй элемент массива - это максимальное значение среди всех аргументов.
 *
 * 3. Для поиска минимального и максимального значений используйте Math.min и Math.max
 */


let min, max
/* Вызовите здесь функцию "minMax" с аргументами 24, 5, 34, 10 
и используя деструктуризацию массивов присвойте значения переменным "min" и "max" */
console.log(min, max) // 5, 34

/* Вызовите здесь функцию "minMax" еще раз с аргументами 18, 23, 103, 70, 80, 25 */
console.log(min, max) // 18, 103


// My Solution

const minMax = (...arr) => {
	min = Math.min(...arr)
	max = Math.max(...arr) 

	return 
}

minMax(24, 5, 34, 10)

minMax(18, 23, 103, 70, 80, 25)



const minMax = (...arr) => {
	[min, max] = [Math.min(...arr), Math.max(...arr)]

	return [min, max]
}
minMax(24, 5, 34, 10)
console.log(min, max) // 18, 103

minMax(18, 23, 103, 70, 80, 25)
console.log(min, max) // 18, 103



// Mentors Solution
let min, max;

function minMax(...nums) {
	return [Math.min(...nums), Math.max(...nums)]
}

[min, max] = minMax(24, 5, 34, 10)
console.log(min, max); // 18, 103

[min, max] = minMax(18, 23, 103, 70, 80, 25)
console.log(min, max) // 18, 103




// task 56
/*- Деструктуризация объектов
 *
 * 1. Измените функцию "personInfo" так, чтобы получить в консоли такой же вывод
 *
 * 2. Объект, возвращаемый функцией "personInfo", должен содержать только сокращенные имена свойств
 */


const personInfo = (/* parameters */) => {
  /* return ... */
}

const person = {
  name: 'Alice',
  age: 19,
  location: {
    country: 'England',
    city: 'London',
  },
}

const result = personInfo(person)

console.log(result)
/*
{
  name: "Alice",
  personAge: 19,
  origin: "England",
  homeCity: "London",
  friendsQty: 0,
  createdAtYear: *current year*
}
*/


// My Solution
const personInfo = (obj) => {
	const {name, age: personAge, location: {country: origin, city: homeCity}, friendsQty = 0, createdAtYear = new Date().getFullYear()} = obj
	
   return {
  	name,
  	personAge,
  	origin,
  	homeCity,
  	friendsQty,
  	createdAtYear
  }
}

const person = {
  name: 'Alice',
  age: 19,
  location: {
    country: 'England',
    city: 'London',
  },
}

const result = personInfo(person)

console.log(result)
/*
{
  name: "Alice",
  personAge: 19,
  origin: "England",
  homeCity: "London",
  friendsQty: 0,
  createdAtYear: *current year*
}
*/




// Mentors Solution


const personInfo = ({name, age: personAge, location: {country: origin, city: homeCity}, friendsQty = 0, createdAtYear = new Date().getFullYear()}) => {
	
  return {
  	name,
  	personAge,
  	origin,
  	homeCity,
  	friendsQty,
  	createdAtYear
  }
}

const person = {
  name: 'Alice',
  age: 19,
  location: {
    country: 'England',
    city: 'London',
  },
}

const result = personInfo(person)

console.log(result)
/*
{
  name: "Alice",
  personAge: 19,
  origin: "England",
  homeCity: "London",
  friendsQty: 0,
  createdAtYear: *current year*
}
*/


// task 57
/*
- Трансформация массива объектов
 *
 * 1. Создайте функцию "processPosts", которая будет возвращать новый массив сообщений
 *
 * 2. Обратите внимание, что
 *  - некоторые имена свойств в каждом сообщении изменены
 *  - ID каждого сообщения увеличен на 1000
 *
 * 3. Исходный массив постов должен остаться без изменений
 */

const testPosts = [
  {
    postId: 234,
    author: 'robd',
    commentsQty: 5,
  },
  {
    postId: 823,
    author: 'sady',
  },
  {
    postId: 161,
    author: 'merryl',
    commentsQty: 8,
  },
]

const processedPosts = processPosts(testPosts)
console.log(processedPosts)
/*
[
  {
    postId: 1234,
    postAuthor: 'robd',
    postCommentsQty: 5
  },
  {
    postId: 1823,
    postAuthor: 'sady',
    postCommentsQty: 0
  },
  {
    postId: 1161,
    postAuthor: 'merryl',
    postCommentsQty: 8
  }
]
*/

console.log(testPosts)
// оригинальный массив должен остаться без изменений


//Mentors Solution 1

const processPosts = (posts) => {
	return posts.map((post) => {
		return { 
			postId: post.postId + 1000, 
			postAuthor: post.author, 
			postCommentsQty: post.commentsQty  === undefined ? 0 : post.commentsQty 
		}
	})

}

const testPosts = [
  {
    postId: 234,
    author: 'robd',
    commentsQty: 5,
  },
  {
    postId: 823,
    author: 'sady',
  },
  {
    postId: 161,
    author: 'merryl',
    commentsQty: 8,
  },
]

const processedPosts = processPosts(testPosts)
console.log(processedPosts)
/*
[
  {
    postId: 1234,
    postAuthor: 'robd',
    postCommentsQty: 5
  },
  {
    postId: 1823,
    postAuthor: 'sady',
    postCommentsQty: 0
  },
  {
    postId: 1161,
    postAuthor: 'merryl',
    postCommentsQty: 8
  }
]
*/


//Mentors Solution 2


//Mentors Solution 1

const processPosts = (posts) => {
	return posts.map((post) => {
		const {postId, author: postAuthor, commentsQty: postCommentsQty = 0} = post
		return {  
			postAuthor, 
			postCommentsQty,
			postId: postId + 1000,
		}
	})

}

const testPosts = [
  {
    postId: 234,
    author: 'robd',
    commentsQty: 5,
  },
  {
    postId: 823,
    author: 'sady',
  },
  {
    postId: 161,
    author: 'merryl',
    commentsQty: 8,
  },
]

const processedPosts = processPosts(testPosts)
console.log(processedPosts)
/*
[
  {
    postId: 1234,
    postAuthor: 'robd',
    postCommentsQty: 5
  },
  {
    postId: 1823,
    postAuthor: 'sady',
    postCommentsQty: 0
  },
  {
    postId: 1161,
    postAuthor: 'merryl',
    postCommentsQty: 8
  }
]
*/


// task 58
/* - Удаление свойств объекта
 *
 * 1. Используйте деструктуризацию объекта вместе с rest опертором,
 * чтобы быстро удалить определенные свойства из объекта.
 *
 * 2. Убедитесь, что переменные, которые будут использоваться для деструктуризации удаленных свойств,
 * не будут доступны после операции деструктуризации.
 */

let person = {
  _id: '5ad8cefcc0971792dacb3f1f',
  index: 4,
  processed: false,
  cart: ['item1', 'item2', 'item3'],
  email: 'slarsen@test.com',
  name: 'Samanta Larsen',
  cartId: 435,
}

console.log(person)
/*
{
  index: 4,
  email: "slarsen@test.com",
  name: "Samanta Larsen",
  cartId: 435
}
*/

// Mentors Solution

let person = {
  _id: '5ad8cefcc0971792dacb3f1f',
  index: 4,
  processed: false,
  cart: ['item1', 'item2', 'item3'],
  email: 'slarsen@test.com',
  name: 'Samanta Larsen',
  cartId: 435,
}

{
  let _id, processed, cart;
 ({_id, processed, cart, ...person} = person)
 console.log(_id, processed, cart)
}
console.log(person)


// OPTION: Delete operator
// delete person._id
// delete person.processed
// delete person.cart

// ReferenceError: _id is not defined (Because _id, processed and cart are block-scoped variables)
// console.log(_id, processed, cart)
console.log(person)
/*
{
  index: 4,
  email: "slarsen@test.com",
  name: "Samanta Larsen",
  cartId: 435
}
*/


// task 59
/* - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */


// Mentors Solution

class ExtendedArray extends Array {
	sum() {
		return this.reduce((sum, num) => sum + num, 0)
	}

	onlyNumbers(){
		return this.filter((el) => typeof el === 'number')
	}
}

// Создаем экземпляр класса ExtendedArray

const myExtendedArray = new ExtendedArray(10, 4, 5)

console.log(myExtendedArray)


const myExtendedArray2 = new ExtendedArray(10, 4, 5, 'big', true, 'tig')

const myExtendedArray3 = new ExtendedArray(10, 4, 5, 'big', true, 'tig', 7, 10)

myExtendedArray3.forEach((el) => console.log(el))




// Array instances don't have access to methods sum and onlyNumbers
// const myArray = [1, 2, 3]
// myArray.sum()



// task 60
/*- Модифицированный метод push для массивов
 *
 * 1. Создайте новый класс "CustomArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте один пользовательский метод "customPush" в новый класс.
 * Этот метод будет иметь один параметр "newElement".
 *
 * При вызове этого метода необходимо выполнить следующие действия:
 *  - Добавить новый элемент в существующий массив
 *  (не используйте для этого метод "push")
 *  - Изменить свойство "length" массива (увеличить его на 1)
 *  - Вывести в консоль следующую строку:
 * "Новый элемент <newElement> был только что добавлен в массив"
 *
 * 3. Создайте экземпляр нового класса "CustomArray"
 * и протестируйте новый метод "customPush" и сравните его с "push"
 *
 * 4. Что произойдет, если имя пользовательского метода
 * в классе "CustomArray" также будет "push" вместо "customPush"?
 * Попробуйте это.
 */

// My Solution

// class CustomArray extends Array {

// 	customPush(newElement) {
// 		this.length += 1
// 		 this[length] = newElement
// 		 console.log(`New element ${newElement} was added to array`)
// 		return this

// }


// Mentors Solution

class CustomArray extends Array {

	customPush(newElement) {
		console.log(this.length)
		this[this.length] = newElement
		console.log(this.length)
		console.log(`New element ${newElement} was added to array`)
	}

}


const myCustomArray = new CustomArray(10, 3, 7, 5);
myCustomArray.customPush(25)

console.log(myCustomArray)

myCustomArray.push(14)

console.log(myCustomArray)


// task 61
/* Сумма чисел
 *
 * 1. Создайте функцию "sumNumbers", которая будет суммировать все переданные ей аргументы.
 * Количество аргументов неизвестно
 *
 * 2. Используйте console.log внутри функции для вывода результата
 *
 * 3. Также верните эту сумму как результат функции
 */

sumNumbers(1, 3)
// 4

sumNumbers(10, 20, 5)
// 35

sumNumbers(2, 5, 80, 1, 10, 12)
// 110

// Solution 

let result;
debugger

// function sumNumbers (...args) {

const sumNumbers = (...args) => {

		const newArr = [...args];
		result = newArr.reduce((sum, el) =>{
			return sum +=sum + el
		}, 0)

	console.log(result);

	return result;
}

sumNumbers(1, 3)
// 4

sumNumbers(10, 20, 5)
// 35

sumNumbers(2, 5, 80, 1, 10, 12)
// 110


// Mentors Solution

function sumNumbers() {
	let sum = 0
	for (let i = 0; i < arguments.length; i++) {
		sum += arguments[i]
	}
	console.log('Sum of all arguments is ', sum)

	return sum
}

sumNumbers(1, 3)
// 4

sumNumbers(10, 20, 5)
// 35

sumNumbers(2, 5, 80, 1, 10, 12)
// 110





// task 62

/*- Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */



// Function Declaration - может вызываться раньше объявления функции. В любом месте.
firstFunction(6, 8)
// secondFunction(20, 20)  // secondFunction is not defined

function firstFunction(a, b) {
  return a + b
}


// Function Expression - должна быть объявлена, а уже после вызываться. 
const secondFunction = function (a, b) {
  return a + b
};

secondFunction(10, 10)

firstFunction(6, 8)




// Mentors Solution



// Function Declaration - может вызываться раньше объявления функции. В любом месте.
// Function can be called before declaretion
// console.log(firstFunction(6, 8))


// Cannot access 'secondFunction' before initialization
// secondFunction(20, 20)  // secondFunction is not defined

function firstFunction(a, b) {
  return a + b
}

// We can assign new value - Мы можем присвоить другое значение переменной
// firstFunction = '123'
// console.log(firstFunction)



// Function Expression - должна быть объявлена, а уже после вызываться. 
const secondFunction = function (a, b) {
  return a + b
};

// We can't assign new value - Мы не можем присвоить другое значение переменной
// secondFunction = true;

secondFunction(10, 10)

firstFunction(6, 8)


// task 63
/*- Зона видимости функции
 *
 * Что будет выведено в консоль?
 * Ответьте на вопрос без запуска кода
 */

const b = 2
let d = 15

function myFn1(a) {
  let b 
  let d = 10
  myFn2(b)
}

function myFn2(a) {
  let c = 5
  console.log(a, b, c, d)
}

myFn1()

// Solution
console.log(a, b, c, d)//undefine, undefine, 5, undefine




// Mentors Solution

const b = 2
let d = 15

function myFn1(a) {
  let b 
  let d = 10
  myFn2(b)
}

function myFn2(a) {
  let c = 5
  console.log(a, b, c, d)
  // a - undefined, b - 2, c - 5, 
}

myFn1()


// Mentors Solution

const b = 2
let d = 15

function myFn1(a) {

  function myFn2(a) {
    let c = 5
    console.log(a, b, c, d)
    // a - undefined, b - undefined, c - 5, d - 10
  }

  let b 
  let d = 10
  myFn2(b)
}


myFn1()


// task 64
/*- Hoisting
 *
 * Измените код, чтобы исправить ошибку после строки 13.
 *
 * Ошибка после строки 21 все равно должна генерироваться.
 * Почему ошибка после строки 21 возникает?
 */

const a = 5
const b = 10

if (b > a) {
  c = a + b + c
  // ДО: ReferenceError: Cannot access 'c' before initialization
  // ПОСЛЕ: Нет ошибки
  let c = 2
  console.log(c)
  // 17
}

console.log(c)
// Uncaught ReferenceError: c is not defined



// Mentors Solution
const a = 5
const b = 10

if (b > a) {

  let c = 2
  c = a + b + c
  // ДО: ReferenceError: Cannot access 'c' before initialization
  // ПОСЛЕ: Нет ошибки
  // let c = 2
  console.log(c)
  // 17
}

console.log(c)


// task 65
/* - Тернарный оператор
 *
 * Измените функцию "isNumber", используя тернарный оператор
 */

function isNumber(a) {
  if (typeof a === 'number') {
    return `${a} - это число`
  } else {
    return `${a} - это не число`
  }
}

console.log(isNumber(10))
// 10 - это число

console.log(isNumber('Привет'))
// Привет - это не число

console.log(isNumber(true))
// true - это не число


// Solution

const isNumber = (a) => typeof a === 'number' ? `${a} - это число` : `${a} - это не число`

console.log(isNumber(10))
// 10 - это число

console.log(isNumber('Привет'))
// Привет - это не число

console.log(isNumber(true))
// true - это не число



// Mentors Solution


function isNumber(a) {
  return typeof a === 'number' ? `${a} - это число` : `${a} - это не число`
}

console.log(isNumber(10))
// 10 - это число

console.log(isNumber('Привет'))
// Привет - это не число

console.log(isNumber(true))
// true - это не число


// task 66
/* - Стрелочные функции
 *
 * Замените обычные функции на стрелочные
 */

function mult(a, b) {
  return a * b
}

setTimeout(function () {
  console.log(mult(5, 10))
}, 1000)
// 50


// Solution
const mult =(a, b) => a * b

setTimeout(() => console.log(mult(5, 10)), 1000)


// Mentors Solution

const mult = (a, b) => a * b


setTimeout(() => {
  console.log(mult(5, 10))
}, 1000)
// 50



// task 67
/*  - Параметры функции по умолчанию
 *
 * 1. Ответьте на следующий вопрос:
 *  - Почему в строке 12 мы не можем просто использовать оператор ИЛИ?
 *    mult = mult || 2
 *
 * 2. Перепишите функцию с использованием значения по умолчанию
 * для параметра mult в "multiplyBy"
 */

function multiplyBy(a, mult) {
  mult = mult !== undefined ? mult : 2
  console.log(a * mult)
}

multiplyBy(2)
// 4

multiplyBy(2, undefined)
// 4

multiplyBy(2, 0)
// 0

multiplyBy(5, 10)
// 50



// Solution

function multiplyBy(a, mult = 2) {
  mult = mult !== undefined ? mult : 2
  console.log(a * mult)
}

multiplyBy(2)
// 4

multiplyBy(2, undefined)
// 4

multiplyBy(2, 0)
// 0

multiplyBy(5, 10)
// 50


// Mentors Solution

function multiplyBy(a, mult = 2) {
  mult = mult !== undefined ? mult : 2
  console.log(a * mult)
}

multiplyBy(2)
// 4

multiplyBy(2, undefined)
// 4

multiplyBy(2, 0)
// 0

multiplyBy(5, 10)
// 50



// task 68
/* - Проверка наличия аргументов в вызове функции
 *
 * Измените функцию "square" так, чтобы в случае ее вызова
 * без аргумента генерировалась ошибка
 * "Функция "square" не может быть вызвана без аргумента"
 */

function square(a) {
  console.log(a * a)
}

square(10)
// 100

square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

// Mentors Solution
function square(a) {
  //Option 1
  if (a === undefined) {
    throw new Error('Uncaught Error: Функция "square" не может быть вызвана без аргумента')
  }
  console.log(a * a)
}

square(10)
// 100

square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

function square(a) {
  //Option 2
  if (arguments.length === 0) {
    throw new Error('Uncaught Error: Функция "square" не может быть вызвана без аргумента')
  }
  console.log(a * a)
}

square(10)
// 100

square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента


// task 69
/*- Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
}

// Создайте функцию здесь

const result = mult(objectWithNumbers)
console.log(result)
// 300

// Solution

const mult = (obj) => {
  let result = 0
 const {x: x, y: y, z: z} = obj

 return result = x * y * z; 
}

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
}

// Создайте функцию здесь

const result = mult(objectWithNumbers)
console.log(result)
// 300




// Mentors Solution

// Option 1
const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
}

// Создайте функцию здесь
const mult = (nums) => {
 
 const {x, y, z} = nums

 return x * y * z; 
}


const result = mult(objectWithNumbers)
console.log(result)
// 300

// Option 2
const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
}

// Создайте функцию здесь
const mult = ({x, y, z} ) => x * y * z

const result = mult(objectWithNumbers)
console.log(result)
// 300



// task 70
/*- Деструктуризация массивов и "rest" оператор
 *
 * Присвойте переменным "a", "b" и "с" значения, используя
 * деструктуризацию массивов и "rest" оператор
 *
 * Значения переменных должны быть такими как в выводах в консоли
 */

const arr = [1, 2, 3, 4, 5, 6, 7]

// Напишите код здесь

const [a, b, ...c] = arr

console.log(a)
// 1

console.log(b)
// 2

console.log(c)
// [3, 4, 5, 6, 7]


// Mentors Solution

const arr = [1, 2, 3, 4, 5, 6, 7]

// Напишите код здесь

const [a, b, ...c] = arr

console.log(a)
// 1

console.log(b)
// 2

console.log(c)
// [3, 4, 5, 6, 7]


// task 71

/* Spread Operator
 *
 * Используя оператор "spread" создайте новый массив
 * Вывод в консоли должен быть таким же как в конце задания
 */

const a = [1, 2]
const b = [4, 5]
const c = [8, 9, 10]
const d = 11

// Напишите код здесь

console.log(combinedArray)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// Solution 
const a = [1, 2]
const b = [4, 5]
const c = [8, 9, 10]
const d = 11

const combinedArray = [0, ...a, 3, ...b, 6, 7, ...c, d]
// Напишите код здесь

console.log(combinedArray)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]



// Mentors Solution
const a = [1, 2]
const b = [4, 5]
const c = [8, 9, 10]
const d = 11

const combinedArray = [0, ...a, 3, ...b, 6, 7, ...c, d]
// Напишите код здесь

console.log(combinedArray)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// Original arrays were not changed
console.log(a)
console.log(b)
console.log(c)



// task 72
/*- Копия массива
 *
 * Создайте копию массива.
 * При изменении копии массива оригинальный массив не должен изменяться
 */

const a = [1, 2, 3]

// Напишите код здесь

b.push('newElement')

console.log(a)
// [1, 2, 3]

console.log(b)
// [1, 2, 3, "newElement"]



// Solution
const a = [1, 2, 3]

// Напишите код здесь
const b = [...a]

b.push('newElement')

console.log(a)
// [1, 2, 3]

console.log(b)
// [1, 2, 3, "newElement"]



b.push('newElement')

console.log(a)
// [1, 2, 3]

console.log(b)
// [1, 2, 3, "newElement"]





// Mentors Solution

const a = [1, 2, 3]

// Напишите код здесь
// Option 1
const b = [...a]// Сохраняют внутренние ссылки на объекты

// Option 2
const b = Array.from(a)// Сохраняют внутренние ссылки на объекты

// Option 3
const b = JSON.parse(JSON.stringify(a)) // Происходит глубокая копия объекта
// Сначала конвертация в JSON строку
// Потом конвертация в JS объект



b.push('newElement')

console.log(a)
// [1, 2, 3]

console.log(b)
// [1, 2, 3, "newElement"]



// task 73 
/*- Шаблонные строки
 *
 * Создайте функцию "carInfo", которая возвращает информацию о машине:
 *  - Автомобиль считается дешевым, если его цена <= 20000
 *  - Автомобиль считается дорогим, если его цена > 20000
 *
 * Выводы в консоли должны совпадать с теми, которые в конце задачи
 */

const cars = [
  { brand: 'Honda', price: 13000 },
  { brand: 'Rolls-Royce', price: 120000 },
]

// Создайте функцию "carInfo" здесь

cars.forEach((car) => console.log(carInfo(car)))
// Цена автомобиля Honda - 13000$ и это дешёвая машина
// Цена автомобиля Rolls-Royce - 120000$ и это дорогая машина

// Solution

const cars = [
  { brand: 'Honda', price: 13000 },
  { brand: 'Rolls-Royce', price: 120000 },
]

// Создайте функцию "carInfo" здесь

const carInfo = (car) => car.price <= 20000 ? `Цена автомобиля ${car.brand} - ${car.price} и это дешёвая машина` : `Цена автомобиля ${car.brand} - ${car.price} и это дорогая машина`


cars.forEach((car) => console.log(carInfo(car)))
// Цена автомобиля Honda - 13000$ и это дешёвая машина
// Цена автомобиля Rolls-Royce - 120000$ и это дорогая машина


// Mentors Solution

const cars = [
  { brand: 'Honda', price: 13000 },
  { brand: 'Rolls-Royce', price: 120000 },
]

// Создайте функцию "carInfo" здесь
function carInfo({brand, price}) {


	return `Цена автомобиля ${brand} - ${price} и это ${price <= 20000 ? 'дешёвая' : 'дорогая' } машина`
}


cars.forEach((car) => console.log(carInfo(car)))
// Цена автомобиля Honda - 13000$ и это дешёвая машина
// Цена автомобиля Rolls-Royce - 120000$ и это дорогая машина



// task 74
/*- Деструктуризация объектов
 *
 * Создайте функцию "shortPerson", которая деструктуризирует объект
 * и возвращает его короткую версию
 *
 * Пример результата:
 * { n: "Mike", c: "Spain", a: 23, p: 100 }
 *
 * Если входной объект не имеет поля postsQuantity,
 * он должен получить значение по умолчанию 0
 */

const person1 = {
  name: 'Mike',
  info: {
    country: 'Spain',
    age: 23,
  },
  postsQuantity: 100,
}

const person2 = {
  name: 'Alice',
  info: {
    country: 'Italy',
    age: 25,
  },
}

// Напишите функцию "shortPerson" здесь

console.log(shortPerson(person1))
// { n: "Mike", c: "Spain", a: 23, p: 100 }

console.log(shortPerson(person2))
// { n: "Alice", c: "Italy", a: 25, p: 0 }


// Solution


const person1 = {
  name: 'Mike',
  info: {
    country: 'Spain',
    age: 23,
  },
  postsQuantity: 100,
}

const person2 = {
  name: 'Alice',
  info: {
    country: 'Italy',
    age: 25,
  },
}

// Напишите функцию "shortPerson" здесь

const shortPerson = (person) => {
  const {name: n, info: {country: c, age: a}, postsQuantity: p = 0 } = person

  return{
    n,
    c,
    a,
    p
  }
}



console.log(shortPerson(person1))
// { n: "Mike", c: "Spain", a: 23, p: 100 }

console.log(shortPerson(person2))
// { n: "Alice", c: "Italy", a: 25, p: 0 }


// Mentors Solution


const person1 = {
  name: 'Mike',
  info: {
    country: 'Spain',
    age: 23,
  },
  postsQuantity: 100,
}

const person2 = {
  name: 'Alice',
  info: {
    country: 'Italy',
    age: 25,
  },
}


const shortPerson = ({name: n, info: {country: c, age: a}, postsQuantity: p = 0 }) => ({ 
  n,
  c,
  a,
  p
})



console.log(shortPerson(person1))
// { n: "Mike", c: "Spain", a: 23, p: 100 }

console.log(shortPerson(person2))
// { n: "Alice", c: "Italy", a: 25, p: 0 }



// task 75
/* - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

// Напишите код здесь

console.log(vowelsCount)
// 9


// Solution

let vowelsCount = 0

const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

// Напишите код здесь
function countVowel(str) {

  // loop through string to test if each character is a vowel
  for (let letter of str.toLowerCase()) {
      if (vowels.includes(letter)) {
        vowelsCount++;
      }
  }

  // return number of vowels
  return vowelsCount
}

console.log(countVowel(str) )


// Mentors Solution

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

// Option 1
str.split('').forEach((char) => {
  if (vowels.includes(char)){
    vowelsCount += 1
  }
} )
// Напишите код здесь

console.log(vowelsCount)
// 9

// Option 2

for (const char of str) {
  if (vowels.includes(char)){
    vowelsCount += 1
  }
}

console.log(vowelsCount)
// 9


// task 76
/*- Поменять местами значения двух переменных
 *
 * Поменяйте местами значения переменных "a" и "b".
 * Не используйте для этого какие-либо новые переменные.
 */

let a = 'first'
let b = 'second'

console.log(a, b);
// first second
[a, b] = [b, a];

console.log(a, b);
// second first


// task 77
/* - Замыкания
 * 1. Создайте функцию "createGreeting", внутри которой создайте:
 *  - переменную "greetingString" с значением "Hey, this is"
 *    (объявите ее используя "let")
 *  - функцию "greet" с одним параметром, которая должна возвращать
 *    строку-приветствие на основании "greetingString" и параметра,
 *    например, "Hey, this is Bob"
 *  - функцию "changeGreeting" с одним параметром, которая должна
 *    изменять значение переменной "greetingString"
 *
 * 2. Функция "createGreeting" должа вернуть объект с двумя методами:
 *  - greet
 *  - changeGreeting
 */

const greeting1 = createGreeting()

console.log(greeting1.greet('Bob'))
// Hey, this is Bob

greeting1.changeGreeting('Good Morning from')

console.log(greeting1.greet('Emily'))
// Good Morning from Emily

/* ____________  */

const greeting2 = createGreeting()

console.log(greeting2.greet('Emily'))
// Hey, this is Emily





// Solution

const createGreeting = () => {
  let greetingString = `Hey, this is `;
  
  const greet = (parametr) => {

    return greetingString + parametr
  }

  const changeGreeting = (anotherParametr) =>{
      return greetingString = anotherParametr
  }

 return {
  greet: greet,
  changeGreeting: changeGreeting
 }
}


const greeting1 = createGreeting()

console.log(greeting1.greet('Bob'))
// Hey, this is Bob

greeting1.changeGreeting('Good Morning from ')

console.log(greeting1.greet('Emily'))
// Good Morning from Emily

/* ____________  */

const greeting2 = createGreeting()

console.log(greeting2.greet('Emily'))
// Hey, this is Emily



// Mentors Solution 

const createGreeting = () => {
  let greetingString = 'Hey, this is';
  
  function greet (name) {

    return `${greetingString} ${name}`
  }

  function changeGreeting (newGreeting) {
      return greetingString = newGreeting
  } 

 return {
  greet,
  changeGreeting
 }
}


const greeting1 = createGreeting()

console.log(greeting1.greet('Bob'))
// Hey, this is Bob

greeting1.changeGreeting('Good Morning from')

console.log(greeting1.greet('Emily'))
// Good Morning from Emily

/* ____________  */

const greeting2 = createGreeting()

console.log(greeting2.greet('Emily'))
// Hey, this is Emily


// task 78

/* - Классы
 *
 * 1. Создайте класс "Fruit"
 *
 * 2. У каждого экземпляра этого класса должно быть
 * два собственных свойства:
 *  - title
 *  - price
 *
 * 3. Также нужно добавить метод "priceInfo", который
 * будет возвращать строку, содержащую название и цену фрукта
 *
 * 4. Выводы в консоли должны совпасть
 */

const apple = new Fruit('Apple', 2)
console.log(apple.priceInfo())
// Price of the Apple is 2$

const orange = new Fruit('Orange', 3)
console.log(orange.priceInfo())
// Price of the Orange is 3$


// Solution

class Fruit {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  priceInfo() {
    return `Price of the ${this.name} is ${this.price}$`
  }
}


const apple = new Fruit('Apple', 2)
console.log(apple.priceInfo())
// Price of the Apple is 2$

const orange = new Fruit('Orange', 3)
console.log(orange.priceInfo())
// Price of the Orange is 3$



// Mentors Solution

 
class Fruit {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  priceInfo() { 
    return `Price of the ${this.title} is ${this.price}$`
  }
}


const apple = new Fruit('Apple', 2)
console.log(apple.priceInfo())
// Price of the Apple is 2$

const orange = new Fruit('Orange', 3)
console.log(orange.priceInfo())
// Price of the Orange is 3$


// task 79
/* Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

// Создайте функцию здесь

const result = sumObjectValues(objectWithNumbers)
console.log(result)
//42

// Solution
const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

const sumObjectValues = (obj) => {
  let result = 0;
debugger
  for (const key in obj) {
    if (typeof obj.key === 'number'){
      result += obj.key
    }
  }
  return result
}
// Создайте функцию здесь

const result = sumObjectValues(objectWithNumbers)
console.log(result)
//42

// Mentors Solution
// Option 1
const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

function sumObjectValues(nums){
  let sum = 0;
  Object.keys(nums).forEach((key) => {  // Конвертируем объект в массив с помощью Object.keys(nums)
    if (typeof nums[key] === 'number'){
      sum += nums[key]
    }
  })
  
  return sum
}

const result = sumObjectValues(objectWithNumbers)
console.log(result)

// Option 2
const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}


//ДОРАБОТАТЬ
function sumObjectValues(nums){
  let sum = 0;
  Object.keys(nums).reduce((sum, key) => {  // Конвертируем объект в массив с помощью Object.keys(nums)
    if (typeof nums[key] === 'number'){
      sum += nums[key]
    }
  }, 0)
  
  return sum
}
// Создайте функцию здесь

const result = sumObjectValues(objectWithNumbers)
console.log(result)


// task 80
/* - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]

// Создайте функцию "sumPositiveNegative" здесь

const result = sumPositiveNegative(nums)

console.log(result)
// { positive: 74, negative: -54 }



// Solution

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]

// Создайте функцию "sumPositiveNegative" здесь

function sumPositiveNegative(arr) {
  let positiveNums = 0
  let negativeNums = 0
  for (const element of arr) {
      if (element >= 0) {
        positiveNums += element
      }
      if (element < 0) {
        negativeNums += element
      } 
  }
  
  return {
    positiveNums,
    negativeNums
  }
}

const result = sumPositiveNegative(nums)

console.log(result)
// { positive: 74, negative: -54 }


// Mentors Solution

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]

// Создайте функцию "sumPositiveNegative" здесь

function sumPositiveNegative(arr) {
 
   return arr.reduce((sums, num) => {
      if (num > 0){
        return {
          ...sums, // Разделяем объект на свойства до изменения своцства
          positive: sums.positive + num,
        }
      }  

      return {
        ...sums, // Разделяем объект на свойства до изменения своцства
        negative: sums.negative + num
      }

   }, {positive: 0, negative: 0})
  
}

const result = sumPositiveNegative(nums)

console.log(result)
// { positive: 74, negative: -54 }
































