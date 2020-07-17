#!/usr/bin/env node

const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port = 3000;

app.use(fileUpload({
    createParentPath: true
}));

const routes = require('./app/routes');

app.use('/', routes);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});