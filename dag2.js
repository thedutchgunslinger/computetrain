import {Student, Teacher } from "utils"
// const dialog = document.querySelector("#dialog");
// const dialogBtn = document.querySelector("#openDialog");
// const dialogCloseBtn = document.querySelector("#closeDialog");

// dialogBtn.addEventListener("click", openDialog);
// dialogCloseBtn.addEventListener("click", () => dialog.close());

// function openDialog(){
//     dialog.showModal();
// }


// const myResizeObserver = new ResizeObserver((entries) => {
//     console.log(entries);
//     const box = entries[0];
//     if(box.contentRect.width < 250){
//         box.target.style.background = "green";
//     } else {
//         box.target.style.background = "red";
//     }
// });

// myResizeObserver.observe(document.querySelector("#box"));



class Car {
    static cars = 0;

    static startRace(){
        console.log(`starting the race with ${Car.cars} cars`)
    }

    constructor(brand, model, year, color = "black"){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;

        Car.cars++;
        
    }

    set setColor(colorName){
        this.color = colorName;
    }

    drive(){
        console.log("vroom vroom");
    }

    log(){
        console.log(`this is a ${this.color} ${this.brand} ${this.model} from ${this.year}`)
    }

    toString(){
        return `this is a ${this.color} ${this.brand} ${this.model} from ${this.year}`
    }

}

const car1 = new Car("BMW", "M3", 2020);
const car2 = new Car("Audi", "A3", 2019, "blue");
const car3 = new Car("Mercedes", "C", 2018, "black");
const car4 = new Car("VW", "Golf", 2017, "white");

car1.log();
car2.log();

// car1.setColor = "green";
// car1.color = "pink"
car1.log();


const myObj = {
    firstName: "",
    lastName: "",
    set first(name){
        this.firstName = name.toUpperCase();
    },
    set last(name){
        this.lastName = name.toUpperCase();
    },

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}


myObj.firstName = "John";
myObj.last = "Doe";

console.log(myObj.fullName);
console.log(Car.cars)
Car.startRace();








const student1 = new Student("John", "Doe", 20, 10, "A");
console.log(student1.sayHello());


const teacher1 = new Teacher("Noah", "Beij", 22, "Advanced JS", "Virtuale Classroom (aka teams)")

console.log(teacher1.sayHello());




