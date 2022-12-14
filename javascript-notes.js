//jshit esversion:6

const express = require("express"); // npm i express
const bodyParser = require("body-parser"); // npm i body-parser

const app = express(); // create app constant by using express

app.get("/", function(req, res){ // Creatin GET route
	res.send("Hello"); // sends browsing the word "Hello", when a user tries to accsess the home route
});

app.listen(3000, function(){ // isten on port 3000
	console.log("Server started on port 3000"); // console.log that our server has been started
});


//Case when you will get answer depending of the week day
const today = new Date();
const currentDay = today.getDay();

if (currentDay === 6 || currentDay === 0) {
  res.write("<h1>Yay it's the weekend! YUIIIIII!!!</h1>");// it should write line by line
  res.write("<p>I haven't to work!</p>");
} else {
			res.sendFile(__dirname + "/index.html"); // this line sends back file



  // res.write("<p>It is not the weekend!</p>");
  // res.write("<h1>Boo! I have to work!</h1>");
  // res.send(); // it will send all lines in the end
}


//to start - write in console nodemon app.js(all code should be in app.js file) in directory with app.js file
// After that open browser in address http://localhost:3000/




//embedded javascript templating - ejt

****************************************
Устанавливаем NodeJS и запускаем интерпритатор в командной строке:
>node
Теперь мы можем писать код на javascript в терминале



>Самое важное в javascript:
	ВЫРАЖЕНИЯ
	ФУНКЦИИ
	ОБЪЕКТЫ




Практически любая сущность в javascript - это ОБЪЕКТЫ

	ОБЪЕКТ - это набор свойств
	"ИМЯ: ЗНАЧЕНИЕ"
		или
	"КЛЮЧ: ЗНАЧЕНИЕ"



Пример объекта:
{
	visible: true,
	colorDepth: 24,
	title: 'My Image',
	orientation: {
		angle: 0,
		type: 'landscape'
	},
	pixelDepth: 24,
	width: 1440
}



Массив в javascript - это объект.
Функция в javascript - это объект.

Число в javascript - это объект*.
Строка в javascript - это объект*.

* ведут себя как объекты.

console.log - это віражение

consol - объект

log - метод

Свойство, значение которого - функция - это метод.

Через точечную.запись можно получать доступ к свойствам объекта.

('Hello World') - скобки - это вызов метода.

Значение в скобках ('Hello World') - это аргумент. Значение типа 'String'

У объекта  consol есть методы:
- console.log()
- console.dor() - отображает все свойства объекта
- console.teble() - отображает все свойства объекта в табличном виде


**ВЫРАЖЕНИЯ**

*Любое выражение возвращает значение.

Примеры выражения:

'abc' // 'abc'
10 // 10
5 + 2 // 7
c = 10 // 10
a + b // Сумма "a" и "b" 
'Good ' + 'Evening' // 'Good Evening'
a <= b || c !== d // true или false
myFunction(c, d) // Результат функции

*Результатом каждого выражения является значение.

Выражение присваивания
а = 20

Выражение с побочными действиями(side effects):
- не только возвращают значение, но и выполняют другие действия.

a = 5
b++
myFunction(c, d)



**ПЕРЕМЕННЫЕ**
- Дают возможность повторного доступа к значениям

Названия переменных
PascalCase - Типы и классы 
DB_PASSWORD - Значения известны до запуска приложения и не меняются
camelCase - Все остальные переменные, используется чаще всего

Названия переменных должны быть понятными:
myName, DB_PASSWORD, и т.д.

Объявление переменных


Появились в ECMAScript 6
let
const

Устаревший стандарт
var


Объявение переменной a
Может переопределяться 
let a;

Объявление константы с и присваивание ей значения 10
Константа всегда должна быть со значением при объявлении, её нельзя переопределить
const c = 10;

Присваивается значение true переменной а
a = true

Тип переменной определяется типом присвоенного значения.


Примитивные типы и ссылочный тип.

Переменаая
	|
Имеет значение
	|
Значение имеет тип


Примитивные типы:
- string(строка);
- boolean(логический);
- number(число);
- null(не задано значение, присваевается вручную);
- undefined(не определено значение);
- symbol(символ);

Ссылочный тип:
- oblect(объект)

const objectA ={
	a: 10,
	b: true
};

const copyOfA = objectA;

copyOfA.a = 20;

objectA.a;


Как добавиь новое свойство к уже существующему объекту:
copyOfA.c = 'abc';

Получится:

const objectA ={
	a: 10,
	b: true,
	c: 'abc'
};



**ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ**


a = 'abc' // String
|
a = 10 // Number

function a(){
	console.log('Hey there!');
}

a(); //'Hey there!'

a = 10;
a(); //Uncaught TypeError: a is not a function


*! const - использование позволяет предотвратить проблемы, связанные с динамической типизацией.

Стрелочная функция для объявления переменных

const b = () => {
	console.log('Hey there');
}

b(); //'Hey there!'

b = 10; // TypeError: Assignment to constant variable.



**ПРАВИЛА РАБОТЫ С ПЕРЕМЕННЫМИ**
1. Все переменные объявлять ПЕРЕД их использованием
2. Стараться использовать CONST везде, где это возможно


**ОБЪЕКТЫ**

Имеют свойства и методы().

Объект - это набор свойств "ИМЯ: ЗНАЧЕНИЕ"

const myCity = {
	city: 'New York',
	popular: true,
	country: 'USA'
}

ПОЛУЧЕНИЕ ДОСТУПА К ЗНАЧЕНИЯМ СВОЙСТВ ОБЪЕКТА

console.log(myCity.city);
// 'New York'



СОЗДАНИЕ И УДАЛЕНИЕ СВОЙСТВ ОБЪЕКТА

Добавить можно несуществующее свойсто через точечную запись:
myCity.street = 'Central Street';

Теперь объект выглядит так:
const myCity = {
	city: 'New York',
	popular: true,
	country: 'USA',
	street: 'Central Street'
}

Удалить свойство можно через оператор удаления delete:
delete myCity.street;

Теперь объект выглядит так:
const myCity = {
	city: 'New York',
	popular: true,
	country: 'USA',
}


Доступ к значению свойства с использованием скобок []:
myCity['street'] = 'Central Street';

const cityJoke = 'Ho-ho-ho';

const countryPropertyName = 'country';

myCity[countryPropertyName] = 'Ukraine' // При создании свойства, js посмотрит значение переменной countryPropertyName, которое равно  'country' и создаст свойство в объекте с именем 'country'
myCity['cityJoke'] = 'Ha-ha-ha';

Теперь объект выглядит так:
const myCity = {
	city: 'New York',
	popular: true,
	country: 'Ukraine',
	cityJoke: 'Ha-ha-ha'
}

Удалить свойство можно через оператор удаления delete:
delete myCity['cityJoke'];

Теперь объект выглядит так:
const myCity = {
	city: 'New York',
	popular: true,
	country: 'Ukraine'
}

