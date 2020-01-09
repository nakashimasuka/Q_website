let express = require('express');
let mysql = require('mysql');

let app = express();

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sampleDB'
});

connection.connect(function(err) {
    if (err) {
	throw err;
    } else {
	console.log('Connected!');
    }
});

app.get('/', function(req, res) {
    connection.query("SELECT * FROM sampleDB", function(err, rows, fields) {
	if (err)
	    throw('error');
	else
	    console.log('sucess query');
    });
});

app.listen(1337);
