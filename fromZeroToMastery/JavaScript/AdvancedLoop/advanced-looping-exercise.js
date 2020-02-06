const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  if (arr.length === 0){
    return 0;
  } else {
    let result = arr.reduce(
      (acc,element) => {
        if(typeof(acc) != 'number'){
          return element;
        } else if (acc > element){
          return acc;
        } else {
          return element;
        }
      },arr[0]
    );
    return result;
  }  
}

console.log(biggestNumberInArray(array));
console.log(biggestNumberInArray(array2));
console.log(biggestNumberInArray(array3));

function biggestNumberInArray2(arr) {
  if (arr.length === 0){
    return 0;
  } else {
    let result = arr[0];
    for (let i=1;i < arr.length;i++){
      if (result < arr[i] || typeof(result) != 'number'){
        result = arr[i];
      } 
    }
    return result;
  }  
}
console.log(biggestNumberInArray2(array));
console.log(biggestNumberInArray2(array2));
console.log(biggestNumberInArray2(array3));

function biggestNumberInArray3(arr) {
  if (arr.length === 0){
    return 0;
  } else {
    let result = arr[0];
    for(element of arr){
      if(result < element || typeof(result) != 'number') {
        result = element;
      }
    }
    return result;
  }
}
console.log(biggestNumberInArray3(array));
console.log(biggestNumberInArray3(array2));
console.log(biggestNumberInArray3(array3));


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  for(item in basket){
    if(item === lookingFor){
      return `Yes, there it is: ${lookingFor}.`
    }
  }
  return `No, there is no anything you want.`
}

checkBasket(amazonBasket, 'books');




//-----------------------
const flattened = [[1,2],[3,4],[5,6]].reduce(
  (acc,items) =>{
    debugger;
    return acc.concat(items);
  },[]);
  console.log(flattened);
  