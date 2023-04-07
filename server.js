'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
    res.json({
        "message": "Greetings! My name is Eesha Gadhia", 
    });
});

app.listen(PORT, () => {
  console.log(`Hello world app listening on port ${PORT}`); //ask which host/port this endpoint should interact with
});