ВАЖНО
Точечная запись (myCity.street) отличается от скобочной записи (myCity['street']) тем, что в скобочной записи можно использовать любое выражение javascript(переменные и т.д.)


ВЛОЖЕННЫЕ СВОЙСТВА ОБЪЕКТОВ

const myCity = {
	city: 'New York',
	info: {
		isPopular: true,
		country: 'USA'
	}
}

Добраться к свойству вложенного объекта можно через точечную или скобочную записи:

console.log(myCity.info.country); // 'USA'
console.log(myCity['info']['country']); // 'USA'

Удалить свойства вложенного объекта также можно через точечную или скобочную записи:
delete myCity.info.country
delete myCity['info']['country']

Можно использовать комбинацию точечной и скобочной записей
delete myCity.info['country']

Использование переменных в объектах

const name = 'Dima';
const postsQty = 23;

const userProfile = {
	name: name,
	postsQty: postsQty,
	hasSignedAgreement: false
}

Сокращенный формат записи свойств

const userProfile = { // При условии формирования свойств из переменных, в этом случае переменные - name, postsQty.
	name,
	postsQty,
	hasSignedAgreement: false
}

Сокращенные свойства рекомендуется размещать в начале объекта.

**ГЛОБАЛЬНЫЕ ОБЪЕКТЫ**

window -  присутствует в веб браузерах
global - присутствует в Node.js


Унифицированный глобальный объект:
globalThis


Свойства глобальных объектов
console
window.console
global.console


**МЕТОДЫ ОБЪЕКТА**
Метод - свойство объекта, значение которого - функция.



const myCity = {
	city: 'New York',
	cityGreeting: function() {
		console.log('Greetings!!')
	}
}

myCity.cityGreeting(); // 'Greetings!!'

Убрали слово function
const myCity = {
	city: 'New York',
	cityGreeting() {
		console.log('Greetings!!')
	}
}

myCity.cityGreeting(); // 'Greetings!!'

**МЕТОДЫ VS СВОЙСТВА ОБЪЕКТОВ**

Для доступа к значниям свойств используется точечная запись
myCity.city

Для вызова метода нужно добавить в конец скобки
myCity.cityGreeting()


**JSON**
**JAVASCRIPT OBJECT NOTATION** // Формат обмена данными

**КОНВЕРТАЦИЯ JAVASCRIPT ОБЪЕКТА В JSON**
JSON.stringify(аргумент);

const post = {
	title: 'My post',
	likesQty: 5
}

JSON.stringify(post);//'{"title":"My post","likesQty":5}'

**КОНВЕРТАЦИЯ JSON В JAVASCRIPT ОБЪЕКТ**
JSON.parse(аргумент);

JSON передается в виде строки //'{"title":"My post","likesQty":5}'
const postStringified = JSON.stringify(post);
JSON.parse(postStringified);

Получаем javascript объект
{
	title: 'My post',
	likesQty: 5
}


**МУТАЦИЯ В JAVASCRIPT**

Можно скопировать ссылку на объект, в таком случае при изменении свойств копии изменится оригинальный объект.

const person = {
	name: 'Bob',
	age: 25
}

const person2 = person // Копирование ссылки (copy by reference)
person2.age = 26; // Мутация объекта на который ссылается person2
person2.isAdult = true; // Мутация объекта на который ссылается person2

console.log(person.age) // 26 - Мутация отразилась на переменной person
console.log(person.isAdult) // true - Мутация отразилась на переменной person



**КАК ИЗБЕЖАТЬ МУТАЦИЙ**
Вариант 1
!!!Если у объекта есть вложенные объекты, то ссылки на них СОХРАНЯЮТСЯ

const person = {
	name: 'Bob',
	age: 25
}

const person2 = Object.assign({}, person);
person2.age = 26;

console.log(person2.age); //26
console.log(person.age); //25


Вариант 2
Используем оператор разделения объекта на свойства - ...(спрэд оператор - spread operator)
!!!Если у объекта есть вложенные объекты, то ссылки на них СОХРАНЯЮТСЯ

const person = {
	name: 'Bob',
	age: 25
}

const person2 = { ...person };
person2.name = 'Alice';

console.log(person2.name); // Alice
console.log(person.name); // Bob


Вариант 3
Полная копия объекта без мутаций
!!!Ссылки на вложенные объекты не сохраняются

const person = {
	name: 'Bob',
	age: 25
}

const person2 = JSON.parse(JSON.stringify(person));

person2.name = 'Mike';

console.log(person2.name); // Mike
console.log(person.name); // Bob




**ФУНКЦИИ**

Функция - блок кода, который можно выполнять МНОГОКРАТНО.



let a = 5;
let b = 3;

function sum(a, b) {
	const c = a + b;
	console.log(c);
}

sum(a, b);


a = 8;
b = 12;

sum(a, b);



Функция может быть:
 - Именованной
 - Присвоена переменной
 - Анонимной
 - Аргументом при вызове другой функции
 - Значением свойства(метода) объекта

Функция - это объект
function myFn(a,b) {
	let c;
	a = a + 1;
	c = a + b;
	return c; // После этой строки функция прекращает выполнение операций
}

Функция возвращает UNDEFINED если нет инструкции RETURN.

**ПЕРЕДАЧА ЗНАЧЕНИЯ ПО ССЫЛКЕ**


const personOne = {
	name: 'Bob',
	age: 21
}

function increasePersonAge(person) {
	person.age += 1;

	return person;
}

increasePersonAge(personOne);
console.log(personOne.age);


Внутри функции НЕ РЕКОМЕНДУЕТСЯ мутировать ВНЕШНИЕ объекты

Внутри функции можно делать копии объектов, для того чтобы предотвратить мутацию объектов.

const personOne = {
	name: 'Bob',
	age: 21
}

function increasePersonAge(person) {
	const updatedPerson = JSON.parse(JSON.stringify(person));

	updatedPerson.age += 1;

	return updatedPerson;
}

const updatedPersonOne = increasePersonAge(personOne);
console.log(personOne.age)// 21
console.log(updatedPersonOne.age)// 22

**КОЛБЭК ФУНКЦИИ**

function anotherFunction() {
	// body...
	console.log("Yesss, man, I'm callback function)))")
}


function fnWithCallback(callbackFunction) {
	callbackFunction();
}


fnWithCallback(anotherFunction)


Пример

function printMyName() {
	// body...
	console.log('Dimon');
}


setTimeout(printMyName, 1000);


**ПРАВИЛА РАБОТЫ С ФУНКЦИЯМИ**

1. Называйте функции исходя из выполняемых задач

2. ОДНА функция должна выполнять ОДНУ задачу

3. Не рекомендуется изменять ВНЕШНИЕ относительно функции ПЕРЕМЕННЫЕ





**ОБЛАСТИ ВИДИМОСТИ**

Область видимости определяет границы действия переменной.

Глобальная область видимости - windiw, global


Локальные области видимости - функции

let a;
let b;

function myFn() {
	let b;
	a = true;
	b = 10;

	console.log(b);
}

