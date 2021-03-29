// Comments are having 5 spaces before the startline 
// this is just a sample backend from node.js official website
const http = require('http');

const hostname = '127.0.0.1';
const port = 80;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/text');
    res.end("hello world!");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// MODULES 
// this line imports the module fs 
const fs = require("fs");
const { findSourceMap } = require('node:module');
// this reads the file sync 
let text = fs.readFileSync("app.js", "utf-8");
// this writes the file async
fs.writeFileSync("Ashish.txt", text);

// Synchronous or blocking executes the code line by line and asures that the program will not move further unless the steps are completed
// the call backs are fired after the read is done and while the read is going on further code is run
fs.readFile("app.js", "utf-8", (error, data) => {
    console.log(data);
});
console.log("File read successfully");

// Asyncronous or non-blocking executes the code and move further and when the task is completed it gives a call back to the tasks remaining
// the next line of code won't execute unless the read is completed
fs.readFileSync("app.js", "utf-8");
console.log("File read successfully");

// this is how we read a html file
const content = fs.readFileSync('app.html');
const project1 = fs.readFileSync('./Project1/pro1.html');
const project2 = fs.readFileSync('./Project2/index.html');
// creating a server and setting the content-type to text/html and end to the html content read from the file 
const server = http.createServer((req, res) => {
    console.log(req.url);
    let url = req.url;
    res.writeHead(200, { 'Content-type': 'text/html' });
    if (url == "/") {
        res.end(content);
    } else if (url == "/project1") {
        res.end(project1);
    } else if (url == "/project2") {
        res.end(project2);
    } else {
        res.statusCode = 404;
        res.end("404 Page Not Found");
    }
});

// this will start the server on 80 port and we use 80 just because we don't need to explicitly mention the port while reloading the server 
server.listen(80, '127.0.0.1', () => {
    console.log("Server running on port 80");
});

// this imports a module 
const mod = require("module");
const { SSL_OP_NO_TLSv1_1 } = require('node:constants');
// we can access the functions or the variables that can we access which are specified in the export 
console.log(mod.avg([4, 6]));
console.log(mod.name);

// npm init initilaizes the directory as a npm package manager 
// npm install _packagename_ installs the package in the project 
// npm uninstall _packagename_ uninstalls the package 
// is accidently your node_module is deleted you can install all the dependencies again by running command npm install 
// if we wish to install a specific version of any module we can specify the version as slugify@1_1.3.4
// 1.3.5 (major.minor.batch) this is how to version is update, when a bug is fixed the last batch is updated, when a new functionality is added the minor is updated, and when something is depretiated or something major changes are done the major is updated
// we can install modules which will be needed only at the time of development and not at the time of deployment so we can install them as  npm install nodemon --save-dev
// we can install modules globally so that we can use them from anywhere for that use run npm install nodemon --global
// to check the version of any module we can run npm view slugify version

// we can run the server on postman my writing localhost in the api section and select get or post request
// this imports the express module
const express = require('express');
// this module helps to create paths of directories easily
const path = require("path");
// this creates an express app 
const app = express();
// this will help in serving the files as it is on the browser and it don't execute the content written in the file
app.use("/static", express.static("Project1"));
// this sets the templete engine to pug 
app.set('view engine', 'pug');
// set the view directory, path.join creates the directory path and is stored in __dirname
app.set('views', path.join(__dirname, 'views'));
// this is used to handle pug response and give title and message
app.get("/demo", (req, res) => {
    res.status(200).render('demo', { title: "Title", message: "Hello World!" });
});
// this handles the get response on /
app.get("/", (req, res) => {
    res.status(200).send("This is the home page of my first app with express!");
});
// this handles the get response of /about 
app.get("/about", (req, res) => {
    res.send("This is the about page of my first app with express!");
});
// this handles the post request of /about 
app.post("/about", (req, res) => {
    res.send("This is the post result of about page of my first app with express!");
});
// this will throw the 404 status code which is page not found 
app.get("/this", (req, res) => {
    res.status(404).send("Page not found!");
});
// this will start listening at the port specified 
app.listen(port, () => {
    console.log(`The app is running on the port: ${port}`);
});
// this is used to make a middle ground for the data comming from the website(form) to be used in our backend 
app.use(express.urlencoded());
// this is used to render our HTML page using pug 
app.get("/", (req, res) => {
    const con = "This the best content"
    const params = {
            'title': "Pug is best",
            'content': con
        }
        // in order to send more that one parameter to the template we use object  to store the and send them 
    res.status(200).render('index.pug', params);
});
// this hamdles the ppst request made from the webpage or the url specified
app.post("/", (req, res) => {
    // req.body gives an object of all the attributes send by the post requesr 
    let name = req.body.name;
    let age = req.body.age;
    let gender = req.body.gender;
    let address = req.body.address;
    let more = req.body.more;
    let data = `${name} is a ${gender}, ${age} years old living at ${address}. More about ${name}: ${more}`;
    fs.writeFileSync('output.txt', data);
    const params = {
        'message': "Form Submitted Successfully!"
    };
    res.status(200).render('index.pug', params);
})