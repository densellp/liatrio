'use strict';

//var http = require('http'); //used for http?

const express = require('express');

// Constants
const PORT = 80;
//const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.json({
    "message": "My name is Eesha Gadhia", 
    "timestamp" : Date.now()
  });
});

/*
var app = http.createServer(function(req,res){
  res.setHeader('Content-Type', 'application/json');
  res.json({
    "message": "My name is Eesha Gadhia", 
    "timestamp" : Date.now()
  });
});
*/

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`); 
});