myFn();

console.log(a);
console.log(b);


**ЦЕПОЧКА ОБЛАСТЕЙ ВИДИМОСТИ**


const a = 5;

function myFn(){
	function innerFn(){
		console.log(a); // 5
	}
	innerFn();
}

myFn();


**ЖИЗНЕННЫЙ ЦИКЛ ПЕРЕМЕННЫХ**


Жизненный цикл переменной "b"
let a;
let b; // 1. Объявление "b" в глобальной видимости. Её значение UNDEFINED 

function myFn() {
	let b; // 3. Объявление "b" в зоне видимости функции.
	a = true;
	b = 10; // 4. Объявлена ли "b" в рамках функции? Да. Присвоение этой переменной "b" значение 10

	console.log(b); // 10     5. "b" имеет значение 10 в области видимости функции
}

myFn(); // 2. Вызов myFn

console.log(a); // true
console.log(b); // undefined     6. "b" всё так же имеет значение UNDEFINED в глобальной обасти 




Жизненный цикл переменной "a"

let a; // 1. Объявление "a" в глобальной видимости. Её значение UNDEFINED 
let b;

function myFn() {
	let b;
	a = true; // 4. Объявлена ли "a" в зоне видимости функции? Нет. Объявлена ли "a" в глобальной видимости. Да. Присваивание значение true глобальной переменной "a"
	b = 10;

	console.log(a); // true
}

myFn(); // 2. Вызов myFn

console.log(a); // true   4. "a" имеет значение true  
console.log(b); // undefined


**ТИПЫ ОБЛАСТЕЙ ВИДИМОСТИ**

- Глобальная область видимости
- Область видимости функции
- Область видимости блока - переменные, объявленные с помощью let или const внутри блока имеют область видимости, ограниченную этим блоком - {}


!!Необъявленные переменные 

function myFn() { // ТАК ДЕЛАТЬ НЕ РЕКОМЕНДУЕТСЯ
	a = true;
	console.log(a) // true
}

myFn();

console.log(a); // true

**ПРАВИЛА РАБОТЫ С ПЕРЕМЕННЫМИ**

1. Все переменные нужно объявлять ПЕРЕД их использованием.
2. Стараться использовать const везде, где это возможно.
3. Внутри функции не изменять переменные с внешних областей видимости.


**СТРОГИЙ РЕЖИМ**

'use strict' - это инструкция интерпритатору javascript анализировать код более пристально.
Для использования этого режима нужно добавить в начало кода строчку 'use strict'

'use strict' // Эта строка должна быть первой в глобальной области видимости или в области видимости функции
function myFn() {
	a = true // Uncaught ReferenceError: a is not defined at myFn
	console.log(a);
}

myFn()

console.log(a);  // Запрещает использование необъявленных переменных



**ОПЕРАТОРЫ**

Оператор - это ВСТРОЕННАЯ функция.

- Операторы
- Операнды
- Унарные и бинарные
- Инфиксная, префикная и постфиксная записи


ОПЕРАТОРЫ:
 - Арифметические(+ - * \/ );
 - Сравнения(=== !== <= >=);
 - Логические(! && ||);
 - Присваивания(=);

 ТЕКСТОВЫЕ ОПЕРАТОРЫ:
 - typeof - тип значения 
 - instanceof - принадлежность объекта к классу
 - new - 
 - delete - удаление свойства в объекте

Примеры:

let a, b;

a = 10;
b = a;

let c = a + b;

console.log(c); // 20


Оператор - встроенная функция

a = 10;

function = (переменная, выражение) {
	1. Получение результата выражения
	2. Поиск переменной по имени
	3. Присваивание результата выражения переменной
	4. Возврат результата выражения
}



Унарные и бинарные операторы
У унарных операторов всегда один операнд (аргумент).
a++
+a
delete obj.a
typeof a
new Object()


Бинарные операторы
У бинарных операторов два операнда(аргумента)

a = 5
a + b
a += 5
a === b
a && b


Форматы записи операторов

Инфиксная запись - оператор находится между операндами

a = true
a + b
a += 5
a || b
a > b

Префиксная запись

++a
delete obj.a
typeof a


Постфиксная запись

a++
myFunction()




Приоритетность операторов
Принцип математических операторов.
a + b * c / d - e

1. b * c
2. bc / d
3. a + bcd
4. abcd -e

Приоритетность можно поменять скобками ().
a + ((b * c) / (d - e))

Можно смотреть в интернете табличку.


Логические операторы

! - не (возвращает значения типа boolean)
&& - и (возвращает значение одного из операндов)
|| - или (возвращает значение одного из операндов)


ЛОЖНЫЕ ЗНАЧЕНИЯ 
Ложныеми значениями являются те, которые при приведении к логическому типу(Boolean) дают false. 


Boolean(value) -> false 
false
0
''
undefined
null

Практика с оператором typeof

typeof 10
'number'
typeof 'e'
'string'
typeof true
'boolean'
typeof []
'object'
typeof undefined
'undefined'
typeof null
'object'


typeof 10 === 'number'
true

let isUndefined;
undefined
typeof isUndefined === 'undefined'
true



**ОПЕРАТОР РАЗДЕЛЕНИЯ НА СВОЙСТВА**

Оператор ... - spread operator

const button = {
	width: 200,
	text: 'Buy'
} 


const redButton = {
	...button,
	color: 'red' // если у объекта 'button' есть свойство 'color' то оно будет перезаписано, т.к. стоит после разделения объекта на свойства.
}

console.table(redButton);



 
const buttonInfo = {
	text: 'Buy'
}

const buttonStyle = {
	color: 'yellow',
	width: 200,
	height: 300
}

const button = {
	...buttonInfo,
	...buttonStyle
}

console.table(button);


**КОНКАТЕНАЦИЯ СТРОК**

Оператор + для конкатенации строк
'Hello ' + 'World' // 'Hello World'

Переменные в конкатенации строк
const hello = 'Hello';
const world = 'World';

const greeting = hello + ' ' + world;


Шаблонные строки
const hello = 'Hello';
const world = 'World';

const greeting = `${hello} ${world}`;

const name = 'Dima';
const city = 'Kyiv';

console.log(`My name is ${name} and I live in ${city}.`);

При соединении числа и строки, число конвертируется в строку
10 + 'Dima' // '10Dima'
Также любой другой тип при соединении со строкой конвертируется в строку 
undefined + 'abc' // 'undefinedabc'



**ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ**


Объявленная функция 
Создасться переменная с именем myFn, которую можно вызвать в л
function myFn(a, b) {
	let c;
	a = a + 1;
	c = a + bюбом месте
	return c;
}



Функциональное выражение
У функционального выражения нету имени
Функциональные выражения всегда АНОНИМНЫЕ
function(a, b) {
	let c;
	a = a + 1;
	c = a + b;

	return c;
}


					Объявленная функция 		Функциональное выражение
Имеет имя 					Да 							Нет

Можно использовать			Да 							Нет
автономно

