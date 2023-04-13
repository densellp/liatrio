'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.status(200);  
  res.json({ 
        "message": "My name is Eesha Gadhia", 
        "timestamp" : new Date()
    });
    
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`); //ask which host/port this endpoint should interact with
});

