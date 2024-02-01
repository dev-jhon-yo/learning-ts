export {};

// Example 1 - Access Modifier: public
class Student {
  id: number;
  name: string;
}

const student = new Student();

student.id = 89623;
student.name = 'Jhonata';

console.log(`Student ID: ${student.id}`);
console.log(`Student Name: ${student.name}`);

// Example 2 - Access Modifier: private
class StudentTwo {
  id: number;
  name: string;
  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  returnStudentData(): string {
    return `
      Student ID: ${this.id}
      Student Name: ${this.name}
      Student Age: ${this.age}
    `;
  }
}

const studentTwo = new StudentTwo(89623, 'Jhonata', 21);
// console.log(studentTwo.age) --> Error: Property 'age' is private and only accessible within class 'StudentTwo'
console.log(studentTwo.returnStudentData());

// Example 3 - Access Modifier: protected
class BaseEntity {
  id: number;
  protected name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

class StudentTrhee extends BaseEntity {
  private course: string;

  constructor(id: number, name: string, course: string) {
    super(id, name);
    this.course = course;
  }

  returnStudentData(): string {
    return `
      Student ID: ${this.id}
      Student Name: ${this.name}
      Student Course: ${this.course}
    `;
  }
}

const studentTrhee = new StudentTrhee(89623, 'Jhonata', 'Typescript');
console.log(studentTrhee);
