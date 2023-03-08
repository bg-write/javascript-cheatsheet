/*
Palindrome
Check if a string is spelled the same both forward and backward, ignoring case and non-alphanumeric characters (punctuation, spaces, symbols)
*/
function palindrome(str) {
    // regex: match any non-alphanumeric characters
    // https://regex101.com/
    let str_clean = str.toLowerCase().replace(/[\W_]/g, '');
    let str_clean_reverse = str_clean.split('').reverse().join('');
    return str_clean === str_clean_reverse;
}
palindrome('rac@eCar'); // true

/*
FizzBuzz
Write a program that prints any range of numbers. For multiples of three, print "Fizz" instead of the number. For multiples of five, print "Buzz." For numbers that are multiples of both three and five, print "FizzBuzz."
*/
function fizzBuzz(numLow, numHigh) {
    for (var i = numLow; i <= numHigh; i++) {
        let n = '';
        if (i % 3 == 0) n += 'Fizz';
        if (i % 5 == 0) n += 'Buzz';
        console.log(n || i);
    }
}
fizzBuzz(1, 15);

/*
Fibonacci
Using recursion, find the nth element within the Fibonacci Sequence
*/
function fibonacci(n) {
    if (n < 2) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
fibonacci(0); // 0
fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(5); // 5
fibonacci(6); // 8
