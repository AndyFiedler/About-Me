'use strict';


var name = prompt("What is your name?");
var question = prompt("Hello " + name + "!!  " +
    "Do you think Freeman plays the piano?");
var answer = question.toUpperCase().trim();

if (answer === "YES" || answer === "Y") {
  alert(answer + ", That is correct, well at least I use to.")
} else if (answer === "NO" || answer === "N") {
  alert(answer + ", I don't currently play much, but I use to.")
}

