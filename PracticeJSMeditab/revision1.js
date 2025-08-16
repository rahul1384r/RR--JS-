// let name = "Rahul";
// console.log(`My name is ${name}`)

// let person = {name: "Rahul", age: 20};
// const {name, age} = person;
// console.log(name, age);

// // Default parameters
// function addNumbers(a, b=5){
//     console.log(a+b);
// }

// addNumbers(10);

// // Null Coelescing
// let a = 12 ?? 'Default Name';
// console.log(a)

// // Spread/rest
// let person = {name:"Rahul", age: 20};
// let src = {...person, sex: "Male"};
// console.log(src);

// function addNumbers(a,b, ...restNumbers){
//     console.log(restNumbers);
// }

// addNumbers(1,2,3,4,5,6,7,8,9);


// // Promises
// let response = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(22);
//         console.log("Hello I am asynchronous code");
//     }, 10000);
// })
// response
// .then((result) => console.log(result))
// .catch((err) => console.log(err))

// let num1;
// console.log(typeof(num1));  // undefined

// let num2 = null;
// console.log(typeof(num2));  // object tag = 0 (object)


// for_in
let person1 = {name: "Rahul", age: 20};
let src = {};
// for(let key in person1){
//     src[key] = person1[key];
// }

// src = Object.assign(person1);
// console.log(src);

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let newArr = arr.filter((value) => value%2 == 0);
// console.log(newArr);

// let newArr2 = arr.map((value, idx) => console.log(idx, value));

// let reduceArr = arr.reduce((accumulator, currentValue) => accumulator+currentValue, x1x);
// console.log(reduceArr);



// greet();
// function greet(){
//     console.log("Hello");
// }

// sayHii();
// var sayHii = function greet(){
//     console.log("Hii");
// }


