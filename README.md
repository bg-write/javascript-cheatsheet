# JavaScript Cheatsheet: An Ever-Evolving Beginner's Guide to JS by Brady Gerber

[![GitHub issues](https://img.shields.io/github/issues/bg-write/javascript-cheatsheet?style=flat-square)](https://github.com/bg-write/javascript-cheatsheet/issues)

![JavaScript 101](https://doodleipsum.com/700?bg=D96363&i=2950d197771be2105d7d9a91975907bc)

## JavaScript (JS) in One Minute

JavaScript was created by Netscape in the early '90s as an extension of HTML for Netscape Navigator 2.0 to manipulate HTML documents and form validation. JS is a high-level interpreted language; unlike C or C#, JS needs an "interpreter" aka a web browser or a server like Node.

If HTML is the skeleton that makes up the web and CSS is its skin and makeup, JS is our brain telling it to "do" stuff.

The JS standard is called [ECMAscript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/).

---

## Getting Started

In the `js-guides` folder, you'll find topics divided into different files. I initially wrote this guide as one single .js file but found it easier to read and digest the material by breaking down sections into their own files. This guide is not meant to be deployed.

To add JS to an HTML file:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <!-- ADD YOUR JS SCRIPT TAG HERE -->
        <script defer src="script.js"></script>
    </head>
    <body></body>
</html>
```

## JS Topics Covered

-   Writing Comments
-   Console Log (Writing & Printing)
-   Data Types (Variables, Scope, Date Type Examples)
-   Control Flow (Operators & Flow Statements)
    -   if
    -   if ... else
    -   if ... else ... if
    -   ternary
    -   switch
    -   while
    -   do ... while
    -   for
-   Arrays
-   Functions
-   Objects & Object-Oriented Programming (OOP, "this")
-   The Document Object Model (The DOM)
-   Making API calls (XML HTTP REQUEST, Fetch, Axios)
-   JSON
-   Async/Await & Promises

## JS Topics to Add

-   Event Listeners (to add to the DOM file)
-   Modules
-   Error Handling
-   Hashmap & Hashtable
-   Simple JS solutions to Popular Technical Challenges
    -   Palindrome
    -   Fizzbuzz
    -   Fibonacci
-   Node.js

This guide doesn't include everything to know about JS. It is simply a place to start.

---

## JS Cheatsheet Style Guide

### CSS

There are no CSS files for the sake of simplicity. (A CSS beginner's guide is currently in the works.)

### The Code Itself

This JS guide follows [Google's JS style guide](https://google.github.io/styleguide/jsguide.html) as closely as possible. This involves following [Nethmi Wijesinghe's excellent set-up guide](https://enlear.academy/how-to-set-up-airbnb-style-guide-82413ea6c5f2) for installing ESLint and Prettier in VS Code to match Google's guide in a new project. Nethmi's guide also works if you wish to use another popular style guide (i.e. Airbnb). I also refer to Google's [annotating JavaScript for the Closure Compiler](https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler#return-type-description) repo.

`index.html` is used for `the-doom.js`, `API.js`, and `JSON.js`. `data.json` is used just for `JSON.js`.

### Accessibility

No Lighthouse reports were run due to lack of deployment for this guide.

---

## Want More JS Practice?

Many people enjoy LeetCode, but I think [NeetCode](https://neetcode.io/) and [CodeSignal](https://codesignal.com/) are easier to use and include more approachable coding questions.

---

## Closing Credits

Thank you to my instructors at General Assembly for my first steps into JS. Also shout-out to the many helpful YouTube channels I still refer to: [Traversy Media](https://www.youtube.com/c/TraversyMedia), [Web Dev Simplified](https://www.youtube.com/c/WebDevSimplified), [The Net Ninja](https://www.youtube.com/c/TheNetNinja), [Programming with Mosh](https://www.youtube.com/c/programmingwithmosh), and [Fireship](https://www.youtube.com/watch?v=lkIFF4maKMU).

© 2023 Brady Gerber. All Rights Reserved.
