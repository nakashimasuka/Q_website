const express = require('express');
const mysql = require('mysql');

const app = express();

require('./config')(app);
/* add the routes that the app will react to (see routes.js)*/
require('./routes')(app);

app.listen(8000, 'localhost', () => {
  console.log('Example app listening on port 8000! Go to: http://localhost:8000')
});
