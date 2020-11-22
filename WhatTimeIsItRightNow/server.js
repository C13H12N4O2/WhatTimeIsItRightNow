const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = __dirname + '/app/views/';
const app = express();

var corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(express.static(path));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    response.sendFile(path + 'index.html');
});

require('./app/routes/WhatTimeIsItRightNow.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
