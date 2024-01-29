// Example 1 - Functions
function logError(message: string): void {
  console.log(message);
}

const logSuccess = (message: string): void => {
  console.log(message);
};

logError('❌ Error Message!');
logSuccess('✅ Success Message!');

// Example 2 - Void in variables
let exampleVariable: void;
exampleVariable = 1;
exampleVariable = null;
exampleVariable = undefined;

console.log(exampleVariable);
