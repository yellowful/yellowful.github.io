var array = ["Banana","Apples","Oranges","Blueberries"];
// array.shift(array);
//array.shift(array[2]);//沒有用，仍然只會將第一個移出。

array.sort();

console.log(array);

array.push("kiwi");

console.log(array);

array.shift();
console.log("shfit: " + array);

var newArray = [array[3], 
array[2], array[1], array[0]];

console.log(newArray);

var array2 = ["Banana",["Apples",["Oranges"],"Blueberries"]];
console.log(array2[1][1]);