'use strict';

const express = require('express');

const router = require('./api');

const app = express();

require('./database');

app.use('/', express.static('public'));

app.use('/api', router);

app.listen(3000, ()=>{
  console.log("The server is listening on port 3000!");
})
