var database = [{
    username:"David Lau",
    password:"1234"
},
{
    username:"Neil Tzeng",
    password:2345
},
{
    username:"Micheal Lin",
    password:3456
}
];

var newsfeed = [
    {
        username:"David Lau",
        timeline:"一切都是為了生活"
    },
    {
        username:"Neil Tzeng",
        timeline:"我的Bosch洗碗機終於裝好了"
    },
    {
        username:"Micheal Lin",
        timeline:"明天飛北京兒"
    }

];

var promptName = prompt("歡迎來到假臉書，請輸入使用者名稱：");
var promtPassword = prompt("請輸入您的密碼：");

function signInCheck(logInName, logInPassword, i){
    if (logInName == database[i].username && logInPassword == database[i].password ){
        console.log("Hi " + database[i].username +
        ' , 大家的動態如下:', newsfeed);
    } else if (logInName == database[i].username) {
        console.log("Hi " + database[i].username +
        " ,你的密碼錯誤，你是不是偷用別人的帳號啊？請再試試");
    } else if (i == listLength-1){
        console.log("沒這個帳號，請檢查您的帳號是否有誤？");
    }
}

var listLength = database.length;
var index = 0;

while (promptName != database[index].username && index < listLength-1){
    index++;
}

signInCheck(promptName, promtPassword, index);

