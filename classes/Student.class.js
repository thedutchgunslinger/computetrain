import School from "school";

export default class Student extends School {
  constructor(name, lastName, age, grade, classRoom) {
    super(name, lastName, age, classRoom);
    this.grade = grade;
  }

  sayHello() {
    return `${super.sayHello()} and I am in grade ${this.grade} in class ${
      this.classRoom
    }`;
  }
}