Можно присваивать			Да 							Да
переменной

Можно использовать 			Да 							Да
как аргумент в вызове
другой функции



Присваивание функционального выражения переменной

const myFunction = function(a, b) {
	let c;
	a = a + 1;
	c = a + b;

	return c;
}

myFunction(5, 3); // 9


Функциональное выражение в вызове другой функции

setTimeout(function(){
	console.log('Отложенное сообщение')
}, 1000);

// 'Отложенное сообщение' будет выведено в консоль через 1000 мс (1 сек)


**СТРЕЛОЫЕ ФУНКЦИИ**
Стрелочная функция - это ВЫРАЖЕНИЕ
Стрелочные функции всегда АНОНИНМНЫ
(a, b) => {
	let c;
	a = a + 1;
	c = a + b;

	return c;
}

Как дать имя стрелочной функции?
- Путем присваивания переменной

const myFunction = (a, b) => {
	let c;
	a = a + 1;
	c = a + b;

	return c;
}

myFunction(5,3); // 9


Стрелочная функция в вызове другой функции

setTimeout(()=> {
	console.log('Отложенное сообщение')
}, 1000)
// 'Отложенное сообщение' будет выведено в консоль через 1000 мс (1 сек)


Сокращаения в стрелочных функциях

1. Если ОДИН параметр, то круглые скобки можно опустить

a => {
	//Тело функции
}

2. Фигурные скобки можно опустить если тело функции состоит из ОДНОГО выражения
В этом случае стрелочная функция НЕЯВНО возвращает результат выражения (без ключевого слова return)
(a, b) => a + b;


Значение параметров функции по умолчанию
1. Пример
function multByFactor(value, multiplier = 1) {
	return value * multiplier
}

multByFactor(10, 2); // 20
multByFactor(5); // 5


Анонимное функциональное выражение
const multByFactor = function(value, multiplier = 1){
	return value * multiplier;
}

Стрелочная функция
const multByFactor = (value, multiplier = 1) =>{
	return value * multiplier;
}


2. Пример с неявным возвратом значения функции
const newPost =(post, addedAt = Date()) => ({ // Круглые скобки здесь нужны для нечвного возвращения объекта.
	...post,
	addedAt
})

const firstPost = {
	id: 1,
	author: 'Dima'
}

const resFun = newPost(firstPost);

console.log(resFun);


3. Пример с явным возвратом значения функции

const newPost = (post, addedAt = Date()) => { // Круглые скобки здесь нужны для нечвного возвращения объекта
	const insPost = {
	...post,
	addedAt		
	}
	return insPost;
}

const firstPost = {
	id: 1,
	author: 'Dima'
}

const resFun = newPost(firstPost);

console.log(resFun);


**ОБРАБОТКА ОШИБОК** // debugging

const fnWithError = () => {
	throw new Error('Some error'); // Можем сгенерировать инструкцию javascript  - Появится ошибка и выполнение кода остановится
}
 
fnWithError();

console.log('Continue...');


РЕШЕНИЕ 
ОЧЕНЬ РЕКОМЕНДУЕТСЯ ПОМЕЩАТЬ КОД В TRY - CATCH БЛОК, ЧТО БЫ ПРИЛОЖЕНИЕ НЕ КРАШИЛОСЬ


try {
	// Выполение блока кода
} catch (error) {
	// Этот блок выполняется в случае возникновения ошибок в блоке try
}


const fnWithError = () => {
	throw new Error('Some error'); // Можем сгенерировать инструкцию javascript
}

try {
	fnWithError()	// Выполение блока кода
} catch (error) {
	// Этот блок выполняется в случае возникновения ошибок в блоке try
	console.error(error);
	console.log(error.message);
} // Выполнение кода продолжитсяы

console.log('Continue...'); 





**ИНСТРУКЦИИ**
Выражение
Выражение всегда возвращает значение 
Выражение может быть инструкцией

Выражение - инструкция

Примеры

'abc';

a = a + 3;

c = a + b;

d = 'Good ' + 'Evening';

myFunction(c, d);

console.log('Hey');


Инструкция
Инструкция выполняет действия
Инструкция - это объявление переменной с помощью ключевого слова let 
Инструкция обычно заканчивается точкой с запятой - ;
Инструкция не может быть трансформирована в выражение

Примеры

let a;

const b = 5;

if (a > b) {
	console.log('a is larger');
}

for (let i = 0; i++; i < 5) {
	console.log(i);
}


**КАК ОТЛИЧИТЬ ВЫРАЖЕНИЕ ОТ ИНСТРУКЦИИ**
ВЫРАЖЕНИЯ могут быть использованы как аргументы в вызовах функций

ИНСТРУКЦИИ не могут быть использованы как аргументы в вызовах функций

Примеры

function myFn(a){
	console.log(a);
}

const b = true;
let c = 10;

myFn(2 + 3); // 5 - выражение
myFn(b); // true - выражение
myFn(c = c + 1)  // 11 - выражение
myFn(c = c + 1;) // - инструкция
myFn(let d) // - инструкция




**МАССИВЫ**
Массив - это объект с цифровыми именами свойств

Формат записи массивов

const myArray = [1, 2, 3]
console.log(myArray); // [1, 2, 3]


const myArray2 = new Array(1, 2, 3)
console.log(myArray2); // [1, 2, 3]

Нумерация в массиве начинаестся с 0


Структура массива:

const myArray = [1, true, 'Dima']
console.log(myArray)

(3) [1, true, 'Dima']0: 11: true2: "Dima"length: 3[[Prototype]]: Array(0)

myArray.length; // 3




**КАК РАБОТАТЬ С ЭЛЕМЕНТАМИ МАССИВА**
Чтение значений массива

const myArray = [1, true, 'a']
console.log(myArray) // [1, true, 'a']

console.log(myArray[0]) // 1
console.log(myArray[1]) // true

console.log(myArray.length) // 3

Как добавлять новые элементы в массив
const myArray = [1, 2, 3, 4];
console.log(myArray); // [1, 2, 3, 4]
console.log(myArray.length); // 4

myArray[2] = 'abc';

console.log(myArray); // [1, 2, 'abc', 4]
console.log(myArray[2]); // 'abc'

myArray[4] = true;

console.log(myArray); // [1, 2, 'abc', 4, true]
console.log(myArray.length); // 5


**МЕТОДЫ МАССИВОВ**

Почитать за методы можно здесь:
https://learn.javascript.ru/array-methods
https://habr.com/ru/company/plarium/blog/483958/



Методы массивов - функции высшего порядка в массивах
 Методы массивов:
  - push // Мутирует оригинальный массив
  - pop // Мутирует оригинальный массив
  - shift // Мутирует оригинальный массив
  - unshift // Мутирует оригинальный массив
  - forEach // Не мутирует оригинальный массив
  - map


**PUSH - добавление элемента в конец массива
const myArray = [1, 2, 3]
console.log(myArray) // [1, 2, 3]

myArray.push(4);
console.log(myArray) // [1, 2, 3, 4]

