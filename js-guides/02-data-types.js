// VARIABLES
// How we hold and reference data
// for naming (identifying) variables, stickToCamelCase

// SCOPE
// Global: declared outside a function and is available everywhere
// Function/Local: new scope created inside a function for just that function
// Block: new scope for JUST inside the curly braces of a statement (i.e. creating variables in an if statement)

var varVar =
    "I'm the original way to declare a variable. I have function/local scope. Avoid me if you can!";

const varConst =
    "I'm newer and fancier, because I have block scope. I can NOT be reassigned.";

let varLet = "I'm like const, except I CAN be reassigned.";

// DATA TYPES
// Primitive (a single value)
const string = 'Hi.';
const number = 42;
const boolean = true;
// There's also null (no value, or empty), undefined (value not assigned), and symbol (somewhat rare)

// MORE ON STRINGS
// Line breaks
twoLines = 'Line one.\nLine two.';
/*
Line one.
Line two.
*/

// Template literals
templateLiteral = `${string}, ${number}, and ${boolean} are all different data types!`; // Hi., 42, and true are all different data types!

// Object (multiple values)
/*
Array
Object
Function
RegEx
Date
*/
