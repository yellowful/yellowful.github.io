//387. First Unique Character in a String

const s = "dddccdbba"

var firstUniqChar = function(s) {

    let arrayCal = s.split("");//變陣列
    let tempArray=[];
    while (true){
        let lengthS = arrayCal.length;
        if(lengthS===1){
            return s.indexOf(arrayCal[0]);//只有一個字的話，他就是答案
        } else if(lengthS===0){//空字串的話，就是不存在
        return -1} else {
            tempArray = arrayCal.filter(
                item => item != arrayCal[0]
            )//把不重複的挑出來
            if(tempArray.length === (arrayCal.length -1)){
                return s.indexOf(arrayCal[0]);//跳出來如果只少了一個item，那這個item的index就是答案
            } else {
                arrayCal = tempArray;//剩下的當成新的array，繼續比較
            }
        } 
    }
};

let result = firstUniqChar(s);
console.log(result);

/*
其他解法：一個迴圈把出現次數記錄下來，第二個迴圈把第一個1次的
心得：
1.就算解不出來也學到很多：
    leetcode怎麼用
    string轉array
    string.indexOf()
    pass by reference是.push()、.shift()這種本身變動的才是，如果又assign一個array的話，就會有新記憶體，是pass by value。
    debugger；更熟
    fuction寫法更熟
    Hash Map
    減少迴圈的層數







