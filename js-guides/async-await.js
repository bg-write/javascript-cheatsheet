// *JAVASCRIPT'S EVENT LOOP
// The browser (or node) always runs in a "loop"
// First we execute all our synchronous code to run now on our "call stack" (last in, first out)
// Then we execute our asynchronous code to run later, when it's ready to "call back" to our call stack
// JavaScript can only process one thing at a time (it's single threaded), thus we have sync vs async

// *CALLBACK FUNCTIONS
// This console WON'T log until 5000ms (5 seconds) go by
// We're queuing up this function NOW to run LATER in the next event loop (once 5s has passed)
setTimeout(() => {
    console.log('5 seconds has gone by, BOOM');
}, 5000);

// *PROMISES (w/ THEN & CATCH)
// A "Promise" is a wrapper for a value unknown to us NOW but will "resolve" itself in the future
// i.e. calling a 3rd party API ... we don't know how long this will actually take!
// When a promise is fulfilled, THEN we can do more work with our response, or CATCH any errors
// Helpful API for successes: https://www.boredapi.com/api/activity
// Helpful API for errors: https://httpstat.us/404

import axios from 'axios'; // npm i axios

axios

    .get('https://www.boredapi.com/api/activity')

    .then((response) => {
        console.log(`A PROMISE: You could ${response.data.activity}`); // our Promise resolves!
    })

    .catch((error) => {
        console.log(`A PROMISE ERROR: ${error}`); // our Promise is rejected!
    });

console.log(
    'This console was written after our Promise, but it will run before our then/catch.'
);

// *ASYNC & AWAIT
// Promises, but easier!
// We need to write an "Async" function that is "Awaiting" to be used at some point ...
// We have to add "async" in front of the overall function
// We also have to add "await" in front of what we're specifically waiting for
async function getActivity() {
    try {
        let response = await axios.get('https://www.boredapi.com/api/activity');

        console.log(`AN ASYNC/AWAIT: You could ${response.data.activity}`);
    } catch (error) {
        console.log(`AN ASYNC/AWAIT ERROR: ${error}`);
    }
}

getActivity(); // we'll AWAIT for our ASYNC function to run when it's ready

console.log(
    'Again, this console was written after our Async/Await, but it runs before the response.'
);

/*
Nice visuals and explanations of JS's event loop, promises, and async/await:
https://www.youtube.com/watch?v=lqLSNG_79lI
https://dev.to/nodedoctors/an-animated-guide-to-nodejs-event-loop-3g62
https://www.youtube.com/watch?v=li7FzDHYZpc
https://axios-http.com/docs/intro
*/