myArray.push(true);
console.log(myArray) // [1, 2, 3, 4, true]


**POP - удаление элемента с конца массива, возвращает удаленный элемент
const myArray = [1, 2, 3];
console.log(myArray); // [1, 2, 3]

myArray.pop();

console.log(myArray); // [1, 2]
const removedElement = myArray.pop();

console.log(myArray); // [1]
console.log(removedElement); // 2


**UNSHIFT - добавление элемента в начало массива
const myArray = [1, 2, 3];
console.log(myArray); // [1, 2, 3]

myArray.unshift(true);

console.log(myArray); // [true, 1, 2, 3]

myArray.unshift('abc');

console.log(myArray); // ['abc', 1, 2, 3]


**SHIFT - удаление элемента в начале массива, возвращает удаленный элемент
const myArray = [1, 2, 3];
console.log(myArray); // [1, 2, 3]

myArray.shift();

console.log(myArray); // [2, 3]

const removedElement = myArray.shift();

console.log(myArray); // [3]
console.log(removedElement); // 2

**FOREACH - в этом методе есть аргумент, который является функцией. Может быть как стрелочная функция, так и анонимное функциональное выражение
Метод forEach перебирает все элементы массива на котором он применен и для каждого элемента массива метод forEach будет вызывать callback функцию.
В эту callback функцию в качестве значения для параметра(el) будет передаваться значение определенного значения массива
Метод не возвращает результат, а только применяет метод 

const myArray = [1, 2, 3];
console.log(myArray); //[1, 2, 3]

myArray.forEach(el => console.log(el * 2));

console.log(myArray); // [1, 2, 3] Оригинальный массив не изменился


**MAP - в этом методе есть аргумент, который является функцией. Может быть как стрелочная функция, так и анонимное функциональное выражение
Метод map перебирает все элементы массива на котором он применен и для каждого элемента массива метод map будет вызывать callback функцию.
В эту callback функцию в качестве значения для параметра(el) будет передаваться значение определенного значения массива
Метод возвращает новый массив из элементов, обработанных функцией

const myArray = [1, 2, 3];
console.log(myArray); //[1, 2, 3]

const newArray = myArray.map(el => el * 3);
//Стрелочная функция
let newArray2 = myArray.map((el) => {
	return el * 4;
});

// Анонимное функциональное выражение
const newArray2 = myArray.map(function(el) {
	return el * 4;
});

console.log(myArray); // [1, 2, 3] Оригинальный массив не изменился
console.log(newArray2); // [4, 8, 12] Новый массив




**ДЕСТРУКТУРИЗАЦИЯ**

**Деструктуризация объектов

const userProfile = {
	name: 'Dima',
	commentsQty: 23,
	hasSignedAgreement: false,
}


Объявление новых переменных и присваивание значений на основе значений свойств объекта
const {name, commentsQty} = userProfile;
const { hasSignedAgreement} = userProfile;

console.log(name); // Dima
console.log(commentsQty);// 23


**Деструктуризация массивов, используем []
Объявление новых переменных и присваивание значений на основе элементов массива
При деструктуризации массивов важно учитывать порядок следования элементов в массиве
const fruits = ['Apple', 'Banana'];
const [fruitOne, fruitTwo] = fruits;

console.log(fruitOne); // Apple
console.log(fruitTwo); // Banana



**Деструктуризация параметров функции 
const userProfile = {
	name: 'Dima',
	commentsQty: 23,
	hasSignedAgreement: false
}

const userInfo = ({name, commentsQty }) => { // {name, commentsQty } - это деструктуризация параметров функции 
	if (!commentsQty) {
		return `User ${name} has no comments`
	}
	return `User ${name} has ${commentsQty} comments`
}

userInfo(userProfile); // User Dima has 23 comments




**УСЛОВНЫЕ ИНСТРУКЦИИ**

Инструкция выполняет определенные действия.
Выражение возвращает результат

- if (инструкция)
- if ... else (инструкция)
- switch (инструкция)
- тернарный оператор (выражение)

if(Условие){
	// Блок кода, выполняемый однократно, если Условие правдиво
}

Пример IF 
let val = 10;

if (val > 5) {
	val += 20
}

console.log(val); // 30

Пример IF с оператором отрицания
const person = {
	age: 20
}

if (!person.name){ //!undefined === true
	console.log("Unknown user's name!");
	// Другие действия в случае, если свойства "name" у объекта "person" нету
}



Инструкция IF ELSE 

if (Условие) {
	// Блок кода, выполняемый однократно, если Условие правдиво
} else {
	// Блок кода, выполняемый однократно, если Условие ложно
}

Пример IF ELSE
let val = 10;

if (val < 5) {
	val += 20;
} else {
	val -= 20;
}

console.log(val); // -10


Инструкция IF ELSE IF

if(Условие 1) {
	// Блок кода, выполняемый однократно, если Условие 1 правдиво
} else if (Условие 2) {
	// Блок кода, выполняемый однократно, если Условие 2 правдиво
} else {
	// Блок кода, выполняемый однократно, если предыдущие условия ложны
}


Предпочтительный формат IF

if(Условие 1) {
	// Блок кода, выполняемый однократно, если Условие 1 правдиво
} 

if (Условие 2) {
	// Блок кода, выполняемый однократно, если Условие 2 правдиво
} 

if (Условие 3) {
	// Блок кода, выполняемый однократно, если Условие 3 правдиво
}


Пример

const age = 8;

if (age > 18) {
	console.log('Is adult')
} else if (age >= 12) {
	console.log('Is teenager')
} else {
	console.log('Is child')
}


const age = 34;

if (age > 18) {
	console.log('Is adult')
} 
if (age >= 12 && age <= 18) {
	console.log('Is teenager')
} 
if (age < 12){
	console.log('Is child')
}

**Использование IF в функциях
const sumPositiveNumbers = (a, b) =>{
	if (typeof a !== 'number' || typeof b !== 'number') {
		return 'One of the arguments is not a number'
	}

	if (a <= 0 || b <= 0) {
		return 'Numbers are not positive'
	}

	return a + b;
}

sumPositiveNumbers(5, 8);


Инструкция SWITCH 


switch (Выражение) {
	case A:
	// Действие если Выражение === A
		break
	case B:
	// Действие если Выражение === B
		break
	default:
	// Действие по умолчанию
}	

Пример SWITCH
const month = 2;

switch(month) {
	case 12:
		console.log('December');
		break
	case 1:
		console.log('January');
		break
	case 2:
		console.log('February');
		break
	default:
		console.log('This is not a winter month!')
}


**ТЕРНАРНЫЙ ОПЕРАТОР**
- У тернаронго оператора три операнда
- Оператор возвращает значение
- Конструкция с тернарным оператором - выражение
- Выражение возвращает значение

Синтаксис тернарого оператора:
Условие ? Выражение 1 : Выражение 2

 ^  - любое выражение

Если условие правдиво, тогда возвращается результат Выражения 1
Если условие ложно, тогда возвращается результат Выражения 2

