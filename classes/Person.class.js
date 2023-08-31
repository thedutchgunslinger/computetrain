export default class Person {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name} ${this.lastName} and I am ${this.age} years old`;
  }

  test() {
    return "test";
  }
}
