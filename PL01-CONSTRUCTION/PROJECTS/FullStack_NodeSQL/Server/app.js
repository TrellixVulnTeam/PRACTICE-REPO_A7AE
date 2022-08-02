const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbService = require('./dbService');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// read all data from database
app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();
    const result = db.getAllData();
    
    result
    .then(data => response.json({data: data}))
    .catch(err => console.log(err));

    // for understanding the concept
    // console.log(result);
    // console.log(db.getAllData());
    // console.log(data => response.json({data: data}))
    // db.getAllData().then(data => response.json({data: data}));
    // end check

    // response.json({
    //     success: true
    // });
});

// read specific data from database (search) 
app.get('/search/:name', (request, response) => {
    const { name } = request.params;
    const db = dbService.getDbServiceInstance();
    const result = db.searchByName(name);

    result
    .then(data => response.json({data: data}))
    .catch(err => console.log(err));
});

// post data to database
app.post('/insert', (request, response) => {
    const { name } = request.body;
    const db = dbService.getDbServiceInstance();
    const result = db.insertNewName(name);
    
    result
    .then(data => response.json({ success: true }))
    // .then(data => response.json({ data: data }))    // for live update -- (no effect on liver server)
    .catch(err => console.log(err));
});

// delete from database
app.delete('/delete/:id', (request, response) => {
    const { id } = request.params;
    const db = dbService.getDbServiceInstance();
    const result = db.deleteRowById(id);

    result
    .then(data => response.json({success: true}))
    .catch(err => console.log(err));
});

// update data of database
app.patch('/update', (request, response) => {
    const { id, name } = request.body;
    const db = dbService.getDbServiceInstance();
    const result = db.updateNameById(id, name);

    result
    .then(data => response.json({success: true}))
    .catch(err => console.log(err));
});

app.listen(process.env.PORT, () => console.log('app is running ...'));
// ======================================================
// 1. Express framework
// 2. CORS package of nodeJS
// 3. Dotenv package
// 4. require() function 
// 5. express.json() function
// 6. express.urlencoded() function 
// 7. app.use() function 
// 8. app.listen() function 
// 9. app.get() function 
// 10. app.post() function 
// 11. app.delete() function 
// 12. app.patch() function 

// 1. introduction to express
// 2. nodeJS vs. expressJS
// 3. request.send() method
// 
// ======================================================
// 1. EXPRESS is a Fast, un-opinionated, minimalist web framework for node.
// -- This is a Node.js module available through the npm registry.
// -- If this is a brand new project, make sure to create a package.json 
// -- -- first with the npm init command.
// -- Features
// -- -- Robust routing
// -- -- Focus on high performance
// -- -- Super-high test coverage
// -- -- HTTP helpers (redirection, caching, etc)
// -- -- View system supporting 14+ template engines
// -- -- Content negotiation
// -- -- Executable for generating applications quickly
// -- Routing refers to how an app’s end-points (URIs) respond to client requests

// Express.js is a small framework that works on top of Node.js web server 
// -- functionality to simplify its APIs and add helpful new features. 
// -- It makes it easier to organize your application’s functionality with 
// -- middleware and routing. It adds helpful utilities to Node.js HTTP objects 
// -- and facilitates the rendering of dynamic HTTP objects.
// -- Why Express ?
// -- -- Develops Node.js web applications quickly and easily.
// -- -- It’s simple to set up and personalise.
// -- -- Allows you to define application routes using HTTP methods and URLs.
// -- -- Includes a number of middleware modules that can be used to execute 
// -- additional requests and responses activities.
// -- -- Simple to interface with a variety of template engines, including Jade,
// -- -- Vash, and EJS. Allows you to specify a middleware for handling errors.

// 2. CORS is a node.js package for providing a Connect/Express middleware 
// -- that can be used to enable CORS with various option
// -- Usage
// -- -- Simple Usage
// -- -- Enable CORS for a Single Route
// -- -- Configuring CORS
// -- -- Configuring CORS Asynchronously
// -- -- Enabling CORS Pre-Flight