Тернарный оператор

Условие
? Выражение 1
: Выражение 2


const value = 11;

value
	? console.log('True') // True
	: console.log('False')


const value2 = '';

value2
	? console.log('True')
	: console.log('False') // False



const value1 = 11;
const value2 = 25;

value1 && value2 
	? myFunction1(value1, value2)
	: myFunction2()



let value = 11;

console.log(value >= 0 ? value : -value); // 11

value = -5;

const res = value >= 0 ? value : -value; // 5
console.log(res); // 5



**ЦИКЛЫ**
Все циклы - это инструкции, не выражения
Типы циклов:
- for
- for ... in ...
- while 
- do ... while
- for ... of ...


**ЦИКЛ FOR** 
for (Начальная инструкция; Условие; Итерационное действие) {
	//Блок кода, выполняемый на каждой итерации
}

const arr = [1, true, 'me', null, 456, 'string'];

for (let i = 0; i < arr.length; i++){
	console.log(arr[i]);
}



Циклы можно использовать, но не рекомендуется для массивов
Лучше использовать функции высшего порядка массивов
- forEach
- map
- reduce



const myArray = ['first', 'second', 'third'];

for (let i = 0; i < myArray.length; i++) {
	console.log(myArray[i]);
}


const myArray = ['first', 'second', 'third'];

myArray.forEach((element, index) =>{
	console.log(element, index);
});

// 'first' 0
// 'second' 1
// 'third' 2



**ЦИКЛ WHILE**

while (Условие) { // Цикл выполняется пока условие правдиво
	// Блок кода, выполняемый на каждой итерации. Может быть ни разу не выполнен, если условие ложно
}

let i = 0;

while (i < 5) {
	console.log(i);
	i++;
}



**ЦИКЛ DO WHILE**

do { // Блок кода выполняется хотя бы один раз
	// Блок кода, выполняемый на каждой итерации
} while (Условие)


let i = 6;

do {
	console.log(i);
	i++;
} while (i < 5);


**ЦИКЛ FOR IN** РАБОТА С ОБЪЕКТАМИ

for (key in Object) {
	// Действие с каждыйм свойством объекта
	// Значение свойства - Object[key]
}



const myObj ={
	name: "Dima",
	age: 34,
	isMarried: true,
	hasKids: false
}

for (key in myObj){
	console.log(key + " : " + myObj[key]);
}

FOREACH ДЛЯ ОБЪЕКТОВ
const myObject = {
	x: 10,
	y: true,
	z: 'abc'
}

Object.keys // - Получение всех ключей объекта в виде массива
const objArray = Object.keys(myObject);
console.log(objArray);

 Object.keys(myObject).forEach(key => {
	console.log(key, myObject[key]);
})

// x 10
// y true
// z abc

Object.values(myObject).forEach(value => {
	console.log(value);
})

**FOR IN ДЛЯ МАССИВОВ**;

const myArray = [true, 10, 'abc'];

for (const key in myArray) {
	console.log(myArray[key]);
}

// true
// 10
// abc

**ЦИКЛ FOR OF** // Появился в ES6

for (Element of Iterable) {
	// Действия с определенным элементом
}


**FOR OF ДЛЯ СТРОК**

const myString = 'Dimon'

for ( const letter of myString){
	console.log(letter);
}


**FOR OF ДЛЯ МАССИВОВ**

const myArray = [true, 10, 'abc'];

for (const element of myArray){
	console.log(element);
}




**ДЛЯ МАССИВОВ ВСЕГДА ИСПОЛЬЗОВАТЬ FOREACH**

const myArray = [true, 10, 'abc'];

myArray.forEach(element => {
	console.log(element);
})


**FOR OF НЕ ДЛЯ ОБЪЕКТОВ**



**МОДУЛИ**
 - Модули позволяют структурировать код
 - Модули позволяют избегать дублирования блоков кода


**EXPORT/IMPORT СИНТАКСИС, ПОЯВИЛСЯ В ES 6**

moduleOne.js 			moduleTwo.js

export ...				import ...


Примеры 
Экспорт по умолчанию

moduleOne.js 						moduleTwo.js
const myName = ()=>{ 				import printMyName from './moduleOne.js';
	console.log('Dima');			printMyName(); // Dima
}

export default myName;


 При работе с модулями - расширение файла .mjs
// moduleOne.mjs
// moduleTwo.mjs


**НЕСКОЛЬКО ЭКСПОРТОВ**

// moduleOne.js
;
const one = 1;
const two = 'two';

export {
	one,
	two
}



// moduleTwo.js 
//!!!! Имена переменных должны совпадать!
// При таком импорте можно переименовывать переменные

import {
	one as oneRenamed,
	two
} from './moduleOne.js'

console.log(oneRenamed); // 1
console.log(two); // two


**ПРАВИЛА РАБОТЫ С МОДУЛЯМИ**
1. Модули должны быть одноцелевыми
2. Располагайте все export инструкции внизу файла
3. Располагайте все import инструкции сверху файла
4. По возможности использовать export default


**ОЧЕНЬ ВАЖНАЯ ТЕМА В JAVASCRIPT**
**КЛАССЫ И ПРОТОТИПЫ**

**СИНТАКСИС КЛАССОВ ПОЯВИЛСЯ В ES6**
javascript не является объектно ориентированным языком программирования

КЛАССЫ позволяют создавать прототипы для объектов

На основании прототипов создаются ЭКЗЕМПЛЯРЫ

ЭКЗЕМПЛЯРЫ могут иметь свои собственные свойства и методы

ЭКЗЕМПЛЯРЫ наследуют свойства и методы прототипов

class ...


**ПРИМЕР КЛАССА**

class Comment { // ключевое слово class, название класса с большой буквы
	constructor(text){  // метод constructor
		this.text = text // переменная this указывает на экземпляр класса
		this.votesQty = 0 // переменная this указывает на экземпляр класса
	}

	upvote() { // метод upvote 
		this.votesQty += 1 // переменная this указывает на экземпляр класса
	}
}


**СОЗДАНИЕ ЭКЗЕМПЛЯРОВ КЛАССА**

class Comment {
	constructor(text) {
		this.text = text
		this.votesQty = 0
	}

	upvote() {
		this.votesQty += 1
	}
}


					С помощью ключевого слова new вызывается функция constructor
const firstComment = new Comment('First text');

console.log(firstComment);

**СОБСТВЕННЫЕ СВОЙСТВА ЭКЗЕМПЛЯРА**

НАСЛЕДОВАНИЕ ПО ЦЕПОЧКЕ

firstComment.constructor()
firstComment.upvote()


firstComment  	>>		Comment  		>>	 	Object 
Является 				"Comment" наследует 
экземпляром 		 	все методы "Object"
класса "Comment"		который является 
						глобальным классом
						javascript

**ПРОВЕРКА ПРИНАДЛЕЖНОСТИ КЛАССУ**
**ИСПОЛЬЗУЕМ ОПЕРАТОР INSTANCEOF**

