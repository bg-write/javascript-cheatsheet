// JS's Event Loop
// The browser (or node) is always running in a "loop." First we run all our synchronous code to run now, and then our asynchronous code to run later when we're ready. When we're done, we "callback" all our data.

// CALLBACK FUNCTION
// this console won't log until 5000ms go by
// we're queuing this up for the NEXT event loop
setTimeout(() => {
    console.log('5 seconds in the future');
}, 5000);

// PROMISES
// A "Promise" is a wrapper for a value that is unknown RIGHT NOW but will "resolve" itself in the future
// i.e. calling a 3rd party API ... we don't know how long this will actually take
// One of two things can happy: the promise can be "resolved," or "rejected"!
const promise = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve('success!');
    } else {
        reject('fail!');
    }
});

// THEN & CATCH
// When a promise is fulfilled, THEN we can do more work with it ...
// ... but we also need to CATCH any errors
// our param is coming from either our "resolve" or "reject"
promise
    .then((message) => {
        console.log('And THEN this happened: ' + message);
    })
    .catch((error) => {
        console.log('But we CAUGHT this error: ' + error);
    });

// ASYNC & AWAIT
// How we can make Promises even easier to work with!
// First, you need a function that is "Awaiting" to be used at some point ... and we have to add "async" in front of the overall function and "await" in front of the other function to kick off this process
// We'll practice with axios and two APIs: https://www.boredapi.com/api/activity & https://httpstat.us/500
import axios from 'axios';

async function getActivity() {
    try {
        let response = await axios.get('https://www.boredapi.com/api/activity');
        console.log(`You could ${response.data.activity}`);
    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
}

getActivity(); // we'll await for our response when it's ready
