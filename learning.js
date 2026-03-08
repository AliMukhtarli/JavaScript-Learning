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
let  b = 4;