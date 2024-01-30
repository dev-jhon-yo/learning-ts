/*
 Avoid using while as much as possible as it consumes a lot of memory
 whenever possible try to use other methods such as arrays, tuples, for loops, etc..
*/

// Example 1 - while
let counter = 0;

while (counter < 5) {
  console.log(counter);
  counter++;
}

// Example 2
let number = 1;

while (number <= 20) {
  if (number % 5 == 0) {
    console.log(
      'The first number that is a multiple of 5 between 1 to 20 is...: ',
      number,
    );
    break;
  }
  number++;
}

// Example 3 - more practical example
let userCounter = 0;
const users: string[] = ['Glaucia', 'Jhonata', 'Prince'];

while (users[userCounter]) {
  console.log('Users...: ', users[userCounter]);
  userCounter++;
}

// Example 4 - do...while
let counterOne = 0;

do {
  console.log(counterOne);
  counterOne++;
} while (counterOne < 5);