// 3. Dotenv is a zero-dependency module that loads environment variables 
// -- from a .env file into process.env. Storing configuration in the environment 
// -- separate from code is based on The Twelve-Factor App methodology.

// 4. The express.json() function is a built-in middleware function in Express. 
// -- It parses incoming requests with JSON payloads and is based on body-parser.
// -- express.json( [options] )
// -- Parameters: The options parameter have various property like 
// -- inflate, limit, type, etc.
// -- Return Value: It returns an Object.

// 5. The express.urlencoded() function is a built-in middleware function 
// .. in Express. It parses incoming requests with urlencoded payloads and 
// -- is based on body-parser.
// -- express.urlencoded( [options] )
// -- Parameter: The options parameter contains various property like extended, 
// -- inflate, limit, verify etc.
// -- Return Value: It returns an Object.

// 6. The app.use() function is used to mount the specified middleware function(s) 
// -- at the path which is being specified. It is mostly used to set up middleware
// -- for your application.
// -- app.use(path, callback)
// -- Parameters:
// -- -- path: It is the path for which the middleware function is being called. 
// -- -- It can be a string representing a path or path pattern or 
// -- -- regular expression pattern to match the paths.
// -- -- callback: It is a middleware function or a series/array 
// -- -- of middleware functions.

// 7. The app.listen() function is used to bind and listen the connections on the 
// -- specified host and port. This method is identical to Node’s 
// -- http.Server.listen() method. If the port number is omitted or is 0, 
// -- the operating system will assign an arbitrary unused port, 
// -- which is useful for cases like automated tasks (tests, etc.).
// -- The app returned by express() is in fact a JavaScript function, 
// -- designed to be passed to Node’s HTTP servers as a callback to handle requests
// -- This makes it easy to provide both HTTP and HTTPS versions of your app with 
// -- the same code base, as the app does not inherit from these 
// -- (it is simply a callback).
// -- app.listen([port[, host[, backlog]]][, callback])
// -- Explanation of the syntax:
// -- -- (Optional) It specifies the port on which we want our app to listen.
// -- -- (Optional) It specifies the IP Address of the host on which we want 
// -- -- our app to listen. You can specify the host if and only if you have 
// -- -- already specified the port. ( since you have a closing(‘]’) bracket after 
// -- -- ([, host[, backlog]]) as you can see in above syntax, so this means port 
// -- -- must be specified before specifying host and backlog).
// -- -- (Optional) It specifies the max length of queue of pending connections. 
// -- -- You can specify the backlog if and only if you have already specifies port
// -- -- and host.( since you have a closing bracket after ([, backlog]), 
// -- -- so this means you will have to specify host before specifying backlogs)
// -- -- (Optional) It specifies a function that will get executed, 
// -- -- once your app starts listening to specified port. 
// -- -- You can specify callback alone i.e., without specifying port, 
// -- -- host and backlogs.( since this is a separate set of arguments in opening 
// -- -- and closing brackets([, callback]) ,this means you can specify these 
// -- -- arguments without specifying the argument of previous opening and 
// -- -- closing square brackets.

// 8. The app.get() function routes the HTTP GET Requests to the path 
// -- which is being specified with the specified callback functions. 
// -- Basically it is intended for binding the middleware to your application.
// -- app.get( path, callback )
// -- Parameters: 
// -- -- path: It is the path for which the middleware function is being called. 
// -- -- callback: They can be a middleware function or series/array of 
// -- middleware functions. 

// 9. The res.send() function basically sends the HTTP response. 
// -- body parameter can be a String or a Buffer object or an object or an Array.
// -- res.send( [body] )
// -- Parameter: This function accepts a single parameter body that describe 
// -- the body which is to be sent in the response.
// -- Returns: It returns an Object.

