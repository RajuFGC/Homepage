import { calculate as superCalculate } from "./calculate";
import * as nowaNazwa from "./calculate";
import differenceInDays from 'date-fns/differenceInDays'


console.log(nowaNazwa.tax)
const age = '38'
const firstName = 'Wojtek';
console.log(firstName);
console.log(age);
const calculate = () => 'hej hej obliczam';
console.log(`Nazywam się ${firstName} i mam ${age} lat`);
const header = document.querySelector(".page-header_heading--js");
console.log(header);
console.log(header.innerHTML);
header.innerHTML = `Nazywam się ${firstName} i mam ${age} lat`;
console.log(header.style);
header.style.color = "red";
const dupa = document.querySelector(".my-article__content");
dupa.innerHTML = "Jestem wypełniony javascriptem😋";
const myNumber = 7


const result = calculate(myNumber);
console.log(result);



function hello() {
  console.log("hello");
}
hello();

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
console.log(deathStar.commander.name);
console.log(deathStar.levels);
deathStar.fire("Bob");
deathStar.fire("Dennis");


const humanOne = {
  name: "Maciek",
  age: 32,
  address: {
    street: "Warszawska",
    city: "Białystok",
  },
};

const humanTwo = {
  name: "Stefan",
  age: humanOne.age,
  address: {
    street: humanOne.address.street,
    city: "Białystok",
  },
};

humanOne.address.street = "Lipowa";

console.log(humanOne);
console.log(humanTwo);

const greet = (name, age) => {
  const result = `Witaj ${name}! Masz ${age} lat!`
  return result;
}
console.log(greet('Maciek',35));



const clickFunction = (e) => {
const header = document.querySelector('.page-header_heading--js');
header.innerHTML = 'Wojciech Majewski - Strona Domowa'
}
const button2 = document.querySelector('.page-header_button--js');

button2.addEventListener('click', clickFunction);

const button1 = document.querySelector('.page-header_button-background--js');
console.log(button1)
button1.addEventListener('click', (e) => {
  document.documentElement.style.setProperty('--backgroundColor', 'black')
})


const hamburger = document.querySelector('.hamburger--js');
console.log(hamburger)

hamburger.addEventListener('click', () => {
  const navigation = document.querySelector('.navigation-js')
  navigation.classList.toggle('navigation-open')
} )


const text = "Hello, world!";
const number = 42;
const pipa = text + number;
console.log(pipa)


const myDog = {
  name: "Fabio",
  hi: () => {
    console.log('hi')
  },
  age: 16,
  hobby: ['toys','food','walks']
}
console.log(myDog)
myDog.hi()
const myJSON = JSON.stringify(myDog)
console.log(typeof myJSON);

const myParsedObejct = JSON.parse(myJSON);
console.log(myParsedObejct);