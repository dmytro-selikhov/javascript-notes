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







































