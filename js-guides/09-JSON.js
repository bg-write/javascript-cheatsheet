// JSON
// JavaScript Object Notation

/*
Make sure the type attribute on the script tag is set to module!!

To view consoles in the browser, need to add scrip as module:
<script type="module" src="/js-guides/JSON.js"></script>

in package.json, add "type": "module" under "main": "javascript.js"
Also add "parser: '@babel/eslint-parser'," to .eslintrc.js
*/

// IMPORTING A LOCAL JSON FILE
import myJson from '../data.json' assert { type: 'json' };
console.log(myJson.person);
/* 
{
  name: 'Alice',
  country: 'Austria',
  tasks: [ 'develop', 'design', 'test' ],
  age: 30
}
*/
console.log(myJson.person.name); // Alice
console.log(myJson.person.tasks); // [ 'develop', 'design', 'test' ]
