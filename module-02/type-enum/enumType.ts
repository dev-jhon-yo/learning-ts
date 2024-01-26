// OBS: ENUMS ARE PROBLEMATIC AND FLAWED, TEHRE ARE OTHER BETTER OPTIONS!

// Example 1 - Numeric Enums
enum Language {
  Portuguese,
  English,
  Spanish,
  French,
}

console.log(Language);

// Example 2 - String Enums
enum Day {
  Sunday = 'SUN',
  Monday = 'MON',
  Tuesday = 'TUE',
  Wednesday = 'WED',
  Thursday = 'THU',
  Friday = 'FRI',
  Saturday = 'SAT',
}

console.log(Day);

// Example 3 - How can we access an Enum value with a key: (using const)
// const enum Food {
//   Hamburger,
//   Pasta,
//   Pizza,
//   Pie,
//   Barbecue,
// }

// function food(c: Food) {
//   return 'Very appetizing food!';
// }

// console.log(food(Food.Pizza));
// console.log(food(Food.Barbecue));
// console.log(food(5));

const enum Food {
  Hamburger = 'Hamburger',
  Mass = 'Mass',
  Pizza = 'Pizza',
  Pie = 'Pie',
  Barbecue = 'Barbecue',
}

function food(c: Food) {
  return 'Very appetizing food!';
}

console.log(food(Food.Pizza));
console.log(food(Food.Barbecue));
// console.log(food(5));

// Example 4 - When to use Enum?!
enum Task {
  Todo,
  Progress,
  Done,
}

const dataTask = {
  id: 1,
  status: Task.Done,
  description: 'Congratulations! Task completed successfully! 🥳',
};

if (dataTask.status === Task.Done) {
  console.log('Send email: Task Complete ✅');
}
