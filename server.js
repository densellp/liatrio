'use strict';

const express = require('express');

// Constants
const PORT = 80;

// App
const app = express();

app.get('/', (req, res) => {
  res.json({
    "message": "My name is Eesha Gadhia", 
    "timestamp" : Date.now()
  });
});

// demo comment
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`); 
});

