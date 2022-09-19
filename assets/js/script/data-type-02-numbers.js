/**
 * Rounding numbers
 */
let numberRounding = 1.23456;

console.log("Floor rounds down to " + Math.floor(numberRounding)); // 1
console.log("Ceil rounds up to " + Math.ceil(numberRounding)); // 2
console.log("Round rounds to the nearest integer " + Math.round(numberRounding)); // 1

/**
 * toString()
 */

let numberToString = 255;

console.log(numberToString.toString(16)); // ff
console.log(numberToString.toString(2)); // 11111111

/**
 * parseint and parsefloat
 */

console.log( parseInt('100px') ); // 100
console.log( parseFloat('12.5em') ); // 12.5

console.log( parseInt('12.3') ); // 12, only the integer part is returned
console.log(parseFloat('12.3.4')); // 12.3, the second point stops the reading
