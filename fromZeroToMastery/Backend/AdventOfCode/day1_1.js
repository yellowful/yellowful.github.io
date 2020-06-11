//Advent of Code 2015 day 1.1


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

    const floor = dataList.reduce((acc,item)=>{
            if(item==='('){
                return acc + 1
            }
            else {
                return acc -1
            }
        },0
    )
    //把open parenthesis當1，close parenthesis當-1，算總和

    console.log(floor);//232
    console.timeEnd('santa');//5.3ms
})
//讀檔
