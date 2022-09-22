// There are two syntaxes for creating an empty array:
let arrOne = new Array(); // (exceptionally rare)
let arrTwo = []; // usual

// Loops
let arrayFruit = ["Apple", "Orange", "Pear"];
for (let i = 0; i < arrayFruit.length; i++) {
  console.log( arrayFruit[i] );
}

// other form of loop
let fruits = ["Apple", "Orange", "Plum"];
for (let fruit of fruits) {
  console.log( fruit );
}

// Multidimensional array
