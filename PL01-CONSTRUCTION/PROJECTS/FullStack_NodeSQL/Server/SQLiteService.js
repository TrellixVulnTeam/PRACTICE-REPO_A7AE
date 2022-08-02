// in project directory 
// 1. install mysql and node framework (express) -> npm install sqlite3
// 2. install nodemon (as global) -> npm install -g nodemon (if not installed
// 3. create a (js) file in project directory, not in (node_modules) 
// 4. now start coding 
const sqlite = require('sqlite3').verbose();
let query = null;

// connect database
const db = new sqlite.Database('./test.db', sqlite.OPEN_READWRITE, (err) => {
    if(err) return console.error(err.message);
});

// create table 
// query = 'CREATE TABLE library(id INTEGER PRIMARY KEY, category, department, subject, reference, author, edition, pages, link)';
// db.run(query, (err) => {
//     if(err) return console.error(err.message);
// });

// drop table 
// db.run('DROP TABLE library');

// insert data into table 
// query = 'INSERT INTO library(category, department, subject, reference, author, edition, pages, link) VALUES(?,?,?,?,?,?,?,?)';
// db.run(query, ['ENGG-1', 'Physics', 'Mechanics and Properties of Matter', 'Elements of Properties of Matter', 'D. S. Mathur', '2ND - 1962', '651', 'D. S. Mathur--Elements of properties of matter'], (err) => {
//     if(err) return console.error(err.message);
// });

// update data
// query = 'UPDATE library SET edition = ? WHERE id = ?';
// db.run(query, ['2Ed - 1962', 2], (err) => {
//     if(err) return console.error(err.message)
// });

// delete data
// query = 'DELETE FROM library WHERE id = ?';
// db.run(query, [2], (err) => {
//     if(err) return console.error(err.message)
// });

// select query
query = 'SELECT * FROM library';
db.all(query, [], (err, rows) => {
    if(err) return console.error(err.message);
    rows.forEach((row) => {
        console.log(row);
    });
});

// ======================================================
// 1. sqlite3 packages for nodeJS
// 2. verbose() method
// 3. Database() method
// 4. run() method
// 5. all() method
// ======================================================

// 1. In this article, we are going to see how to connect the sqlite3 database 
// -- using nodejs. So for this, we are going to use the Database function which 
// -- is available in sqlite3.
// -- SQLite is a self-contained, high-reliability, embedded, full-featured, 
// -- public-domain, SQL database engine. It is the most used database engine 
// -- in the world. It is an in-process library and its code is publicly available.
// --  It is free for use for any purpose, commercial or private. It is basically 
// -- an embedded SQL database engine. Ordinary disk files can be easily read and 
// -- written by SQLite because it does not have any separate server like SQL. 
// -- The SQLite database file format is cross-platform so that anyone can easily 
// -- copy a database between 32-bit and 64-bit systems. Due to all these features,
// -- it is a popular choice as an Application File Format.
// -- Let’s understand How to connect sqlite3 database using node.js. 
// -- Below is the step by step implementation:

// -- to connect sqlite modules to application use (require('sqlite3')) 
// -- and it is required to use any (methods and properties) of (sqlite) modules
// -- like 
// -- database()
// -- run()
// -- all()