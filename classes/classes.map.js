import Person from "person";
import School from "school";
import Teacher from "teacher";
import Student from "student";


const myEnum = {
  Red: "#ff0000",
  Green: "#00ff00",
  Blue: "#0000ff",
};
Object.freeze(myEnum);

export { Person, School, Teacher, Student, myEnum };