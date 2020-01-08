const express = require('express');
const mysql = require('mysql');

const app = express();

const con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  connectionLimit: 10
});

con.connect(function (err) {
  if (err)
    throw err;
  console.log("Database Connected !");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err)
      throw err;
    console.log("Database created");
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000! Go to: http://localhost:8000')
});
