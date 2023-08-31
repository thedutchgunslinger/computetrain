import Person from "person";

export default class School extends Person {
  constructor(name, lastName, age, classRoom) {
    super(name, lastName, age);
    this.classRoom = classRoom;
  }
}
