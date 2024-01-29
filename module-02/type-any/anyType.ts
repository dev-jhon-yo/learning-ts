/**
 * DONT USE ANY!
 */

// Example 1 - Type any
const a: any = 21;
const b: any = ['JhoN'];

const sumResult = a + b;
console.log(sumResult);

// Example 2 - When type 'any' is implicitly inferred
let phrase;
phrase = 'Hello, World!';

console.log(phrase);

// Example 3 - When should we use the any type?!
const form: { [formField: string]: any } = {
  name: 'JhoN',
  lastname: 'Moura',
  year: 21,
};

console.log(form);
