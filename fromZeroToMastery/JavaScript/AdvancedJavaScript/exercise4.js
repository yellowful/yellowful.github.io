//Solve these problems:

//#1 Create a one line function that adds adds two parameters

const add = (num1) => (num2) => num1 + num2;
add(2)(3);
const add7 = add(7);
add7(5);//7+5

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)//13
//當我們希望addToTen是個function時，就可以讓addTo(10)回傳一個function，這就是closure

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
//(30) => (b) => a + b;
//(b) => 30 + b;
//(1) => 30 + 1;
//31

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

//curriedSum(5)
//(5) => (b) => a + b;
//(b) => 5 + b;
//add5(12);
//(12) => 5 + 12;
// 17
//currying讓原本curriedSum(a)(b)，利用closure變成add5(b)的過程，目的是簡化輸入參數。

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

//(a) => f(g(a));
//(a) => add1(add5(a));
//(10) => add1(add5(10));
//(10) => add1(15);
//(10) => 16

//What are the two elements of a pure function?

//deterministic：相同input，會獲得相同output。
//no side effect：不會有變數傳值出去，產生意外的影響，例如在function裡設一個windows的變數。
//要傳值出去，都是透過return傳值。也不是靠著外部的變數來產生結果，都是靠著input來算值。