class Comment {
	constructor(text) {
		this.text = text
		this.votesQty = 0
	}

	upvote() {
		this.votesQty += 1
	}
}

const firstComment = new Comment('First text');

firstComment instanceof Commet // true
firstComment instanceof Object // true


**ВЫЗОВ МЕТОДОВ**


class Comment {
	constructor(text) {
		this.text = text
		this.votesQty = 0
	}

	upvote() {
		this.votesQty += 1
	}
}

const firstComment = new Comment('First text');

firstComment.upvote()
console.log(firstComment.votesQty) // 1
firstComment.upvote()
console.log(firstComment.votesQty) // 2


**ПРАКТИКА СОЗДАНИЯ КЛАССОВ И ЭКЗЕМПЛЯРОВ**

class Comment {
	constructor(text) {
		this.text = text
		this.votesQty = 0
	}

	upvote() {
		this.votesQty += 1
	}
}

const firstComment = new Comment('First text');


**ПРОВЕРКА ПРИНАДЛЕЖНОСТИ СВОЙСТВ ЭКЗЕМПЛЯРА**
;
const firstComment = new Comment('First text');

firstComment.hasOwnProperty('text'); // true
firstComment.hasOwnProperty('votesQty'); // true
firstComment.hasOwnProperty('upvote'); // false
firstComment.hasOwnProperty('hasOwnProperty'); // false



**СОЗДАНИЕ НЕСКОЛЬКИХ ЭКЗЕМПЛЯРОВ**
class Comment {
	constructor(text) {
		this.text = text
		this.votesQty = 0
	}

	upvote() {
		this.votesQty += 1
	}
}

const firstComment = new Comment('First comment');
const secondComment = new Comment('Second comment');
const thirdComment = new Comment('Third comment');

**СТАТИЧЕСКИЕ МЕТОДЫ**

!!Метод доступен как свойство класса и НЕ НАСЛЕДУЕТСЯ экземплярами класса
Используется ключевое слово static

class Comment {
	constructor(text) {
		this.text = text
		this.votesQty = 0
	}

	upvote() {
		this.votesQty += 1
	}

	static mergeComments(first, second) {
		//return `${first} ${second}` // Раскоментировать строчку
	}
}


Comment.mergeComments('First comment.', 'Second Comment.');


**РАСШИРЕНИЕ ДРУГИХ КЛАССОВ**

class NumbersArray extends Array { // Родительский конструктор вызовется автоматически
	sum() {
		return this.reduce((el, acc) => acc += el, 0)
	}
}

const myArray = new NumbersArray(2, 5, 7);
console.log(myArray);
myArray.sum();

В данном примере создана такая цепочка прототипов:

myArray  >>  NumbersArray >> Array >> Object

 - myArray - это экземпляр класса NumbersArray
 - NumbersArray - расширяет класс Array
 - Array - расширяет Object

 Любой экземпляр класса NumbersArray наследует все методы NumbersArray, Array, Object 


 **ЧТО ТАКОЕ ПРОТОТИП** 

**СТРОКИ И ЧИСЛА ВЕДУТ СЕБЯ КАК ОБЪЕКТЫ**


**ПРОМИСЫ**
Промис - это объект

- Промисы позволяют обрабатывать ОТЛОЖЕННЫЕ во времени события
- Промис - это ОБЕЩАНИЕ предоставить результат ПОЗЖЕ
- Промис может вернуть ОШИБКУ если результат предоставить НЕВОЗМОЖНО

СОСТОЯНИЯ ПРОМИСА
   - ОЖИДАНИЕ - 
   - ИСПОЛНЕН -
   - ОТКЛОНЕН -


**СОЗДАНИЕ ПРОМИСА**
;
Мы создаем новый экземпляр класса Promise
const myPromise = new Promise((resolve, reject) => {

/**
 * Выполнение асинхронных действий
 *
 * Внутри этой функции нужно в результате вызвать одну из функций resolve или reject
*/
});

Вновь созданный Промис будет в состоянии pending(ожидания)

Если вызывается resolve, то в таком случае промис считается исполненным
Если вызывается reject, то в таком случае промис считается отклоненным 

**ПОЛУЧЕНИЕ РЕЗУЛЬТАТА ПРОМИСА**

myPromise
	.then(value => {
	/**
	 * Действия в случае успешного исполнения Промиса
	 * Значение value - это значение, переданное в вызове функции resolve внутри Промиса
	 */
	})
	.catch(error =>{
	/**
	 * Действия в случае отклонения Промиса
	 * Значение error - это значение, переданное в вызове функции reject внутри Промиса
	 */	
	})


**ПОЛУЧЕНИЕ ДАННЫХ С ПОМОЩЬЮ FETCH API**
fetch('https://jsonplaceholder.typicode.com/todos')
	.then(response => response.json())
	.then(json => console.log(json))
	.catch(error => console.error(error))

Когда мы отправляем запрос, fetch возвращает Промис в состоянии pending 
Дальше мы обрабатываем результат промиса, т.е. берем данные из него

Метод json также возвращает Промис, поэтому у нас 2 блока .then

fetch('https://jsonplaceholder.typicode.com/todos')
	.then(response => {
		console.log(response)
		return response.json()
	})
	.then(json => console.log(json))
	.catch(error => console.error(error))
   


****
fetch('https://jsonplaceholder.typicode.com/todos/55')
	.then(response => response.json())
	.then(json => console.log(json))
	.catch(error => console.error(error))



****
fetch('https://jsonplaceholder.typicode.com/todos/55')
	.then(response => response.json())
	.then(json => console.log(json))
	.catch(error => console.log(error.message))



**ПРОМИСЫ**
;
Функция для упрощения приема промиса
const getData = (url) => 
	new Promise((resolve, reject) => 
		fetch(url)
			.then(response => response.json())
			.then(json => resolve(json))
			.catch(error => reject(error))
	)

Теперь данную функцию можно вызывать в любом месте и будет только один .then
getData('https://jsonplaceholder.typicode.com/todos')
	.then(data => console.log(data))
	.catch(error => console.log(error.message))



getData('https://jsonplaceholder.typicode.com/todos/53')
	.then(data => console.log(data))
	.catch(error => console.log(error.message))




**ASYNC/AWAIT**
ASYNC/AWAIT специальный синтаксис для упрощения работы с Промисами - появился в ES6

**АСИНХРОННАЯ ФУНКЦИЯ**

async function asyncFn() {
	// Всегда возвращает Промис
}

const asyncFn = async () => {
	// Всегда возвращает Промис
	return 'Success!'
}

asyncFn()

****
const asyncFn = async () => {
	// Всегда возвращает Промис
	return 'Success!'
}

asyncFn()
	.then(value => console.log(value));


****
const asyncFn = async () => {
	// Всегда возвращает Промис
	throw new Error('There was an error!');
}

asyncFn()
.then(value => console.log(value))
.catch(error => console.log(error.message))


