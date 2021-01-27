'use strict';
const HTTP = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3333;

const express = require('express');
const app = express(); //<--Calling express

// Before we create our server, we need to tell the server how to use the templates.
const es6Renderer = require('express-es6-template-engine');
// Tell the app to use the template engine.
// It takes two arguments: the file type and how to use it/where to pass it...
app.engine('html', es6Renderer);//<---This line sets the engine
// Tell the app where the views will be/what folder: we will have a templates folder!
app.set('views', 'templates');
// Tell the app what type of files to look for in the folder. 
app.set('view engine', 'html');//<---This line calls the engine

const SERVER = HTTP.createServer(app);
SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});

const rootController = require('./routes/index');
const friendsController = require('./routes/friends');

app.use('/', rootController);
app.use('/friends', friendsController);

