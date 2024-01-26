"use strict";
// Example 1 - Simple use of tuples in Typescript
let user;
user = ["JhoN", "✅", 21];
console.log(user);
// Example 2 - Accessing the value of the tuple
let userData;
userData = ["JhoN", "✅", 21];
console.log(userData[0]);
// Example 3 - Another way to use Tuples in TypeScript (with labeled)
const userLabeled = [
    "JhoN",
    "✅",
    21,
];
console.log(userLabeled);
// Example 4 - Using Tuples with Spread Operator
const fruitList = ["🍍", "🍊", "🍎", "🍉", "🥭"];
console.log(...fruitList);
// Example 5 - Heterogeneous Tuple List
const fruitData = [5, true, ...fruitList];
console.log(fruitData);
// Example 6 - Function use with Tuples
function userList(names, years) {
    return [...names, ...years];
}
const result = userList(["JhoN", "Carlos"], [21, 12]);
console.log(result);
function createPeople(...names) {
    return [...names];
}
console.log(createPeople("Jhonata", "Moura"));
console.log(createPeople("Jhonata", "Klisman", "Moura"));
