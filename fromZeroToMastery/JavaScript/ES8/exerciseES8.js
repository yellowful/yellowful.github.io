// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
//trim把所有空格刪掉，padEnd的第一個參數是在string後加上多少字元，第二個參數是加上的字元是什麼。


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

let tempArray = Object.entries(
  obj).map((element) => {
    return element.reduce(
      (acc,value) => {return `${acc} ${value}`}
    );
  }
);
//.map()需要有return，因為非一行而已


console.log(
  tempArray.reduce(
    (acc,value) => {return `${acc} ${value}`}
  )
);
//------------------------------


let valueOfObj = Object.keys(obj).map(keyObj => obj[keyObj]);
console.log(valueOfObj);