// STRING METHODS
let str = 'JavaScript';

str.length; // 10
str[1]; // a
str.charAt(1) // a
str.charCodeAt(1) // 97 (the ASCII number value of "a" at index 1)

str.toUpperCase(); // JAVASCRIPT
str.toLowerCase(); // javascript

str.substring(0, 4); // Java
str.split(); // ['JavaScript']
str.split(''); // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

str.includes('Script'); // true
str.replace('Script', 'Python'); // JavaPython

let trimWhiteSpace = '  Brady Gerber   ';
trimWhiteSpace.trim(); // Brady Gerber

console.log(str.charCodeAt(1));
