// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

let a = 'test';
const b = true;
let c = 789;



// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

//const {firstName, lastName, age, eyeColor} = person;

// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

//var okObj = {a,b,c};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

//var message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

// function isValidAge(age = 10) {
//     return age;
// }

// Symbol
// Create a symbol: "This is my first Symbol"

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

// var us = true;
// var loc = false;
// const whereAmI = (us, loc) => {
//     if(us && loc){
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }

// console.log(whereAmI(us, loc));


var iTest = 30;
function fTest (){
    var iTest = 40;
    console.log("inside",iTest);
}

fTest();
console.log("outside",iTest);
//裡外不同

var iTest = 30;
if (true){
    var iTest = 40;
    console.log("inside",iTest);
}

console.log("outside",iTest);
//這裡的var會污染外面，和function用法不同，比較confusing，也不容易debug

let iTest = 30;
if (true){
    let iTest = 40;
    console.log("inside",iTest);
}

console.log("outside",iTest);




const name = 'john snow';
const obj = {
    [name]:'hello',
    [1+3]:9
}