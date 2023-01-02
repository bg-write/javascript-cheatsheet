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
// https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/

// todo FizzBuzz
// https://codeburst.io/javascript-breaking-down-the-shortest-possible-fizzbuzz-answer-94a0ad9d128a

// todo Fibonacci
// https://medium.com/@justinhwu95/solving-the-fibonacci-sequence-in-javascript-c1ee37ef65d0

//===================== NODE.JS ===============================
// How we're able to build server-side apps with JS

//==== JS FRAMEWORKS & LIBRARIES TO KNOW (AT LEAST ABOUT) =====

//===================== JQUERY ================================
// https://github.com/bg-write/guide-to-jquery

//==== WELL KNOWN JS FRAMEWORKS & LIBRARIES ===================

// > node javascript.js
