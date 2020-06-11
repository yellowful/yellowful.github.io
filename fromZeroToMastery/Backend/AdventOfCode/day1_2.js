//Advent of Code 2015 day 1.2


const fs = require('fs');
//呼叫檔案library

console.time('santa')
//計時

fs.readFile('./input.text',(err,data)=>{
    if(err){
        console.log(err)
    }
    //如果讀檔錯誤，列出錯誤

    const dataList = data.toString().split('');
    //字串改陣列   

    let i=0;
    let floor = 0;
    while(floor >=0 || i===dataList.length-1){
        if(dataList[i]==='('){
            floor = floor+1;
            //open parenthesis就加1樓
        } else {
            floor = floor-1;
            //close parenthesis就減1樓
        }
        i++;
    }
    //當floor是負的，或最後一個元素了，就跳出

    console.log('result',i);//1783，不可以i-1，因為i是position-1
    console.timeEnd('santa');//4.183ms
})
//讀檔

//原本答案錯了的原因是把結果弄成i-1了
//但是因為arry的index是position-1，所以答案不應該再-1了

//debugg的過程發現程式有個錯誤
//判斷式i===dataList.length也應該要-1
//一開始沒發現
//發現的過程蠻重要的
//把相關變數都console.log出來才發現，如果(()))
//也就是floor是-1剛好是最後一樓時，會出現undefined狀況
//因為i++會超過上限，所以dataList[i]會undefined

//這題應該是要加強index的觀念