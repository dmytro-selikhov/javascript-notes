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
