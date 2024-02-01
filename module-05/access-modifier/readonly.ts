export {};

// Example 1
class Functionary {
  readonly dataOfBirth: Date;

  constructor(dataOfBirth: Date) {
    this.dataOfBirth = dataOfBirth;
  }
}

const functionary = new Functionary(new Date(2002, 5, 31));
// functionary.dataOfBirth = new Date(2002, 5, 31); --> Cannot assign to 'dataOfBirth' because it is a read-only property.
console.log(functionary);

// Example 2 - Another way, basically a shorthand
class FunctionaryOne {
  constructor(readonly dataOfBirth: Date) {
    this.dataOfBirth = dataOfBirth;
  }
}

// Example 3 - Interface
interface UserInterface {
  id: number;
  name: string;
}

const userOne: Readonly<UserInterface> = {
  id: 89623,
  name: 'Jhonata',
};

// userOne.id = 11111 --> Cannot assign to 'id' because it is a read-only property.
// userOne.name = 'David' --> Cannot assign to 'name' because it is a read-only property.

const userTwo: UserInterface = {
  id: 89623,
  name: 'Jhonata',
};

// userTwo.id = 11111 --> There will be no error because the property has not been set to read-only
// userTwo.name = 'David' --> There will be no error because the property has not been set to read-only
