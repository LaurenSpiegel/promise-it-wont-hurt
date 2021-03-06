// Let's do several operations against "remote" machines

// Sending and fetching data from computers/processes other than your 
// application is an increasingly common task in the world of node.js
// and the browser.  Many times, you will need to gather data from 
// several sources, perform operations on it, and send some data back out.

// Task

// Let's talk to two remote processes over HTTP being run by your friend
// and mine, "localhost"

// Port 7000: Faux session cache (redis or some such thing) 
// Port 7001: Faux database (mongo, level, postgres etc)

// As in the previous lesson, use the "q-io" module to create promises
// as wrappers for HTTP responses.  HINT: You will probably need more than
// one promise...

// 1. Send an HTTP GET request to the session cache on port 7000.  A JSON payload
//    will be returned to you containing a primary key called "id".  
// 2. Grab that id from the session response and send an HTTP GET request to 
//    your database on port 7001 to the url "localhost:70001/<id>".
// 3. If successfully done, your database will return a user object.  console.log 
//    it to win many nerd-points.

// Hint
// Don't forget that q-io's read method returns a buffer.  You will need to convert
// it to a string and JSON.parse it to complete this lesson!


var http = require('q-io/http');

http.read('http://localhost:7000/')
  .then(function(responseObject){
    return http.read('http://localhost:7001/' + responseObject)
  })
  .then(function(json){
    console.log(JSON.parse(json));
  })
    


    // Here's what the official solution is if you want to compare notes:

    // -----------------------------------------------------------------


    //       var qhttp = require('q-io/http');
        
    //       qhttp.read("http://localhost:7000/")
    //       .then(function (id) {
    //         return qhttp.read("http://localhost:7001/" + id);
    //       })
    //       .then(function (json) {
    //         console.log(JSON.parse(json));
    //       })
    //       .then(null, console.error)
    //       .done();