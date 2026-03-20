// Well we know that in many languages if you want to make little simple notes you can do it with just 2 slashes

/* But if you want to make some text or explain some part of code you need to write like this*/

/* Lets talk about outputs. In JavaScript have 4 kind of outputing method. If we use .innerHTML we can write anything in HTML. 
   Then we can use innerText for showing anything in page.
   document.write is writing any thing on directly to page
   window.alert or just "alert" can use for alert something for entering page. It can be microphone, camre or storage permission
   At last console.log is runing on developer console
*/

// we can declare valubles in 2 form. Const or changeable values. For example.

let q = 5; // it can change on during the runing of the program
const w = 1; // but its constant

// Also let can be float and double 

let e = 12.23;
let r = 1234567890132313;

// If you want to declare string with "" or '' . Also you can use double quotes in single and single in double quotes.

let t = "Name";
let y = 'Surname';
let u= " Let's go to home";
let i = 'Did you read J.K.Rowlings "Harry Potter" book? '

// We can define some value and then asign value

let o;
o = 9;

//For long number JavaScript uses Bigint

let p = 1234567895412987491362074032754507671620378408273601876087695012450832761904075608756047n;
let a = Bigint(8763217868071650756174560738456176105345235081234567895412987491362074032754507671620378408273601876087695012450832761904075608756047);

/* JavaScript have 8 data types:
1) String 
2) Number (float, double, integer)
3) Biginit
4) Boolean 
5) Object (A collection of key-value pairs of data)
6) Undefined (A primitive variable with no assigned value)
7) Null (A primitive value representing object absence)
8) Symbol (A unique and primitive identifier)
*/

// On JavaScript you can use exponentional notation

let s = 12345e6;
let d = 12345e-6;

// as in every language there also have if, else, switch, else if, ? : (Ternary operators)
 
let g = 4;
if (g < 6){
   g = g + 5;
} else if (g < 5) {
   g = g + 4;
} else {
   g = g + 3;
}

// or we can use switch

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

// or we can use just ? : (Ternary operators)

let age = 18;
let text = (age < 18 ) ? "Minor" : "Adult";

let price =  10;
let isMember = true;
let discount = isMember ? 0.2 : 0;
let total = 10 - (price * discount)

// On String side on JavaScript string templates is most usefull thing

let firstName = "Ali"
let surName = "Mukhtarli"
let nameSurname = `Welcome ${firstName}, ${surName}`

// concat() method

let esse = "Hello";
let esse1 = "World";
let esseAll = esse.concat(" ",esse1); 

// We can also get length of string

let txt = "Hello World";
let length = txt.length;

// Extracting string parts

// slice(start, end)
let text1 = "JavaScript";
let part1 = text1.slice(0, 4); // Java

// substring(start, end)
let part2 = text1.substring(4, 10); // Script

// substr(start, length)
let part3 = text1.substr(4, 6); // Script

// Replacing string content

let text2 = "Hello JS";
let newText = text2.replace("JS", "JavaScript");

// Converting to upper and lower case

let text3 = "hello";
let upper = text3.toUpperCase();

let text4 = "WORLD";
let lower = text4.toLowerCase();

// Removing spaces

let text5 = "   Hello   ";
let trimmed = text5.trim();

// Padding

let num = "5";
let padded = num.padStart(3, "0"); // 005

// Accessing characters

let text6 = "JavaScript";
let char = text6.charAt(0); // J

// Splitting string

let text7 = "a,b,c,d";
let arr = text7.split(",");

// Template literals can be multiline

let multiLine = `This is line one
This is line two
This is line three`;

/* Now lets talk about Arrays. Arrays can hold multiple values in one variable */

let cars = ["BMW", "Mercedes", "Tesla"];

// Accessing elements

let car = cars[0];

// Changing elements

cars[1] = "Audi";

// Array length

let carLength = cars.length;

// Adding elements

cars.push("Toyota"); // add to end

// Removing elements

cars.pop(); // remove last

// shift and unshift

cars.shift(); // remove first
cars.unshift("Ford"); // add to start

// Looping through array

for (let i = 0; i < cars.length; i++) {
   console.log(cars[i]);
}

// forEach method

cars.forEach(function(item){
   console.log(item);
});

/* Now lets talk about Objects. Object is collection of key-value pairs */

let person = {
   firstName: "Ali",
   lastName: "Mukhtarli",
   age: 21
};

// Accessing object properties

let name1 = person.firstName;
let name2 = person["lastName"];

// Adding new property

person.country = "Azerbaijan";

// Object methods

let user = {
   name: "Ali",
   greet: function(){
      return "Hello " + this.name;
   }
};

let message = user.greet();

/* Now lets talk about Functions */

// Function Declaration

function sum(a, b){
   return a + b;
}

let result = sum(5, 3);

// Function Expression

const multiply = function(a, b){
   return a * b;
};

let result2 = multiply(4, 2);

// Arrow Function

const divide = (a, b) => {
   return a / b;
};

let result3 = divide(10, 2);

// Short arrow function

const square = x => x * x;

let result4 = square(5);

/* Now lets talk about Scope. Scope means where variables are accessible */

// Global Scope

let globalVar = "I am global";

function testScope(){
   console.log(globalVar); // accessible
}

testScope();

// Function Scope

function myFunction(){
   let localVar = "I am local";
   console.log(localVar);
}

// console.log(localVar); // Error because its local

// Block Scope (let and const)

if (true){
   let blockVar = "I am block scoped";
   console.log(blockVar);
}

// console.log(blockVar); // Error

// var is NOT block scoped

if (true){
   var x = 10;
}

console.log(x); // works because var is function scoped