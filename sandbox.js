var character = 'mario';
var age = 30;
var isBlackBelt = false;
var inputs = document.querySelectorAll('input');
// character = 20;
character = 'luigi';
// age = 'yoshi';
age = 40;
// isBlackBelt = 'yes';
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
var sqrt = function (sqrtNumber) {
    return Math.sqrt(sqrtNumber);
};
var max = function (first, second, third) {
    return sqrt(Math.max(first, second, third));
};
// console.log(area('hello'));
console.log(circ(7.5).toFixed(2));
console.log(sqrt(28).toFixed(2));
console.log(max(26, 28, 28).toFixed(2));
inputs.forEach(function (input) {
    console.log(input);
});
