const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

let instance = null;

// database connection 
const connection = mysql.createConnection({
    user: process.env.USER,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    } else console.log(connection.state);
});

// class DbCreate {
//     // Create Database
//     app.get('/createdb', (req, res) => {
//         let sql = 'CREATE DATABASE nodeSQL';
//         db.query(sql, (err, result) => {
//             if(err) throw err;
//             console.log(result);
//             res.send('Database is created .........');
//         });
//     });

//     // Create Table 
//     app.get('/createTable', (req, res) => {
//         let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(50), body VARCHAR(100), PRIMARY KEY(id))';
//         db.query(sql, (err, result) => {
//             if(err) throw err;
//             console.log(result);
//             res.send('Posts table is created .......');
//         });
//     });
// }

class DbService {
    // create instance to server
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    // show all data
    async getAllData(name) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = 'SELECT * FROM books';
                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                });
            });

            // console.log(response);
            return response;
        } catch(error) {
            console.log(error);
        }
    }

     // show specific data (search) 
     async searchByName(name) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = 'SELECT * FROM books WHERE name=?';
                connection.query(query, [name], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                });
            });

            return response;
        } catch(error) {
            console.log(error);
            return false;
        }
    }

    // add data
    async insertNewName(name) {
        try {
            const dateAdded = new Date();
            const insertId = await new Promise((resolve, reject) => {
                const query = 'INSERT INTO books(name, date) VALUES(?,?)';
                connection.query(query, [name, dateAdded], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result);
                });
            });

            // return insertId;

            // for live update -- (no effect on live server)
            // return {
            //     id: insertId,
            //     name: name,
            //     date: dateAdded
            // };

            return insertId === 1 ? true : false
        } catch (error) {
            console.log(error);
        }
    }
    
    // delete data
    async deleteRowById(id) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = 'DELETE FROM books WHERE id = ?';
                connection.query(query, [id], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result);
                });
            });

            return response === 1 ? true : false            
        } catch (error) {
            console.log(error);
            return false
        }
    }

    // update data
    async updateNameById(id, name) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = 'UPDATE books SET name = ? WHERE id = ?';
                connection.query(query, [name, id], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result);
                })
            });

            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

module.exports = DbService;

// ======================================================
// > the (app.get()) method can be used to all database operation, like - 
// > create database | create table | INSERT | SELECT | UPDATE | DELETE

// ======================================================
// 1. mysql packages of nodeJS
// 2. createConnection() function 
// 3. connect() function 
// 4. query() function 
// 5. await new Promise() function 
// 6. module.exports
// ======================================================

// 1. Node.js Connect Mysql with Node app
// -- NodeJs: An open-source platform for executing javascript code on the server 
// -- side. Also a javascript runtime built on Chrome’s V8 JavaScript engine. 
// -- It can be downloaded from here
// -- Mysql: An open source Relational Database Management System (RDBMS) 
// -- that uses Structured Query Language (SQL). It is the most popular language 
// -- for adding, accessing and managing content in a database. Here we will use 
// -- the Mysql as a database for our node application. 

// -- -- after installing node and mysql
// -- Modules/packages need to be installed for connecting node apps to Mysql
// -- create project directory 
// -- in project directory (npm init) to create (package.json) file 
// -- now install mysql modules/packages for node (npm install mysql) 

// -- the (require('mysql')) method is used at first in project (file.js) to 
// -- use any mysql (methods or properties), like - 
// -- -- createConnection() 
// -- -- connect() 
// -- -- query()

// 2. Node.js require Module
// -- Each JavaScript file is treated as a separate module in NodeJS. 
// -- It uses commonJS module system : require(), exports and module.export.
// -- The main object exported by require() module is a function.  
// -- When Node invokes that require() function with a file path as the 
// -- function’s only argument, Node goes through the following sequence of steps:
// -- -- Resolving and Loading
// -- -- Wrapping
// -- -- Execution
// -- -- Returning Exports
// -- -- Caching

// -- -> Resolving and Loading: In this step, Nodes decide which module to load 
// -- core module or developer module or 3rd-party module using the following 
// -- steps:
// -- -- When require function receive the module name as its input, 
// -- It first tries to load core module.
// -- -- If path in require function begins with ‘./’ or ‘../’ It will try to 
// -- load developer module.
// -- -- If no file is find, it will try to find folder with index.js in it .
// -- -- Else it will go to node_modules/ and try to load module from here .
// -- -- If file is still not found , then an error is thrown .

// -- -- Wrapping:once the module is loaded , the module code is wrapped in a 
// -- special function which will give access to a couple of objects.

// -- -- Execution: In this part, the code of the module or code inside the 
// -- wrapper function run by the NodeJS runtime.
// -- -- Returning Exports: In this part, require function return the exports 
// -- of required module. These exports are stored in module.exports.
// -- Use module.exports to export single variable/class/function. 
// -- If you want to export multiple function or variables use exports 
// -- ( exports.add = (a,b)=>a+b ).

// -- -- Caching: At the end all modules are cached after the first time they 
// -- are loaded e.g. If you require the same module multiple times, 
// -- you will get the same result. So the code and modules are executed in the 
// -- first call and in a subsequent call, results are retrieved from the cache.

// 3. Node.js Export Module
// -- The module.exports in Node.js is used to export any literal, 
// -- function or object as a module. It is used to include JavaScript 
// -- file into node.js applications. 
// -- The module is similar to variable that is used to represent the current 
// -- module and exports is an object that is exposed as a module.

// 4. await new Promise() function