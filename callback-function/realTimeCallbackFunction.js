/**
 * Real time use callback function fetch npm package.
 * fetch is a built-in JavaScript method for making asynchronous HTTP requests to a server. 
 * It can be used in both the browser and Node.js environments.
 */

const fetchUrl = require("fetch").fetchUrl;

fetchUrl("https://api.github.com/users/github", function(err, met, body){
    console.log(body.toString());
})
//This code is using the "fetch" module to make a request to the GitHub API endpoint for the user "github".
// The fetchUrl() function takes two arguments: the URL to fetch, 
// and a callback function that will be called when the response is received.
// The callback function takes three arguments: an error object (if there is an error),
//  a metadata object containing information about the response, and the response body.
// In this case, the callback function logs the response body to the console after converting it to a string with the toString() method.
// So in summary, the code fetches data from the GitHub API for the user "github" and logs the response body to the console.