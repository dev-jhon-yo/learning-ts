// Example 1 - Optional Parameter
function peopleData(id: number, name: string, email?: string) {
  console.log(`ID: ${id} | NAME: ${name}`);

  if (email != undefined) {
    console.log(`ID: ${id} | NAME: ${name} | EMAIL: ${email}`);
  }
}

peopleData(8907412, 'Jhonata');
peopleData(8907412, 'Jhonata', 'dev.jhon.yo@gmail.com');

// Example 2
function logMessage(message: string, userId?: number) {
  const timer = new Date().toLocaleTimeString();

  const hasUserId =
    userId != undefined
      ? `[${timer}] ${message} | userID: ${userId}`
      : `[${timer}] ${message} | userID: User not Found!`;
  console.log(hasUserId);
}

logMessage('Update Page!');
logMessage('✅ User successfully logged in', 1242345);

// Example 3
type People = {
  id: number;
  name: string;
  age?: number;
  email?: string;
};

let people: People;

people = {
  id: 112233,
  name: 'Jhonata Moura',
};

console.log(people);
