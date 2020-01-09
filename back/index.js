const express = require('express');
const mysql = require('mysql');



const app = express();

app.get('/', () => {
  console.log("lqjsgdsd");
});

app.listen(8000, 'localhost', () => {
  console.log('Example app listening on port 8000! Go to: http://localhost:8000')
});
