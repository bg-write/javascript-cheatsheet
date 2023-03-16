// VARIABLES
// How we hold, contain, and reference data
// for naming (identifying) variables, stickToCamelCase

// SCOPE
// Global: declared outside a function and is available everywhere
// Function/Local: new scope created inside a function for just that function
// Block: new scope for JUST inside the curly braces of a statement (i.e. creating variables in an if statement)

var varVar =
    "I'm the original way to declare a variable. I have function/local scope. Avoid me if you can!";

const varConst =
    "I'm newer and fancier, because I have block scope. I can NOT be reassigned and my data won't change.";

let varLet = "I'm like const, except I CAN be reassigned and change at a different time.";

// DATA TYPES
// Primitive (data types with a single value)
const string = 'Hi.';
const number = 42;
const boolean = true;
// null = no value, or empty
// undefined = value not assigned
// symbol = somewhat rare

// MORE ON STRINGS
// Line breaks
const twoLines = 'Line one.\nLine two.';
/*
Line one.
Line two.
*/

let strConcat = 'Brady ' + 'Gerber' // Brady Gerber
console.log(strConcat)

// MORE ON NUMBERS
const integer = 42
const float = 4.2

// Template literals
const templateLiteral = `${string}, ${number}, and ${boolean} are all different data types!`; // Hi., 42, and true are all different data types!

// Object (non-primitive data types with multiple values and are mutable)
/*
Array
Object
Function
RegEx
Date
*/

// When in doubt trying to check data types
typeof 'This is a string' // string