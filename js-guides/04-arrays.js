// Array: A list of data values; a dynamic collection of indexed items
const colors = ['red', 'green', 'blue'];

// ACCESSING ARRAY ELEMENTS
colors[1]; // green

// ADDING TO AN ARRAY
colors.push('yellow'); // [ 'red', 'green', 'blue', 'yellow' ]
colors.unshift('purple'); // [ 'purple', 'red', 'green', 'blue', 'yellow' ]

// REMOVING FROM AN ARRAY
colors.pop(); // [ 'purple', 'red', 'green', 'blue']
colors.shift(); // [ 'red', 'green', 'blue']

// Splice
// 1) the idx of the element you wish to start "splicing" away
// 2) how many idx you wish to delete (including #1)
colors.splice(1, 1); // [ 'red', 'blue' ]

// ITERATING OVER AN ARRAY
// forEach (when you want to iterate over everything)
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number, idx) {
    console.log(idx + ') ' + number);
});
// 0) 1
// 1) 2
// 2) 3
// 3) 4
// 4) 5

// for ... for
for (const number of numbers) {
    if (number === 4) break;
    console.log(number);
}
// 1
// 2
// 3

// COPYING ARRAYS
const movies = ['star wars', 'harry potter', 'the godfather'];
// Slice (for copying parts of an array)
// 1) the idx of the element you wish to start "slicing" away into a new array
// 2) the idx of the first element I DON'T want to copy over
const newMovies = movies.slice(1, 2); // [ 'harry potter' ]

// Spread Operator (for copying an entire array)
const copyMovies = [...movies]; // [ 'star wars', 'harry potter', 'the godfather' ]

// Spread & Insert (for adding to a copied array)
const updateMovies = ['casablanca', ...movies, 'top gun']; // ['casablanca','star wars','harry potter','the godfather','top gun']

// join (creating a string from all elements in an array)
const strMovies = movies.join(', '); // star wars, harry potter, the godfather

// ETC
const moreNumbers = [1, 4, 7, 4, 3];
moreNumbers.indexOf(7); // 2
moreNumbers.lastIndexOf(4); // 3
moreNumbers.reverse(); // [ 3, 4, 7, 4, 1 ]
moreNumbers.sort(); // [ 1, 3, 4, 4, 7 ]

// Set
// A collection of unique items
const list = ['foo', 'bar', 'baz'];
const uniq = new Set(list); // Set(3) { 'foo', 'bar', 'baz' }
