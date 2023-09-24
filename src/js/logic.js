import { NakedSnake } from "./hamburger";
import { Snake } from "./hamburger";
console.log(NakedSnake);
console.log(Snake);

console.log('logika js');
if (('2' !== 2) || (2 !== 2)) {
  console.log('to jest prawda')
}
if (4>=3) {
  console.log('porównanie matematyczne')
}
console.log(typeof '2');
console.log(typeof 2);
console.log('tekst'+6)
if ('right') {
  console.log('jednak się pojawię :)')
}
if (('2' === 2)) {
  console.log('to jest jedyna prawda')
} else {
  console.log('to jest fałsz')
}

let donkey = false;

if (donkey) {
  console.log('pupa blada')
} else {
  console.log('pupa czarna')
}

let myNumber = 8;

(myNumber > 4) ? console.log('większe niż 4') : console.log('mniejsze lub równe od 4');




if(myNumber === 4) {
  console.log('my number is 4')
} else if (myNumber === 8) {
  console.log('my number is 8')
} else {
  console.log('nie wiem ile wynosisz')
}
switch (myNumber) {
case 4:
  console.log('my number is 4')
  break;
  case 8:
    console.log('my number is 8')
    break;
    default:
    console.log('nie wiem ile wynosisz')
}
const hardware = ['mouse','keyboard','screen']
console.log(hardware[0]);
console.log(hardware.length);
const newHardware = hardware.slice(0,1)
console.log(newHardware);
console.log(hardware);
/* splice removes the exact element that we want to get rid of ex. hardware.splice(0,1) would remove* mouse because "0" indicates "mouse" and "1" indicates how many elemnts we want to remove*/
/*slice adds the exact element which we want to add to a new const for example
const newHardware = hardware.slice(0,1)
  if console.log(newHardware) it would show that it now holds the value of "mouse"*/
const myObject = {
  name: "Wojtek",
  age: 38
}

hardware.unshift('test');/*this adds an element to the begining of an object*/

console.log(hardware);
console.log(hardware.length)
hardware.shift();/*this command removes an element which is at the begining. The more times we use it the less elements we will have*/
console.log(hardware);
hardware.pop(); /*this command removes an element which is at the end of the string. The more times we use it the less elements we will have*/
console.log(hardware);
hardware.push(myObject);
console.log(hardware);
console.log(hardware.indexOf(myObject));/*this method tells us what string number is the obeject we are asking about. In this case "myObejct" is 2 as we can see in the console.log*/
hardware.splice(2,1);
console.log(hardware);


const myText = "Dupa blada jest pyszna";

const textLength = myText.length
console.log(myText.indexOf('ada'));/*this method counts and tells us the number of the letter coresponding inside the string*/
console.log(myText.length);
console.log(myText.slice(5,16));

console.log(myText[textLength-1]);/*this one shows the last letter*/

for (let i = 0; i < 3; i++) {
  console.log(`${i} wykonanie petli`);
}

let number = 0;

console.log(number--);
console.log(number);

const elements = ['😎','😐','😪','🙄'];

for (let i = 0; i < elements.length; i++) {
  console.log(`Index: ${i} Emoji: ${elements[i]}`);
}

for (let element of elements ) {
  console.log(element)
}



let n = 3;
while (n<9){
  console.log(n);
  n = n+3;
}
console.log(n);

console.log('------');


let g = 9;
do {
  console.log(g);
  g=g+3;
} while (g<9);
console.log(g);

const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed`);
  },
  isOperating: true,
  levels: 357,
  name: "Death Star",
  population: 10000,
  commander: {
    name: "darth vader",
  },
};

for (property in deathStar){
  console.log(`${property}`)
  console.log(deathStar[property]);
}

const myDog = {
  name: "Fabio",
  hi: () => {
    console.log('hi')
  },
  age: 16
}

console.log(document.cookie)

document.cookie ='ciastko = mnima mniam'
document.cookie ='drugie ciacho = tez pycha'
document.cookie ='ullalalal= yhmik'


const myHouse = {
  street: 'Bukowa',
  number: '35'
}



localStorage.setItem('street',JSON.stringify(myHouse));
const fromStorage = JSON.parse(localStorage.getItem('street'));
console.log(fromStorage);
