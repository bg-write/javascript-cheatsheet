// TYPES OF CONTROL FLOW
// Sequence: Statements execute one at a time in order
// Branching: Different code paths based on conditional
// Looping: Execute code repeatedly while condition is truthy

// TRUTHY VS FALSY
if (true) {
    console.log('truthy!');
} else {
    console.log('falsy!');
}

// FALSY VALUES
/*
null
undefined
false
0
NaN (Not a Number)
"" (empty string)
*/

// OPERATORS
/*
=== strict equality - best practice
== performs type conversion (coercion) if necessary
!== strict inequality
!= inequality
< less than
> greater than
<= less than or equal
>= greater than or equal
|| OR
&& AND
*/

// THE NOT OPERATOR
!false === true; // true
!null === true; // true
!3 === false; // true
!'' === true; // true

// BRANCHING STATEMENTS
// IF
if (val === 1) {
    console.log('This code will run only if val equals 1');
}

// IF ... ELSE
if (val === 1) {
    console.log('val is one');
} else {
    console.log('val is not one');
}

// IF ... ELSE ... IF
if (val === 1) {
    console.log('val is one');
} else if (val === 2) {
    console.log('val is two');
} else if (val === 3) {
    console.log('val is three');
} else {
    console.log('not one, two, or three');
}

// TERNARY OPERATOR
score > 100 ? gameWinner() : gameLoop();

// SWITCH (good for more than 3 code paths)
switch (typesOfFruit) {
    case 'oranges':
        console.log('You entered "oranges"!');
        break;
    case 'apples':
        console.log('You entered "apples"!');
        break;
    case 'bananas':
        console.log('You entered "bananas"!');
        break;
    case 'pineapple':
        console.log('You entered "pineapple"!');
        break;
    default:
        console.log(`Sorry, we don\'t have ${typesOfFruit}`);
}

// LOOPING STATEMENTS
// WHILE
let word = '';
let words = [];
while (true) {
    word = prompt('Enter a word ("end" to quit)');
    if (word === 'end') break;
    words.push(word);
    alert("You've entered: " + words.join(', '));
}

// DO ... WHILE
let num = 0;
do {
    console.log(num + ' is even');
    num += 2;
} while (num <= 10);

// FOR
// 1) The initializer (where we start)
// 2) The condition (do some stuff while truthy)
// 3) What to do at the end of each loop (usually increment the initializer)
let colors = ['red', 'white', 'blue'];
for (let idx = 0; idx < colors.length; idx++) {
    console.log(colors[idx]);
}
