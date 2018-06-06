'use strict';


var name = prompt("What is your name?");
var question = prompt("Hello " + name + "!!  " + "Question: 1, " +
    "Do you think Freeman plays the piano?");
var answer = question.toUpperCase().trim();

if (answer === "YES" || answer === "Y") {
  alert(answer + ", That is correct, well at least I use to.")
} else if (answer === "NO" || answer === "N") {
  alert(answer + ", I don't currently play much, but I use to.")
}

var question = prompt("Question: 2 " + name + ", do you think Freeman's favorite food is pizza?");
var answer = question.toUpperCase().trim();

if (answer === "YES" || answer === "Y") {
  alert("Answer: " + '"' + answer + '"' + ", Is not correct!  Sushi is my favorite, but I won't turn down free pizza!")
} else if (answer === "NO" || answer === "N") {
  alert("Answer: " + '"' + answer + '"' + " Is correct, sushi is my favorite, but of course I like pizza.  Especially when it is free!")
}

