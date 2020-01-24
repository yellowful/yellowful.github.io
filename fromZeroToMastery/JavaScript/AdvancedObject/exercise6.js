//Evaluate these:
//#1
[2] === [2] 
//false

{} === {} 
//false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;

console.log(`obj1=${object1.a},obj2=${object2.a},obj3=${object3.a},obj4=${object4.a}`);

object1.a 4
object2.a 4
object3.a 4
object4.a 5



//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method 
//that moo's her name, type and color. 


class Animal {
    constructor (name, type){
        this.name = name;
        this.type = type;
        console.log(`parent:${this.name}`);
    }
    walk (){
        console.log(`This animal is a ${this.type}, and it's name is ${this.name}.`);
    }
}

class Mamal extends Animal {
    constructor (name, type, colorMamal){
        super(name,type);
        console.log(`child:${this.name}`);
        this.colorcolorMamal = colorMamal;
    }
    sound (){
        console.log(`This Mamal is a ${this.type}, and it's name is ${this.name}.
         It's color is ${this.colorcolorMamal}.`);
    }
}

const cow1 = new Mamal('David','cow','black-white');
cow1.walk();
cow1.sound();

---------------------------------------------------------



let array1 = [1,2,3,4,5];
let array2 = array1;
let array3 = array1.concat();
array2[3] = 8;
let array4 = array1.concat(array3);
let array5 = array3.concat(array1)
console.log(`array1: ${array1}`);
console.log(`array3: ${array3}`);
console.log(`array4: ${array4}`);
console.log(`array5: ${array5}`);
------------------------------------------------

let object1 = {
    name: 'Richard',
    gender: 'male',
    age: '44',
    interests: {
        sports: 'badminton',
        programing: 'javascript',
        language: 'Spanish'
    }
}

let object2 = object1;//pass by reference
let object3 = Object.assign({},object1);//複製不到深層object
let object3_1 = {...object1}//和assign效果相同
let object4 = JSON.parse(JSON.stringify(object1));//複製的到深層object
object2.age = 25;
object2.interests.language = 'English';
console.log(object1);
console.log(object2);
console.log(object3);
console.log(object3_1);
console.log(object4);


