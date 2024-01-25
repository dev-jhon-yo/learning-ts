// Example 1 - Use of Brackets
const fruits1: string[] = ["🍍", "🍊", "🍎", "🍉", "🥭"];
console.log(fruits1[2]);

// Example 2 - Array Object
const fruits2: Array<string> = ["🍍", "🍊", "🍎", "🍉", "🥭"];
console.log(fruits2[0]);

// Example 3 - Adding more strings with method 'push'
const languages: Array<string> = ["Portuguese", "English", "Spanish", "French"];

console.log(languages);
languages.push("Mandarin");
console.log(languages);
languages.push("Italian");
console.log(languages);

// Example 4 - Identify array size with method 'length'
const arraySize: Array<string> = ["Portuguese", "English", "Spanish", "French"];
console.log(arraySize.length);

// Example 5 - Array with Spread Operator
let numberList: Array<number> = [0, 1, 2, 3, 4, 5];
numberList = [...numberList, 6, 7, 8, 9, 10];

console.log(numberList);

// Example 6 - Array with Interation Loop
const codeLanguages: string[] = new Array("Javascript", "Python", "PHP", "C#");

function langFunction(langs: string[]) {
  for (let i = 0; i < langs.length; i++) {
    console.log(codeLanguages[i]);
  }
}

langFunction(codeLanguages);
