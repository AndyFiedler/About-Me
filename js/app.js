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

var question = prompt("Question: 4 " + name + ", do you think Freeman once had a pet deer?");
var answer = question.toUpperCase().trim();

if (answer === "YES" || answer === "Y") {
  alert("Answer: " + '"' + answer + '"' + ", Is correct, I had a pet deer!  He had tags and papers, so he was completely legal.")
} else if (answer === "NO" || answer === "N") {
  alert("Answer: " + '"' + answer + '"' + " Is incorrect, I had a pet deer!  He had tags and papers, so he was completely legal.")
}

var question = prompt("Question: 5 " + name + ", do you think Freeman can juggle while riding a unicycle?");
var answer = question.toUpperCase().trim();

if (answer === "YES" || answer === "Y") {
  alert("Answer: " + '"' + answer + '"' + ", Is incorrect!  While I can juggle, I can not juggle while riding a unicycle.")
} else if (answer === "NO" || answer === "N") {
  alert("Answer: " + '"' + answer + '"' + " Is correct!  I can juggle, but not while I ride a unicycle.")
}



 var guessCount = 0;
 var promptWarning = "Incorrect!";

 while (guess !== "7" && guessCount < 4 ) {

 if (guess === null) {
     console.log("You canceled out of: What is Freeman's favorite number?");
     break;
   }  
   var guess = prompt("What is Freeman's favorite number?");
   console.log("guess is: " + guess);

 if (guess > 7) {
       promptWarning = "To high!!"
   } else if (guess < 0) {
       promptWarning = "It is not a negative number";
   } else if (guess < 7) {
       promptWarning = "To low!!"; 
   } else {
     alert("You guessed correctly!");
   }

   guessCount++;
   console.log(promptWarning);
   console.log(guessCount);
 }

 if (guessCount >= 4) {
   alert("You guessed to many times!  Answer is 7!");
} 






// var correctCount = 0;
// var countries = ["America", "Canada", "Mexico", "Bahamas", "Costa Rica", "France", 
// "England", "Germany", "Poland", "Croatia", "Slovenia", "Austria", "Ghana", "ToGo", 
// "Niger", "Taiwan", "Malaysia", "Singapore"];
// var guess = prompt("Guess a country Freeman has been to!")

// while (guessCount < 6 ) {

// if (countries.includes(guess)) {
//   correctCount++;
//   correctCountries.push(guess);
// }

// if (guess === null) {
//   console.log("You canceled out of: What countries have I been to?");
//   break;
// }  
// var guess = prompt("What countries has Freeman been to?");
// console.log("guess is: " + guess);
// }
