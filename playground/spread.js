// function add (a, b) {
// 	return a+b;
// }

// console.log(add(3,1));

// var toAdd = [9, 5, 1];

// console.log(add(...toAdd));

// var groupA = ['sami', 'jon'];
// var groupB = ['jasmin'];
// var final = [3, ...groupA, ...groupB];

// console.log(final);

var person = ['Andrew', 25];
var person2 = ['Jen', 29];

function greet (name, age) {
	console.log('Hi, ' + name + ' you are ' +  age);
}

greet(...person);
greet(...person2);

var names = ['mike', 'ben'];
var final = ['Montana', ...names];

final.forEach(function (name) {
	console.log('Hi, ' + name);
});

var group = [person, person2];