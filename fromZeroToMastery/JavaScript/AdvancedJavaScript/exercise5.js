// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

let newArray =[];
array.forEach((person) => {newArray.push(`${person.username}!`)});
console.log(newArray);
//之所以需要先設一個newArray[]，是因為forEach不替換值，不回傳值，只做事。
//所以需要先設一個newArray，讓newArray可以放在forEach內部去被放值(push)。


//Create an array using map that has all the usernames with a "? to each of the usernames
let newArray = array.map(person => `${person.username}?`);
console.log(newArray);


//Filter the array to only include users who are on team: red

let newArray = array.filter((person) => {return person.team == "red"});
console.log(newArray);
//參數是person，而不是person.team
//return可省

//Find out the total score of all users using reduce
 
const result = array.reduce((acc,person) => {return acc + person.score},0);
console.log(result);


// (1), what is the value of i?
//0～5

// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
// 	return num * 2;
// })

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

// let allArray = array.map((person,i1) => {
//   person.items = person.items.map((newItem,i2) => { return `${newItem}!`});
//   return person;})
// console.log(allArray);