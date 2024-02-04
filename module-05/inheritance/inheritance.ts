export {};

// Example 1
class Animal {
  move(distance = 0) {
    console.log(`Animal moved ${distance}m`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('WOOF, WOOF!');
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

// Example 2
class BaseEntity {
  constructor(private name: string, private surname: string) {
    this.name = name;
    this.surname = surname;
  }

  fullName(): string {
    return `${this.name} ${this.surname}`;
  }

  welcomeMessage(): string {
    return `🥳 Welcome ${this.name} ${this.surname}`;
  }
}

class User extends BaseEntity {
  constructor(name: string, surname: string, private role: string) {
    super(name, surname);
  }

  userLog(): string {
    return super.welcomeMessage() + ` | role: ${this.role}`;
  }
}

const user = new User('Jhonata', 'Moura', 'Developer');
console.log(user.fullName());
console.log(user.welcomeMessage());
console.log(user.userLog());
