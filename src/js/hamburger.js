const hamburger = document.querySelector('.hamburger--js');
console.log(hamburger)

hamburger.addEventListener('click', () => {
  const navigation = document.querySelector('.navigation-js')
  navigation.classList.toggle('navigation-open')
} )
const headerH3 = document.querySelector('.naglowek-js')
headerH3.innerHTML = 'kupa dupa'

headerH3.style.color = 'blue';





const calculate1 = (myNumber) => {
  myNumber = myNumber + 3;
  console.log(myNumber);
  return myNumber+6;
}
console.log(calculate1(2));


const calculate2 = myNumber => (myNumber+3)+6;

console.log(calculate2(2));

function calculate(myNumber) {
  myNumber = myNumber + 3;
  console.log(myNumber);
  return myNumber+6;
}

console.log(calculate(1));


const dupa = calculate(1);
console.log(dupa);

const pencilcase = {
  tool1:'pencil',
  tool2:'pen',
  tool3:'rubber'
};

pencilcase.tool3 = 'dupsko';

console.log(pencilcase);
console.log(pencilcase.tool3);

let Duke = 455;
console.log(Duke);
Duke = "madafaka";
console.log(Duke);

let school = ['Bobby','Mike','Joe'];
school.Steve = 'Michelle'
console.log(school[0]);

function dude ()  {
  console.log('ciezko ale ucze sie');
}
dude ()


const NakedSnake = {
  name: 'Bob',
  age: 32
}

const Snake = {
  name: NakedSnake.name,
  age: NakedSnake.age
}

NakedSnake.name = 'Dickie';


console.log(Snake);
console.log(NakedSnake);



const SuperSaiyan1 = {
name: 'Vegeta',
age: 30,
address: {
  street: 'Powerful',
  city: 'Namek'
}
}
const SuperSaiyan2 = {
  name:'Trunks',
  age: SuperSaiyan1.age,
  address: {
    city: SuperSaiyan1.address.city,
    street: 'BLVD'
  }
  }
SuperSaiyan1.address.city = 'LA'
console.log(SuperSaiyan1);
console.log(SuperSaiyan2);

car = 'Toyota';
bike = 'Buell';



console.log(`I have a ${car} and a beautiful ${bike}`);