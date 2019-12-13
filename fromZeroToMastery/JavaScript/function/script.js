
var age = prompt("請輸入您的年紀:");

function checkDriverAge(age) {
    if (age > 18){
    console.log("衝吧，油門摧下去吧");   
    } else if (age == 18) {
        console.log("恭喜您，第一年開車，很興奮吧？衝吧");
    } else {
        console.log("拍謝，您年紀不符合規定，請下車");
    }
    
}
