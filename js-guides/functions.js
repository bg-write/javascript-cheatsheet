// FUNCTION: a reusable block of code performing one action

/**
 * return points score based on elapsed time
 * @param {number} elapsedTime
 * @return {number} points scored
 */
function getPointsScored(elapsedTime) {
    if (elapsedTime < 30) {
        return 100;
    } else if (elapsedTime < 60) {
        return 75;
    } else {
        return 25;
    }
}
const points = getPointsScored(50); // 75

// WAYS TO DECLARE FUNCTIONS
/**
 * Function Declaration (hoisted to the top of their scope)
 * @param {string} name
 */
function sayHello(name) {
    console.log('Hello ' + name + '!');
}
sayHello('brady'); // Hello brady!

/**
 * Function Expression (can't be invoked before being defined)
 * @param {string} name
 */
const sayHi = function (name) {
    console.log('Hi ' + name + '!');
};
sayHi('brady'); // Hi brady!

/**
 * Arrow Function (implicit return of a single expression)
 * A single rule for binding "this"
 * @param {number} a
 * @param {number} b
 * @return {number} addition of a and b
 */
const add = (a, b) => a + b;
add(2, 2); // 4
