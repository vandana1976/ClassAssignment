//const moment = require('moment');
// const mocha = require('mocha');
// //const file = require('../file.js');
// //const assert = require('chai').assert;



// console.log("my new application just ran");


const Moment = require('moment');
const Request = require('request-promise');

function logResponse(resp){
    console.log(resp, new Moment().format("h:mm:ss a"));
}

let id = setInterval(function(){
    Request('http://jsonplaceholder.typicode.com/posts/3').then(logResponse)
}, 3000)

setTimeout(function(){
    clearInterval(id)
}, 12500)


console.log("tough luck kiddo");
