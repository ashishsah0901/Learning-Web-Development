// this is how to log the things in the developer console 
console.log("Javascript Tutorial");
console.log("javascript Tutorial");
// by pressing F12 we can directly open the console in chrome
// var is used to declare variables in js 
var a = 78;
var b = "Ashish";
b = 4;
console.log(a);
// a and b are operands and + is the oprator
// this is a binary operator
var c = a + b;
// this is uniary operator
c = -c;
var d = "Sah"
    // this is string concatination
b = b + d;
// this is equal to 2^3;
var e = 2 ** 3;
// this is a string if you wish to use double quotes inside the string surround it with single quotes and vis-e-versa
var string = "thi's";
//if you wish to use both single and double ticks then use these back ticks
var temp = `${string} is this" '`;
// this is used to calculate length of string 
var len = string.length;
// \n is used to get in new line \t is used to put 4 spaces \b is used to do a backspace \\n is used to print \n in the string
// thsi is a way to declare strings dynamically
var y = new String();
// this is used to set HTML by targetting the elements by their ID's
document.getElementById('para').innerHTML = "<h3>Lorem ipsum dolor sit amet consect</h3>";
temp = "This is a temp string";
// this return the first index of the occurrence of the string/char provided 
var index = temp.indexOf("is");
// this returns the last index of the string 
index = temp.lastIndexOf("is");
// this returns a substring from i to j-1
var substr = temp.slice(1, 5);
// the only difference between slice and substring is we can't pass negative values to substring
substr = temp.substring(1, 5);
// this takes the index and length of substring 
substr = temp.substr(1, 4);
// this replaces the sustring from the original string 
var replaced = temp.replace("temp", "Ash");
// this converts the string to lower case 
console.log(temp.toLowerCase());
// this converts the string to upper case 
console.log(temp.toUpperCase());
var str = "      this     ";
// this removes the empty spaces from start and end 
var Str = str.trim();
// this returns the char at index 
var char3 = temp.charAt(3);
// let is used to declare variables. It doesn't allow redeclaration of the same variable. It has a block scope whereas the var as global scope 
// It's prefered to use let for variable initialization rather that using var
let string1 = "This is a new string";
// const can't br changed
const string2 = "This can't be changed";
let age = 20;
// these are conditional statements
if (age > 18) {
    console.log("congo");
} else {
    console.log("so sad");
}
switch (age) {
    case 10:
        console.log("10");
        break;
    case 20:
        console.log("20");
        break;
    default:
        console.log("oops");
        break;
}
// this is used when you don't define the values of the variable
let myvar = undefined;
// this is an object which stores data in key and value format
let employee = {
    name: "Ashish",
    age: 10,
    college: "SCOE",
    "univesity ": "SPPU"
};
// this is an array 
let names = [1, 2, 3, "Ashish"];
let name = new Array(1, 2, 3, "Ashish");
// this the array declarartion and the size of it is specified, is creates empty spaces the array
let nam = new Array(4);
// elements in the array can be accessed by [index]
let element = names[3];
// this is how we get the length of array 
let len = names.length;
// this is used to sort the array 
names = names.sort();
// this is used to add element to the end of array 
names.push("Sah");
// this used to access the fields of the object when the key don't have a space
employee.name;
// when the key has space 
employee["univesity "];
// this is how we declare a function with default value
function greet(name = "Anmol") {
    console.log(name + ", Good Morninng");
    return 1;
    // anything after this will never be executed
}
// this is function call 
let ans = greet("Ashish");
ans = greet();
// this takes a string as a parameter and shows a dialog which won't allow the user to use the website until ok is pressed and it doesn't return anything
alert("This is an alert");
// this creates a dialog where the user can reply to to question asked and the answer will be stored the the variable assigned to prompt 
let username = prompt("What is your username?", "");
// this is used to confirm a task which is about to happen and retuns a boolean 
let sure = confirm("Do you really want to delete the file?");
// this is a normal for loop 
for (let i = 0; i < 5; i++) {
    console.log(i);
}
let friends = ["ashish", "rohan", "om", "saurabh"];
// this is another way to itrate over arrays by using foreach loop
friends.forEach(function f(element) {
    console.log(element);
});
// this is just another way for iteration
for (element of friends) {
    console.log(element);
}
// this is used to iterate over objects
for (keyb in employee) {
    console.log(`${key} : ${employee.key}`);
}
let i = 0;
// this is a normal while loop
while (i < 4) {
    console.log(i++);
}
// this is a normal do-while loop 
do {
    console.log(i);
} while (i < 8);
// document is a way to access the complete HTML page 
// we can access any element by theie id or class 
let main = document.getElementById("emstyling");
console.log(main);
let et = document.getElementById("idName");
// we can manipulate the HTML by accessing by innerHTML and we can change them very easily
et.innerHTML = "This is a box";
// this retuns a collection of all the tags with the same class name 
let cont = document.getElementsByClassName("container");
console.log(cont);
// this is used to select the CSS selectors and it returns the first tag with the selector
cont = document.querySelector(".container");
console.log(cont);
// this is way to select things inside other selectors
let sel = document.querySelectorAll(`#nav>li`);
console.log(sel);
// this is an onclick function which runs when the button is clicked
let para = document.getElementById("para");

