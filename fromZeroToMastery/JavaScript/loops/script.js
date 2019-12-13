var todoList = [
    "掃地",
    "刷牙",
    "運動",
    "學js",
    "學西文"
];

/*
for (i=0; i<todoList.length; i++) {
    console.log("for loop is: "+todoList[i]+" ",i);
}

var w = 0;
while(w<todoList.length) {
    console.log("while loop is: "+todoList[w]+" ",w);
    w++;
}

var d = 0;
do {
    console.log("do while loop is: "+todoList[d]+" ",d);
    d++;
} while (d<todoList.length)

//以上都相同。

*/

/*
for (i=0; i<todoList.length; i++) {
    todoList.pop();
    console.log("for loop is: "+todoList+" ",i+" ",todoList.length)
}
//todoList.length會變，所以還沒把element丟光就停止了。
*/

/*
var todoListLength = todoList.length;
for (i=0; i<todoListLength; i++) {
    todoList.pop();
    console.log("for loop is: "+todoList+" ",i+" ",todoList.length);
}
//設一個變數，讓他變成定值就可以一直丟到光。
*/

/*
for (i=0; true; i++) {
    console.log("for loop is: "+todoList[i]+" ",i);
}
//無線迴圈，不需要i和i++，所以用while將比較精簡
//無線迴圈會讓chrome當掉
*/

/*
var w = 5;
while(w<todoList.length) {
    console.log("while loop is: "+todoList[w]+" ",w);
    w++;
}

var d = 5;
do {
    console.log("do while loop is: "+todoList[d]+" ",d);
    d++;
} while (d<todoList.length)

//while和do while的差別是do while無論如何，都會做第一次。
*/

todoList.forEach(function(f1,f2){
    console.log(f1,f2);
});