/**
 * Primitive
 * - Is a value of a primitive type.
 * - There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.
 */

/**
 * Object
 * - Is capable of storing multiple values as properties.
 * - Can be created with {}, for instance: {name: "John", age: 30}.
 * - There are other kinds of objects in JavaScript: functions, for example, are objects. There called Methods in a object.
 */

/**
 * primitive as an object
 * - There are many things one would want to do with a primitive, like a string or a number. It would be great to access them using methods.
 * - Primitives must be as fast and lightweight as possible.
 */

/**
 * TASK 1 - can i add a string property
 * Consider the following code:
 */ 
let str = "Hello"; 
str.test = 5;

alert(str.test);
/** 
 * What do you think, will it work? What will be shown?
 * 
 * SOLUTION van Wilco: 5
 * 
 * SOLUTION van javascript.info: undefined
 */