function hide() {
    let btn = document.getElementById("button");
    // this is how we manipulate the display of any tag 
    para.style.display = "none";
    // we can directly access any element with their id rather than creating a variable of it
    if (para.style.display != "none") {
        para.style.display = "none";
    } else {
        para.style.display = "block";
    }
}
// this is used to do anything on any event on the webpage 
para.addEventListener("mouseover", function run() {
    console.log("mouse inside");
});

function greeting(name) {
    console.log("Hello " + name);
}
// this is used to run a function after a interval of time only once and the argument of function should be passed after the time interval and there should not be a function call rather just  function name
let time = setTimeout(greeting, 2000, "Ashish");
// this is used to clear the timeout assigned after a interval of time 
// the argument passed to cleartimeout is the id of settimeout 
clearTimeout(time);
// this calls a funtion repeatedly after a interval of time 
let interval = setInterval(greeting, 2000, "Ashish");
// this stops the repeated call to the same function by setinterval 
clearInterval(interval);
// this is an object of type date
let date = new Date();
console.log(date);
// the format is yyyy-mm-dd 
// Date(yyyy,mm,dd,hh,mm,ss,msms)
let format = new Date("2019-01-09");
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours()); //and many more...
// this returns the current timestamp in milliseconds
console.log(Date.now());
// this is an arrow function 
let gm = () => {
    console.log("Good morning");
}
gm();
// in arrow function the last line is automatically  returned 
let sum = (a, b) => a + b;
console.log(sum(2, 5));
// when their is only one argument you can skip the parenthesis too 
let half = a => a / 2;
console.log(half(40));
// when we use arrow function we can access the element of it's parent by using this. but when we use a normal function it  has it's own this which won't allow us to access the parent element by this.
// this is math object given by javascript
let m = Math
console.log(m);
// some contants from Math
console.log(m.E);
console.log(m.PI);
// this rounds to the nearest integer 
console.log(Math.round(2.582));
console.log(Math.sqrt(19));
// min  and max takes n arguments
console.log(Math.min(1, 5, 2, 10));
console.log(Math.random());
// random between a and b = a + (b-a)*Math.random()
console.log(1 + (100 - 1) * Math.random());
// this converts the js object to string for transportation over network
let jsonstr = JSON.stringify(employee);
console.log(jsonstr);
// we can use all the string functions to json string 
jsonstr = jsonstr.replace("Ashish", "Ashish Sah");
// this takes a valid json string and converts it to a JSON object 
let newJson = JSON.parse(jsonstr);
console.log(newJson);