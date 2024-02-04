export {};

// Example 1 - Get
class Square {
  private _width = 6;
  private _height = 12;

  get squareCalculate() {
    return this._height * this._width;
  }
}

console.log(new Square().squareCalculate);

// Example 2 - Set
class People {
  name: string;

  returnName(setPeopleName: string) {
    this.name = setPeopleName;
  }
}

const people = new People();
people.returnName('Jhonata');

console.log(`My name is: ${people.name}`);

// Example 3 - Get [More Explained]
class Student {
  private _name = 'Jhonata Moura';
  private _semester: number;
  private _course: string;

  public get studentName() {
    return this._name;
  }
}

const student = new Student();
const result = student.studentName;

console.log(result);

// Example 4 - Set [More Explained]
class StudentTwo {
  name: string;
  semester: number;
  course: string;

  constructor(
    studentName: string,
    studentSemester: number,
    studentCourse: string,
  ) {
    this.name = studentName;
    this.semester = studentSemester;
    this.course = studentCourse;
  }

  public get courses() {
    return this.course;
  }

  public set courses(setCourse: string) {
    this.course = setCourse;
  }
}

const studentTwo = new StudentTwo('Jhonata Moura', 5, 'Information System');
console.log(studentTwo);

// Setter call
studentTwo.courses = 'Systems Analysis and Development';

// Getter call
console.log(`Update Course: ${studentTwo.course}`);
