// Vaariables [Type Annotations]
const userName: string = "Jhonata";
console.log(userName);

// Arrays [Type Annotations]
const animals: string[] = ["Elephant", "Giraffe", "Dog", "Cat"];
console.log(animals);

// Objects [Type Annotations]
let cars: { name: string; year: number; price: number };

cars = { name: "Toyota Yaris Sedan XS", year: 2019, price: 80000 };
console.log(cars);

// Functions [Type Annotations]
function sum(num1: number, num2: number) {
  return num1 + num2;
}
console.log(sum(1, 1));
