const express = require('express');
const app = express();
const path = require('path');

const contact = require('./contact-us');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/contact-us', contact);


// Redirect users to a 404 page