**AWAIT**
await  можно использовать только с async
const asyncFn = async () => {
	await <Promise> // Внутри асинхронных функций можно ожидать результатов Промисов
}

asyncFn()

 Пример 
 Ожидание результата await

 const timerPromise = () =>
 	new Promise((resolve, reject) =>
 		setTimeout(() => resolve(), 2000))

 const asyncFn = async () => {
 	console.log('Timer stats')
 	await timerPromise() // Функция дальше не выполняется пока не получен результат Промиса (исполнен/отклонен)
 	console.log('Timer ended')
 }

asyncFn()

****
Продолжение примера 

 const timerPromise = () =>
 	new Promise((resolve, reject) =>
 		setTimeout(() => resolve(), 2000))

 const asyncFn = async () => {
 	console.log('Timer starts')
 	const startTime = performance.now()
 	await timerPromise()
 	const endTime = performance.now()
 	console.log('Timer ended', endTime - startTime)
 }

asyncFn()


**ПЕРЕХОД С ПРОМИСОВ НА ASYNC/AWAIT**
;
Пример
const getData = (url) => 
	new Promise((resolve, reject) =>
		fetch(url)
		.then(response => response.json())
		.then(json => resolve(json))
		.catch(error => reject(error))
	)

getData('https://jsonplaceholder.typicode.com/todos')
	.then(data => console.log(data))
	.catch(error => console.log(error.message))


Переписываем эту функцию с Промисов на async / await
;

const getData = async (url) => {
	const res = await fetch(url)
	const json = await res.json()
	return json
}

getData('https://jsonplaceholder.typicode.com/todos')
	.then(data => console.log(data))
	.catch(error => console.log(error.message))


Продолжаем переписывать пример:

const getData = async (url) => {
	const res = await fetch(url)
	const json = await res.json()
	return json
}

const url = 'https://jsonplaceholder.typicode.com/todos'

const data = await getData(url) // Нет обработки ошибок
// Синтаксис доступен только в асинхронных функциях 


Пример 
Продолжение 

const getData = async (url) => {
	const res = await fetch(url)
	const json = await res.json()
	return json
}

const url = 'https://jsonplaceholder.typicode.com/todos'

try {
	const data = awa it getData(url)
	console.log(data)
} catch (error) {
	console.log(error.message)
}
 

**ГЛАВНОЕ В ASYNC/AWAIT**
1. Async/await - это синтаксическая надстройка над промисами 
2. await синтаксис возможен только внутри async функций 
3. async функция всегда возвращает Promise
4. async функция ожидает результата инструкции await и не выполняет последующие инструкции





//Here is MacOS commit




//forEach(element, index, array)
// Перебирает каждый элемент, возвращает undefind
const arr = [1, 3, true, 'Hello world', {id: 1, name: 'Dima'}, false, {id: 2, name: 'Ksu'}, [12, 22]]

arr.forEach((elem, index) => console.log(typeof elem  + ` ${index}`))



//map(element, index, array)
// Перебирает каждый элемент, возвращает новый массив

const numbers = [1, 2, 3, 4, 5]
const mapResult = numbers.map((element, index) => element * index)

console.log(mapResult)



//includes(element, index)
// c index начинается поиск element
// Проверяет наличие искомого значения внутри массива, возвращает true или false

const arr = [1, 3, true, 'Hello world', {id: 1, name: 'Dima'}, false, {id: 2, name: 'Ksu'}, [12, 22]]

const includesResult = arr.includes(3, 0)
console.log(includesResult)



//find(element, index, array)  
// Можно использовать this в callback функции
// Проходит по массиву и возвращает элемент, подходящий по условию(true)
// Работает до первого нахождения(true) и прекращает свою работу
// Возвращает сам элемент

const arr = [1, 3, true, 'Hello world', {id: 1, name: 'Dima'}, false, {id: 2, name: 'Ksu'}, [12, 22]]

const findResult = arr.find((elem) => elem.id === 3 )
console.log(findResult)




//findIndex() - возвращает искомого элемента
const arr = [1, 3, true, 'Hello world', {id: 1, name: 'Dima'}, false, {id: 2, name: 'Ksu'}, [12, 22]]

const findResult = arr.findIndex((elem) => elem.id)
console.log(findResult)



// filter()
// Возвращает все элементы, подходящие условию

const arr = [1, 3, true, 'Hello world', {id: 1, name: 'Dima'}, false, {id: 2, name: 'Ksu'}, [12, 22]]

const filterResult = arr.filter((el) => typeof el === 'object')
console.log(filterResult)



//push(element, element2, elementN)
// Добавляет элемент в конец массива

const data = []

const str = 'Learn Javascript'
data.push(str, 2)
console.log(data)



//split('')
// Разбивает строку на массив
// В качестве аргумента принимает разделитель по которому разбивается строка
// При передаче пустой строки('') получаем посимвольный архив

const str = 'Learn javascript'

const arrStr = str.split('')
console.log(arrStr)


//join()
// Соединяет массив в строк
// Разделитель по умолчанию - запятая(,)

const newStr = arrStr.join('')
console.log(newStr)


const newStr2 = arrStr.join('+')
console.log(newStr2)



//splice(start, numbers, element )
// Первый параметр start - индекс элемента с которого начинается вставка/удаление элементов 
// Второй параметр numbers - количество элементов
// Третий параметр element - значение, которое нужно вставить на это место
// Используется для вставки и/или удаления элемента в середину массива
// Изменяет сам массив

const arr = [1, 3, true, 'Hello world', {id: 1, name: 'Dima'}, false, {id: 2, name: 'Ksu'}, [12, 22]]

const strings = ['Apple', 'Pen']

arr.splice(2, 1, ...strings)
console.log(arr);



//flat(levels)
// Используется для работы с многомерными массивами
// levels - количество уровней вложенности массивов
// Если количество уровней неизвестно, то передаем Infinity как аргумент
// Выводит значения внутренних массиво в одномерный
const numbers = [1, 2, [3, 4, [5, 6]]]
const newNumbers = numbers.flat(2)

console.log(newNumbers)



//reduce((acc,elem) =>{}, 0)
// acc - Переменная, в которую суммируются элементы массива
// elem - Элемент, передаваемый в тело функции 

const array = [1, 2, 3, 4, 5];

let total = array.reduce((acc, elem) =>{
	return acc + elem;
}, 0)

console.log(total);


const arrayFruits = ['apple', 'banana', 'peach', 'orange']

let fruits = arrayFruits.reduce((acc, elem) => {
	acc[elem] = 1;
	return acc;
}, {})

console.log(fruits);





const arrayFruits = ['apple', 'banana', 'peach', 'orange', 'apple', 'banana', 'peach', 'orange', 'orange', 'orange']

let fruits = arrayFruits.reduce((acc, elem) => {
	if(acc[elem]){
		acc[elem] += 1;
	} else {
		acc[elem] = 1;
	}
	return acc;
}, {})

console.log(fruits);



// Some notes



// Variable scope, closure - замыкания 
































