/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */


const greetings = () => {
	setTimeout(console.log('Hello, world'), 5000);	
}

greetings();

Правильно

setTimeout(() => console.log('Hello, world'), 5000)