// Example 1 - Never - Throw Error
function error(message: string): never {
  throw new Error(message);
}

console.log(error('Erro Message - 01'));

// Example 2 - Never automatically inferred
function rejectMessage() {
  return error('Error Message - 02');
}

console.log(rejectMessage());

// Example 3 - Function containing infinite loop returns type 'never' [DONT EXECUTE THIS!]
const infiniteLoop = function loop() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    console.log('Hi, Developers!');
  }
};

console.log(infiniteLoop());

// Example 4 - Difference between types: 'never' x 'void
const somethingVoid: void = null;

// Error: Type 'null' is not assignable to type 'never'
const somethingNever: never = null;

console.log(somethingVoid);
console.log(somethingNever);
