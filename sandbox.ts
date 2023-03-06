let character = 'mario';
let age = 30;
let isBlackBelt = false;
const inputs = document.querySelectorAll('input');


// character = 20;
character = 'luigi';

// age = 'yoshi';
age = 40;

// isBlackBelt = 'yes';
isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

const sqrt = (sqrtNumber : number) => {
  return Math.sqrt(sqrtNumber);
}

const max = (first:number,second: number,third : number) => {
  return sqrt(Math.max(first,second,third));
}
// console.log(area('hello'));
console.log(circ(7.5).toFixed(2));

console.log(sqrt(28).toFixed(2));

console.log(max(26,28,28).toFixed(2));

inputs.forEach(input => {
  console.log(input);
});