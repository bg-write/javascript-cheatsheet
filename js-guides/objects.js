//  OBJECTS: Collections of zero or more properties of key: value pairs.

// CREATING OBJECTS (Object literal notation, or initializer)
const game = {
    title: 'zelda',
    price: 59,
    genre: 'RPG',
};

// ADDING
game.year = 2023;

// DELETING
delete game.year;

// ACCESSING
game['title']; // zelda

// ITERATION
for (const key in game) {
    if (game.hasOwnProperty(key)) {
        console.log(`${key}: ${game[key]}`);
    }
}
/*
title: zelda
price: 59
genre: RPG
*/

Object.values(game).forEach(function (val) {
    console.log(val);
});
/*
zelda
59
RPG
*/

// CLASSES
// Another way to make objects via OOP
// It's like building a car that we can then reuse

// CREATING THE CLASS (AND A NEW OBJECT)
/** Creating our Vehicle class */
class Vehicle {
    /**
     * @param {string} vin
     * @param {string} make
     * @param {string} model
     */
    constructor(vin, make, model) {
        this.vin = vin;
        this.make = make;
        this.model = model;
        this.running = false;
    }
    /** Turns "running" true */
    start() {
        this.running = true;
        console.log('running ...');
    }
}

const plane = new Vehicle('X123Y', 'Boeing', 'New Model');
/* Vehicle {
  vin: 'X123Y',
  make: 'Boeing',
  model: 'New Model',
  running: false
}
*/
plane.start(); // running ...

// "this"
// A JS keyword that refers to an object, yet determined by how a function is called. "this" can be:

// the object (in an object method)
const person = {
    firstName: 'John',
    lastName: 'Doe',
    id: 5566,
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
        // "this" refers to "person"
    },
};

// the global object (alone or in a function)
let x = this; // [global window]

function myFunction() {
    return this; // [global window]
}

// undefined (in a function in strict mode)
('use strict');
function myFunction() {
    return this; // undefined
}

// the element receiving the event (in an event handler)
<button onclick="this.style.display='none'">Click to Remove Me!</button>;
// "this" is <button/>

// The "bind()" method can set a function's "this" regardless of how it's called, but be careful.

// Arrow functions do NOT provide their own "this" binding
