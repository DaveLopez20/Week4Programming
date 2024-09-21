const name = "Drake";

const age = 27;

console.log (
" Hello it's me " + name + " and my age is " + age + " and I'm getting ready for the future"
);

if (age > 18) {
    console.log("You are good to go!");
}

const dice1= 6;
const dice2= 3;

if (dice1 === 6  && dice2 === 6) {
    console.log("You rolled a double");
} else {
    console.log ("You didn't");
}

let x = 500;
document.getElementById("demo").innerHTML =
  x.toString() + "<br>" +
   (500).toString() + "<br>" +
   (470 + 30).toString();

   let text;
   switch (new Date().getDay()) {
     case 6:
       text = "Today is a good day for coding";
       break;
     case 0:
       text = "Today is a good day for anime";
       break;
     default:
       text = "Welcome to the Family!";
   }
   document.getElementById("demo").innerHTML = text;

   let day;
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
     case  6:
       day = "Saturday";
   }
   document.getElementById("demo").innerHTML = "Today is " + day;

let text1 = "Boogie";
let text2 = "Nights";
let text3 = text1.concat(" ",text2);
document.getElementById("demo").innerHTML = text3;


let letter = name[2];

document.getElementById("demo").innerHTML = letter;