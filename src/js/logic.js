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