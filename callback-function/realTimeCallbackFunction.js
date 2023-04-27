/**
 * Real time use callback function fetch npm package.
 * fetch is a built-in JavaScript method for making asynchronous HTTP requests to a server. 
 * It can be used in both the browser and Node.js environments.
 */

const fetchUrl = require("fetch").fetchUrl;

fetchUrl("https://api.github.com/users/github", function(err, met, body){
    console.log(body.toString());
})