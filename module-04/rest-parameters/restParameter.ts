export {};

// Example 1
function sumNumbers(...numbers: number[]) {
  let total = 0;
  numbers.forEach((number) => (total += number));

  return total;
}

console.log(sumNumbers(30, 20));
console.log(sumNumbers(40, 50, 50, 40, 20));

// Example 2
function fruitList(message: string, ...fruits: string[]) {
  return `${message} ${fruits.join(', ')}`;
}

console.log(
  fruitList('You need to go to the fair to buy...:', '🥥', '🍓', '🍌', '🍍'),
);

// Example 3
class Products {
  public showProducts(...products: string[]): void {
    for (const produtc of products) {
      console.log(products);
    }
  }
}

const informaticDepartment: Products = new Products();

console.log('All IT department products available in stock...: ');

informaticDepartment.showProducts(
  'Mouse',
  'Notebook',
  'USB',
  'Monitor',
  'Keyboard',
  'WebCam',
);
