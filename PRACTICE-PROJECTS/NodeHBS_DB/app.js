const express = require('express');
const hbs = require('hbs');
const path = require('path');
const dbConnect = require('./src/db/conn.js');

const app = express();
app.listen(3000);

const static_path = path.join(__dirname, './public/css');
app.use(express.static(static_path));

const template_path = path.join(__dirname, './templates/views');
app.set('views', template_path);

const partials_path = path.join(__dirname, './templates/partials');
hbs.registerPartials(partials_path);

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // res.send('output of node js ..........');
    res.render('index');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/login', (req, res) => {
    res.render('login');
});

// 1. The app.set() function is used to assigns the setting name to value. 
// You may store any value that you want, but certain names can be used to 
// configure the behavior of the server.
// app.set(name, value)

// 2. The Path Module in NodeJS provides the utilities for working with 
// file and directory paths. The Complete List of Path are listed below:
// -- Node.js path.basename() Method
// -- Node.js path.delimiter Property
// -- Node.js path.dirname() Method
// -- Node.js path.extname() Method
// -- Node.js path.format() Method
// -- Node.js path.isAbsolute() Method
// -- Node.js path.join() Method
// -- Node.js path.normalize() Method
// -- Node.js path.parse() Method
// -- Node.js path.relative() Method
// -- Node.js path.resolve() Method
// -- Node.js path.toNamespacedPath() Method
// to include (path) module use (require('path')) statement to (app.js) file

// 2. Handlebars.js is a templating engine similar to the ejs module in node.js, 
// but more powerful and simple to use. It ensures minimum templating and is a 
// logicless engine that keeps the view and the code separated. 
// It can be used with express as the hbs module, available through npm. 
// HandleBars can be used to render web pages to the client side from data on 
// the server-side.

// install hbs (npm install hbs)
// after installing (hbs) use (require('hbs')) to connected the (hbs) module to use
// its (methods and properties)

// Now, we need to change the default view engine.
// so, app.set('view engine', 'hbs')

// In case the views directory is undesirable, can change the viewpath by 
// app.set('views', <pathname>)

// Now, we render our webpage through express to the local server.
// app.get('/', (req, res)=>{ res.render('demo') })

// To use handlebars in express, we need to store HTML code into a .hbs extension 
// in the ‘views’ folder in the source directory as hbs looks for the pages in the 
// views folder.
// The first thing we need to do in index.js file is to require the hbs module

// Now let us create a demo.hbs file in our views directory with the following content
// <!DOCTYPE html>
// <html>
    // <body>
        // <p>This is a Demo Page on localhost!</p>
    // </body>
// </html>

// Node.js | NPM (Node Package Manager)
// 
