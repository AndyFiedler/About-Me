//function declaraation
function sayHello() {
    console.log("hello");
}


//function invocation
sayHello();

//function declaration with parameters
function sayName(name) {
    if (name === undefined) {
    console.log("one has no name");
} else { 
    console.log("my name is" + name);
}
}

//function inovation with arguments
var name = 'jess';
sayName(name);

sayName("Jay");
sayName(;)

console.log("name variable =" + name)


//gitting a value out of a function
function calculatCircumfrence(radius) {
    var circumfrence = 2 * Math.PI * radius;

    return circumfrence;
}



var c = calculate Circumfrence(7);
console.log(circumfrence);

console.log(calculateCircumfrence(1));


//-----------------------

//function expression

var calculateCircleArea = function(radius) {
    return Math.PI * Math.pow(raidus, 2);
};


console.log(calculateCrcleArea(1));

var numbers = [102, 1000000, 7, 1, -5, 67];

console.log(numbers);

numbers.sort();

//sorted alphabetically by string character values
console.log(numbers);

numbers.sort(function(a, b) { return a - b; });
console.log(numbers);




/*
function nameTest() {
    var name;
    console.log(name);

nameTest();

will be undefined
}