export {};

// Example 1 - Class
class People {
  name: string;
  surname: string;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  fullName(): string {
    return `${this.name} ${this.surname}`;
  }
}

const people = new People('Jhonata', 'Moura');
console.log(people.fullName());

// Example 2 - Class without constructor
class Student {
  id: number;
  name: string;
}

const student = new Student();

student.id = 89623;
student.name = 'Jhonata';

console.log(`Student ID: ${student.id}`);
console.log(`Student Name: ${student.name}`);

// with contructor

class StudentTwo {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  listStudents(): void {
    console.log(`Student ID: ${student.id}`);
    console.log(`Student Name: ${student.name}`);
  }
}

const studentTwo = new StudentTwo(89623, 'Jhonata');
console.log(`Reading the ID: ${studentTwo.id}`);
console.log(`Reading the NAME: ${studentTwo.name}`);
