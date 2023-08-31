import School from "school";

export default class Teacher extends School {
  constructor(name, lastName, age, subject, classRoom) {
    super(name, lastName, age, classRoom);
    this.subject = subject;
  }

  sayHello() {
    return `${super.sayHello()} and I teach ${this.subject} in classRoom ${
      this.classRoom
    } ${this.test()}`;
  }
}
