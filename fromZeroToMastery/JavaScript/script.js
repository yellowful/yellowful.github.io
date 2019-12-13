function multiply(a,b){
return a*b;
}

//var c = multiply();
// console.log(c(4,5));
//錯誤，因為第一行一定要有引數，c才會是multiply的回傳值

var c = multiply(4,5);
console.log(c);


// var d = function add(e,f){
//     return e+f;
// }
//錯誤，因為要將d設為物件的話，要用匿名function

var d = function(e,f){
    return e+f;
}

console.log(d(4,9));