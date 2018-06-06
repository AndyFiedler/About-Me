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
  alert("Answer: " + '"' + answer + '"' + " Is correct, sushi is my favorite, but of course I like pizza, especially when it is free!")
}

var question = prompt("Question: 3 " + name + ", do you think Freeman enjoys snowboarding?");
var answer = question.toUpperCase().trim();

if (answer === "YES" || answer === "Y") {
  alert("Answer: " + '"' + answer + '"' + ", That is correct!  I enjoy snowboarding.")
} else if (answer === "NO" || answer === "N") {
  alert("Answer: " + '"' + answer + '"' + " Is incorrect!  I enjoy snowboarding.")
}

var question = prompt("Question: 4 " + name + ", do you think Freeman once has a pet deer?");
var answer = question.toUpperCase().trim();

if (answer === "YES" || answer === "Y") {
  alert("Answer: " + '"' + answer + '"' + ", Is correct, I had a pet deer!  He had tags and papers, so he was completely legal.")
} else if (answer === "NO" || answer === "N") {
  alert("Answer: " + '"' + answer + '"' + " Is incorrect, I had a pet deer!  He had tags and papers, so he was completely legal.")
}

