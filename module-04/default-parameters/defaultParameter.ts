export {};

// Example 1 - Default Parameters
function purchaseDescount(price: number, descount = 0.08) {
  return price * (1 - descount);
}

console.log(purchaseDescount(100)); //92

// Example 2
function showMessage(message: string, mention = '@devs') {
  return `${mention} ${message}!`;
}

console.log(showMessage('Hi JavaScript Developers'));

// Example 3
function showName(name: string, surname = 'Moura') {
  return `${name} ${surname}`;
}

const resultOne = showName('Jhonata');
const resultTwo = showName('Jhonata', undefined);
// const resultTrhee = showName('Jhonata', 'Moura', 'something');
const resultFour = showName('Jhonata', 'Moura');

console.log(resultOne);
console.log(resultTwo);
// console.log(resultTrhee);
console.log(resultFour);
