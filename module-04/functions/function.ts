export {};

// Example 1 - Named Function
function sumNumbers(numOne: number, numTwo: number): number {
  return numOne + numTwo;
}

const result = sumNumbers(1, 1);
console.log(result);

// Example 2 - Function Expression
const helloMessage = function (message: string): string {
  return message;
};

console.log(helloMessage('Hi guys!'));

// Example 3 - Arrow Function Expression
const welcomeMessage = (message: string): string => {
  return message;
};

console.log(welcomeMessage('Welcome JhoN 🥳'));

// Example 4 - Function Constructor
const leaveMessage = new Function('message', 'return "👋 Bye " + message');

console.log(leaveMessage('JhoN'));
