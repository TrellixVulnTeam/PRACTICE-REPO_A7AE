const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    prot: '3306'
});

db.connect((err) => {
    if(err) console.log(err.message);
    else console.log('db is connected .......');
});