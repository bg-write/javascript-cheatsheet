/*
JAVASCRIPT
Created by Netscape in 1995 as an extension of HTML for Netscape Navigator 2.0 to manipulate HTML documents and form validation. Unlike C, C# and Java, JavaScript is an interpreted language ... it needs an "interpreter," like the browser.
*/

//===================== THE VERY BASICS =======================
// This is a comment

/* this is a comment,
with multiple lines */

// to add JS to your HTML (see our "index.html" file)
{
	/* <script src="script.js"></script>; */
}

console.log('Hello, World');

// to call the script in the terminal
// first, make sure you've installed Node.js
// > node javascript.js

//===================== VARIABLES, DATA AND VALUES ============
var varVar = "I'm the original way to declare a variable, avoid me if you can";
const varConst = 'I can NOT be reassigned';
let varLet = 'I can be reassigned';

let number = 2;
let string = 'hello';
let boolean = true;

/* Falsy values:
False
0
"" (empty string)
NaN (Not a Number)
Null
Undefined
*/

//===================== DOING MATH ============================
let num = 42;

Number.isInteger(num); // true

//===================== PLAYING WITH STRINGS (WORDS) ==========
let str = 'Godzilla';

str.length; // 8 (starts from 1, NOT 0)
str.indexOf('zilla'); // 3
str.slice(0, 3); // God
str.toLowerCase(); // godzilla
str.toUpperCase(); // GODZILLA

//===================== EXPRESSIONS AND LOOPS =================
// switch (typesOfFruit) {
// 	case 'oranges':
// 		console.log('You entered "oranges"!');
// 		break;
// 	case 'apples':
// 		console.log('You entered "apples"!');
// 		break;
// 	case 'bananas':
// 		console.log('You entered "bananas"!');
// 		break;
// 	default:
// 		console.log(`Sorry, we don\'t have ${typesOfFruit}`);
// }
//===================== OBJECTS ===============================

//===================== ARRAYS ================================
let arr = [3, 4, 5, 6];

arr.at(1); // 4
arr.push(7); // [3, 4, 5, 6, 7]
arr.pop(); // [3, 4, 5, 6]
// arr.fill(1); // [1, 1, 1, 1]
// arr.join(' ') // [3, 4, 5, 6] (now a string)
// arr.reverse(); // [6, 5, 4, 3]
arr.includes(5); // true
arr.map((item) => 2 * item); // [6, 8, 10, 12]

console.log();

//===================== FUNCTIONS =============================
function funcDeclaration(param) {
	return console.log(param);
}

const funcExpression = function (param) {
	return console.log(param);
};

const arrowFunc = (param) => {
	console.log(param);
};

//===================== OOP IN JS =============================

//===================== DOM MANIPULATION ======================
// const singleID = document.getElementById('ID');

//===================== EVENT LISTENERS =======================

//===================== JSON ==================================
/*
JavaScript Object Notation 
A language-independent data-representation text format helping us work with APIs. Objects containing methods for parsing and converting values.
*/

//===================== ERROR HANDLING ========================

//===================== WORKING WITH APIs =====================

//===================== ASYNC/AWAIT & PROMISES ================

//===================== HASHMAP & HASHTABLE ================

//===================== JS SOLUTIONS TO KNOW ==================
// todo Palindrome

// todo FizzBuzz

// todo Fibonacci

//===================== NODE.JS ===============================
// How we're able to build server-side apps with JS

//==== JS FRAMEWORKS & LIBRARIES TO KNOW (AT LEAST ABOUT) =====

//===================== JQUERY ================================
// https://github.com/bg-write/guide-to-jquery

//==== WELL KNOWN JS FRAMEWORKS & LIBRARIES ===================

//===================== Thank you for reading :) ==============
/* 
Helpful JS links:
JavaScript in 100 Seconds (Fireship) https://www.youtube.com/watch?v=DHjqpvDnNGE

Thank you, General Assembly
*/

// > node javascript.js
