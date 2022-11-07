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


