// let myArr1 = [1, 2, 3, 4, 5];
// const myArr2 = [6, 7, 8, 9, 10];


// console.log(myArr1);


// myArr1.push(6);

// console.log(myArr1);

// myArr1.pop();

// console.log(myArr1);

// myArr1.shift();

// console.log(myArr1);

// const myArr3 = myArr1.concat(myArr2);

// const myArr4 = [...myArr1, ...myArr2];

// console.log(myArr4);

// const filteredArr = myArr4.filter((item) => {
//     if(item % 2 === 0) {
//         return item;
//     } else if (item % 3 === 0){
//         return item;
//     }
// });


// console.log(filteredArr);


// const filteredArr2 = myArr4.filter((item) => {
//     if(item !== 3 ){ 
//         return item;
//     }
// });

// console.log(filteredArr2);

// console.log(myArr4.indexOf(3));


// const myArr5 = myArr4.map((item) => {
//     if(item % 2 === 0) {
//         return item *2;
//     } else if (item % 3 === 0){
//         return item *3;
//     } else {
//         return item = "nvt"
//     }
// })

// console.log(myArr5);

// myArr4.forEach(myFunc);

// function myFunc(item){
//     console.log(item);
// ;
// }

// const myArr6 = [1, 2, [3,4,5,6], 4, 5, [8,24,7,4,3,2, [7,6,3,7,3]], 7, 8, 9];

// console.log(myArr6);

// myArr7 = myArr6.flat(Infinity);

// console.log(myArr7);

// const mySet = new Set(myArr7);

// console.log(mySet);


// const myObj = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }

// const myObj2 = {
//   name: "John2",
//   age: 31,
//   city: "New York",
// };

// console.log(myObj);

// const myArr = [myObj, myObj2, {
//     name: "John3",
//     age: 32,
//     city: "New York",
// }];

// console.log(myArr);

// myArr.forEach((item) => {
//     console.log(item.name);
// });

// const name = myArr.name

// console.log(name);


// myObj.name = "Peter";

// console.log(myObj);


// function myFunc() {
//     let myLet = 1;
//     var myVar = 2;
//     console.log(myLet, myVar);
// }

// myFunc();


// myVar = 3;


// for(var i = 0; i < 10; i++) {
//     console.log(i);
// }

// for(let j = 0; j < 10; j++) {
//     console.log(i);
// }

// console.log(i);
// console.log(j);

// const myObj = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }

// console.log(myObj);

// myObj.name = "Peter";

// console.log(myObj);

// Object.freeze(myObj);

// myObj.name = "John";

// console.log(myObj);


// const text = "Hello World " + myObj.name + " " + myObj.age;

// const text2 = `Hello World ${myObj.name} ${myObj.age} years old`

// console.log(text2);

// const base = "http://localhost"
// const port = 3000;
// const endpoint = "/api/users";

// const url = base + ":" + (port + 1) + endpoint + "/1";

// const url2 = `${base}:${port + 1}${endpoint}/1`;

// console.log(url);
// console.log(url2);


// function1();


// function function1(){
//     let a = 1;
//     let b = 2;

//     console.log(function2(), a, b);

//     function function2(){
//         let c = 3;
//         let d = 4;
        
//         return a + b + c + d + function3();

//         function function3(){
//             let e = 5;
//             let f = 6;

//             return  c + d + e + f;
//         }
//     }

// }

// const p = document.querySelector("p");
// const h1 = document.querySelector("h1");

// h1.addEventListener("click", changeColorToRed);
// p.addEventListener("click", changeColorToRed);


// function changeColorToRed(){
//     this.style.color = "red";
// }

//  const PERSON_1 = {
//     name: "John",
//     lastName: "Doe",
//     age: 25
// }

// const PERSON_2 = {
//     name: "Jane",
//     lastName: "Doe",
//     age: 26
// }


// const PERSON = {
//     fullName: function() {
//         return `${this.name} ${this.lastName}`;
//     }
// }



// console.log(PERSON.fullName.call(PERSON_1));
// console.log(PERSON.fullName.apply(PERSON_2));


// function getFullName(){
//     return `${this.name} ${this.lastName}`;
// }

// console.log(getFullName.call(PERSON_1));
// console.log(getFullName.call(PERSON_2));

// console.log(PERSON.fullName());


// let reset = PERSON.fullName.bind(PERSON_1)

// console.log(PERSON.fullName.bind(PERSON_1));
// console.log(reset());



let myArr1 = [1, 2, 3, 4, 5];
// const myArr2 = [6, 7, 8, 9, 10];

// function myFunc(...args){
//     console.log(args);

//     args.forEach((item) => {
//         console.log(item);
//     })
// }


// myFunc(...myArr1, ...myArr2);


for(let item in myArr1){
    console.log(item);
}