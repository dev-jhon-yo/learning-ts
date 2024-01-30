// Example 1 - loop for

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Example 2 - for ...of - (returns an array, list, or tuple collection)
const arrayNumbers = [10, 20, 30, 40, 50];

for (const i of arrayNumbers) {
  console.log(i);
}

// Example 3 - for ...in - (returns an array, list, or tuple collection)

const arrayNumbersTwo = [5, 4, 3, 2, 1, 0];

for (const i in arrayNumbersTwo) {
  console.log(i);
}

// sort()
const numericalOrder: number[] = arrayNumbersTwo.sort();
console.log(numericalOrder);
