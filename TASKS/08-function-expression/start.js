/** ЗАДАЧА 8 - Присваивание функции переменной
 *
 * 1. Объявите переменную и присвойте ей функциональное выражение
 *
 * 2. У функции должен быть один параметр "name"
 *
 * 3. Верните из функции строку "Привет, <name>"
 *
 * 4. Вызовите функцию дважды с разными аргументами
 *
 * 5. Результат вызовов функции выведите в консоль
 */

const myFunction = function(name){

	let myText = `Hello, ${name}`;

	return myText;

	console.log(myText);
}

myFunction("Max");


const hello = function (name) {
  return 'Привет, ' + name
}

console.log(hello('Богдан'))

console.log(hello('Ольга'))