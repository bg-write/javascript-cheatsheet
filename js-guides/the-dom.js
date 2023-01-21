// ** THIS GUIDE USES INDEX.HTML TO PRACTICE DOM MANIPULATION
// To see this work in real-time, right-click on "index.html" and click on "Open with Live Server"
// Here, DevTools is your friend! To see console log outputs, instead of calling node in the terminal, open the console on the web browser running on your live server

// THE DOCUMENT OBJECT MODEL (The DOM)
// The in-memory representation of a browser's web document
// A tree-like data structure with the top (root) being the document object

// SELECTING DOM ELEMENTS
const title = document.getElementById('title'); // h1#title.main-title
const cool = document.querySelector('.cool'); // p.cool
const comments = document.querySelectorAll('.comment'); // [li.comment, li.comment, li.comment]

// CHANGING
cool.textContent = 'Comments for Today';
cool.innerHTML = 'Comments for <strong>Today</strong>';

// ATTRIBUTES
title.getAttribute('class'); // main-title
title.setAttribute('name', 'title'); // <h1 id="title" class="main-title" name="title" style="text-align: center;">DOM Practice</h1>
title.hasAttribute('name'); // true

// EVENT LISTENERS
