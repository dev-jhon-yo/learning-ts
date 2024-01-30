export {};

//Example 1 - Use of switch...case
const flowers = 'tulip';

switch (flowers) {
  case 'rose':
    console.log('Roses are red');
    break;
  case 'violet':
    console.log('Volets are blue');
    break;
  case 'tulip':
    console.log('Tulips are white');
    break;

  default:
    console.log('❌ Please select another flower!');
}

//Example 2 - Use of switch...case

const workingDays = 5;

switch (workingDays) {
  case 0:
    console.log('Sunday');
    break;
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;

  default:
    console.log('❌ Not a working day');
}