// 10. The app.post() function routes the HTTP POST requests to the specified 
// -- path with the specified callback functions.
// -- app.post(path, callback [, callback ...])
// -- Arguments:
// -- -- Path: The path for which the middleware function is invoked and 
// -- can be any of:
// -- -- A string representing a path.
// -- -- A path pattern.
// -- -- A regular expression pattern to match paths.
// -- -- An array of combinations of any of the above.
// -- Callback: Callback functions can be:
// -- -- A middleware function.
// -- -- A series of middleware functions (separated by commas).
// -- -- An array of middleware functions.
// -- -- A combination of all of the above.

// 11. The app.delete() function is used to route the HTTP DELETE requests 
// -- to the path which is specified as parameter with the callback functions 
// -- being passed as parameter.
// -- app.delete(path, callback)
// -- Parameters: 
// -- -- path: It is the path for which the middleware function is being called.
// -- -- callback: It is a middleware function or a series/array of middleware 
// -- --functions. 

// EXPRESS 
// -- Express is a small framework that sits on top of Node.js’s 
// -- web server functionality to simplify its APIs and add helpful new features.
// -- It makes it easier to organize your application’s functionality with middle 
// -- ware and routing; it adds helpful utilities to Node.js’s HTTP objects;
// -- it facilitates the rendering of dynamic HTTP objects.
// -- Express is a part of MEAN stack, a full stack JavaScript solution used 
// -- in building fast, robust, and maintainable production web applications.
// -- MongoDB(Database)
// -- ExpressJS(Web Framework)
// -- AngularJS(Front-end Framework)
// -- NodeJS(Application Server)

// Installing Express on Windows
// -- Assuming that you have installed node.js on your system
// -- Creating a directory for our project and make that our working directory
// --  Using (npm init) command to create a (package.json) file for our (project)
// -- -- This command describes all the dependencies of our project. 
// -- -- The file will be updated when adding further dependencies during the 
// -- -- development process, for example when you set up your build system
// -- -> Keep pressing enter and enter “yes/no” accordingly at the terminus line
// -- Now in your gfg(name of your folder) folder type the following command line
// -- -> npm install express --save

// -- NOTE- Here “WARN” indicates the fields that must be entered in STEP-2.
// -- Verify that Express.js was installed on your Windows:
// -- To check that express.js was installed on your system or not, 
// -- you can run the following command line on cmd
// -- -> C:\Users\Admin\gfg\node_modules>npm --version express
// -- After installing the express module, you can check your express version 
// -- in command prompt using the command. 
// -- -> npm version express
// -- After that, you can just create a folder and add a file for example, 
// -- index.js. To run this file you need to run the following command.
// -- -> node index.js

// NodeJS Vs. ExpressJS
// -- Node.js: Node.js is an open source and cross-platform runtime environment 
// -- for executing JavaScript code outside of a browser.
// -- You need to remember that NodeJS is not a framework and 
// -- it’s not a programming language. Most of the people are confused and 
// -- understand it’s a framework or a programming language. 
// -- We often use Node.js for building back-end services like APIs like Web App 
// -- or Mobile App. It’s used in production by large companies such as Paypal, 
// -- Uber, Netflix, Walmart and so on. Express.js: Express is a small framework
// -- that sits on top of Node.js’s web server functionality to simplify its APIs 
// -- and add helpful new features. It makes it easier to organize your 
// -- application’s functionality with middle ware and routing. 
// -- It adds helpful utilities to Node.js’s HTTP objects. 
// -- It facilitates the rendering of dynamic HTTP objects.
// -- Difference between Node.js and Express.js:
// -- -- Node.js is a platform for building the i/o applications which are
// -- -- server-side event-driven and made using JavaScript.
// -- -- Express.js is a framework based on Node.js for which is used for 
// -- -- building web-application using approaches and principles of 
// -- -- Node.js.event-driven.