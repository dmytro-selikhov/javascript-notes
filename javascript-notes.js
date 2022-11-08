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

myCity['cityJoke'] = 'Ha-ha-ha';

Теперь объект выглядит так:
const myCity = {
	city: 'New York',
	popular: true,
	country: 'USA',
	cityJoke: 'Ha-ha-ha'
}

Удалить свойство можно через оператор удаления delete:
delete myCity['cityJoke'];

Теперь объект выглядит так:
const myCity = {
	city: 'New York',
	popular: true,
	country: 'USA'
}

