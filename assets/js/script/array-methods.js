/**
 * Add/remove items
 * 
 * We already know methods that add and remove items from the beginning or the end:
 * 
 * arr.push(...items) – adds items to the end,
 * arr.pop() – extracts an item from the end,
 * arr.shift() – extracts an item from the beginning,
 * arr.unshift(...items) – adds items to the beginning.
 */

// Remove element from array methods
let arrayOne = ["I", "study", "JavaScript"];
arrayOne.splice(1, 1); // from index 1 remove 1 element

console.log(arrayOne); // ["I", "JavaScript"]

// Replace element from array methods
let arrayTwo = ["I", "study", "JavaScript", "right", "now"];
arrayTwo.splice(0, 3, "Let's", "dance"); // remove 3 first elements and replace them with another

console.log(arrayTwo) // now ["Let's", "dance", "right", "now"]

// Here we can see that splice returns the array of removed elements:
let arrayThree = ["I", "study", "JavaScript", "right", "now"];
let removed = arrayThree.splice(0, 2); // remove 2 first elements

console.log(removed); // "I", "study" <-- array of removed elements

// The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:
let arrayFour = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arrayFour.splice(2, 0, "complex", "language");

console.log(arrayFour); // "I", "study", "complex", "language", "JavaScript"

// Slice
// The method arr.slice is much simpler than similar-looking arr.splice.

// The syntax is:
arraySlice.slice([start], [end])

// Concat
// The method arr.concat creates a new array that includes values from other arrays and additional items.

// The syntax is:
arraryConcat.concat(arg1, arg2)


// Searching in array

// arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
// arr.includes(item, from) – looks for item starting from index from, returns true if found.

// .indexOf() and .indexOfRight()
let arrayIndexOf = [1, 0, false];

console.log( arrayIndexOf.indexOf(0) ); // 1
console.log( arrayIndexOf.indexOf(false) ); // 2
console.log( arrayIndexOf.indexOf(null) ); // -1
console.log( arrayIndexOf.indexOf(1) ); // 0

// .include()
let arraryInclude = [1, 0, false];

console.log( arraryInclude.includes(0) ); // true
console.log( arraryInclude.includes(false) ); // true
console.log( arraryInclude.includes(null) ); // false
console.log( arraryInclude.includes(1) ); // true

// .find() in find zit (item, index en array)
let usersFind = [
    { id: 1, name: "John" },
    { id: 2, name: "Peter" },
    { id: 3, name: "Mary" }
];

let user = usersFind.find(item => item.id == 1);

console.log(user.name); // John

// .filter() in filter zit (item, index en array)
let usersFilter = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = usersFilter.filter(item => item.id < 3);

console.log(someUsers.length); // 2

// .map() in map zit (item, index en array)
let arrayFive = ["Bilbo", "Gandalf", "Nazgul"];

let lengths = arrayFive.map(item => item.length);

console.log(lengths); // [ 5, 7, 6 ] 

// .sort()
let arraySix = [ 1, 2, 15 ];

arraySix.sort(); // the method reorders the content of arr

console.log(arraySix);  // 1, 15, 2

// .reverse()
let arraySeven = [1, 2, 3, 4, 5];
arraySeven.reverse();

console.log(arraySeven); // 5,4,3,2,1

// .split()
let names = 'Bilbo, Gandalf, Nazgul';

let arrayEight = names.split(', ');

for (let name of arrayEight) {
  console.log( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}

// .join() glue
let arrayNine = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arrayNine.join(';'); // glue the array into a string using ;

console.log(str); // Bilbo;Gandalf;Nazgul

// .reduce() and .reduceRight()
let arrayTen = [1, 2, 3, 4, 5];

// removed initial value from reduce (no 0)
let result = arrayTen.reduce((sum, current) => sum + current);

console.log( result ); // 15

// Array.isArray() in array.isArray() zit value
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

