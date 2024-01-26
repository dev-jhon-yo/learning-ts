// Example 1 - Simple use of tuples in Typescript
let user: [string, string, number];
user = ["JhoN", "✅", 21];
console.log(user);

// Example 2 - Accessing the value of the tuple
let userData: [string, string, number];
userData = ["JhoN", "✅", 21];
console.log(userData[0]);

// Example 3 - Another way to use Tuples in TypeScript (with labeled)
const userLabeled: [name: string, status: string, year: number] = [
  "JhoN",
  "✅",
  21,
];
console.log(userLabeled);

// Example 4 - Using Tuples with Spread Operator
const fruitList: [string, ...string[]] = ["🍍", "🍊", "🍎", "🍉", "🥭"];
console.log(...fruitList);

// Example 5 - Heterogeneous Tuple List
const fruitData: [number, boolean, ...string[]] = [5, true, ...fruitList];
console.log(fruitData);

// Example 6 - Function use with Tuples
function userList(names: string[], years: number[]) {
  return [...names, ...years];
}

const result = userList(["JhoN", "Carlos"], [21, 12]);
console.log(result);

// Example 7 - Labeled Tuples with Spread Operator in a function
type Name =
  | [firstName: string, lastName: string]
  | [firstName: string, middleName: string, lastName: string];

function createPeople(...names: Name) {
  return [...names];
}

console.log(createPeople("Jhonata", "Moura"));
console.log(createPeople("Jhonata", "Klisman", "Moura"));
