'use strict';

// this is illegal!
/*
foo = 'bar';
console.log('foo is ' + foo);
*/

var name = prompt('What is your name?');
console.log('name? ' + name);

var age = prompt('What is my age again?');
console.log('age? ' + age);

alert(name + ' is ' + age + ' years old!');

/*
var answer = prompt('Do you think yes or no?');
var sanitizedAnswer = answer.toUpperCase().trim();

// Don't do this:
if (answer === 'Y' || answer === 'y'
     || answer === 'yes' || answer === 'YES'
     || answer === 'Yes' || answer === 'yEs') {
  alert('yes!');
}
// Do this instead for checking regardless of case
else if (sanitizedAnswer === 'N'
        || sanitizedAnswer === 'NO') {
  alert(answer + ' means no!');
}
else {
  alert('I did not recognize that response!');
}
*/
