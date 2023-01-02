// APIs
// Using Star Wars API as our example
// https://swapi.dev/api/people/

// XML HTTP REQUEST (old method)
// NOTE: This only works in the browser (aka need to add this script into the HTML, can't work with Node) and is depreciated
/*
const request = new XMLHttpRequest();
request.open('GET', 'https://swapi.dev/api/people/');
request.send();
request.onload = () => {
    console.log(JSON.parse(request.response));
};
*/

// FETCH API
// Uses Async and Promises to return an object with a single value - we either get a Response or Error
// Works in the browser and Node
fetch('https://swapi.dev/api/people/')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });

// AXIOS
// https://axios-http.com/
// Open-sourced, works on both browser and Node, returns promises like Fetch API
// requires adding the following script:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Also need to import it "import axios from 'axios" and do "> npm i axios"
const axios = require('axios').default;
axios
    .get('https://swapi.dev/api/people/')
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });

/**
 * Example of Axios w/ async/await
 */
async function getPeople() {
    try {
        const response = await axios.get('https://swapi.dev/api/people/');
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}
getPeople();
