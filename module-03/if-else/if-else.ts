export {};

// Example 1 - Use of if
const maxNumber = 100;
let counter = 100;

if (counter < maxNumber) {
  counter++;
}

console.log(counter);

// Example 2 - Use of if
const permissionAge = 21;

if (permissionAge >= 18) {
  console.log('You are qualified to drive 🚗');
}

// Example 3 - Use of if-else
const permissionAgeTwo = 16;

if (permissionAgeTwo >= 18) {
  console.log('✅ You are qualified to drive');
} else {
  console.log('❌ You are not qualified to drive ');
}

// Example 4 - Use of  if... else if
let descount: number;
const buyValue = 14;

if (buyValue > 0 && buyValue <= 5) {
  descount = 5;
} else if (buyValue > 5 && buyValue <= 10) {
  descount = 10;
} else {
  descount = 15;
}

console.log(`🥳 You got a discount of ${descount}%`);

// Example 5 - Use of Ternary (? :) - if...else
const ageVoting = 18;

// if (ageVoting >= 18) {
//   console.log('✅ You are eligible to vote');
// } else {
//   console.log('❌ You are not eligible to vote');
// }

const canVote =
  ageVoting >= 18
    ? '✅ You are eligible to vote'
    : '❌ You are not eligible to vote';
console.log(canVote);
