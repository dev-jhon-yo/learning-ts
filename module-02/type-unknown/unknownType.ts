// Example 1 - Type Unknown
let variableValue: unknown;

variableValue = true;
variableValue = 123;
variableValue = [];
variableValue = 'Hello, World!';

console.log(variableValue);

// Example 2 - Error when trying to assign a value of type 'unknown' to others type!
let value: unknown;

const value1: boolean = value;
const value2: any = value;
const value3: any[] = value;
const value4: string = value;

// Example 3 - Difference berween: 'any' vs 'unknown'
let somethingAny: any;
let somethingUnknown: unknown;

console.log(somethingAny.toFixed());

if (typeof somethingUnknown === 'number') {
  console.log(somethingUnknown.toFixed());
}
