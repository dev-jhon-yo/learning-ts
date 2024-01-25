"use strict";
// OBS: bigint type only available from tsconfig("target": "ES2020" or "ESNEXT")
// Example 1
const num1 = 23.0;
const num2 = 0x78cf;
const num3 = 0o577;
const num4 = 0b110001;
console.log("Number - Floating...: ", num1);
console.log("Number - Hexadecimal...: ", num2);
console.log("Number - Octal...: ", num3);
console.log("Number - Binary...: ", num4);
// Example 2
const big1 = 9007199254740991n;
const big2 = 9007199254740995n;
const big3 = 0x20000000000003n;
const big4 = 9007199254740995n;
console.log("Bigint..: ", big1);
console.log("Bigint - Binary...: ", big2);
console.log("Bigint - Hexadecimal...: ", big3);
console.log("Bigint - Octal...: ", big4);
