function findTheMin(inputArray){
        let minItem = inputArray.reduce((acc,items) => {
            if(acc > items){
                acc = items;
            }
            return acc;
        } ,inputArray[0]
    )
    return minItem;
}//輸入arry，輸出最小值

function arrangeTheMin (inputArray, minItem){
    let arrayFromMin = inputArray.filter(items => items === minItem);
    let restArray = inputArray.filter(items => items != minItem);
    return [arrayFromMin,restArray];
}//輸入一個最小值，和一個array，輸出一個最小值組成的array，和一個剩下的值組成的array


let numberArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let resultArray = [];

while(numberArray.length != 0){//輸入的array不是空集合的話就繼續
    let tempMin = findTheMin(numberArray);//找出輸入array的最小值
    let tempArray = arrangeTheMin(numberArray,tempMin);
    //把和最小值一樣的元素組成一個array，不一樣的元素組成另一個array
    resultArray.push(tempArray[0]);//每跑一次，就把最小值的array加入答案中
    numberArray = tempArray[1];//每跑一次，就把輸入的array替換成剩下的元素組成的array
}

console.log(resultArray);


//------------------------------------

//輸入firstNumber和剩下的array，return符合的secondNumber或undefined
function findTheRest(parentItem,restArray){   
    let sumArray = undefined;//預設第二個數不符需求
    sumArray = restArray.filter(
        (item) => {
            return (item + parentItem) === sum;//告訴filter，兩數相加是否等於10
        })//濾出符合的，存成array
    return sumArray[0];//回傳array，或預設值
}

let inputArray = [1,2,3,4,5,6,7,8];
let sum = 10;//以上為輸入，以下用
//1+2、1+3⋯⋯1+8
//2+3⋯⋯
//7+8來判斷
let restArray = inputArray.concat();
//複製一個可以一直減少的array，用來判斷第二個數
let result = undefined;//第二個數預設不符需求
let secondNumber = [];//用來儲存第二個數的array

//過濾符合條件的第一個數出來，存成array，順便把符合的第二個數也存
//在secondNumber這個array中
let firstNumber = inputArray.filter((parentItem) => {
        restArray.shift();//扣掉firstNumber剩下的array
        result = findTheRest(parentItem,restArray);
        //輸入firstNumber和剩下的array，return符合的secondNumber或undefined
        if (result != undefined){
            secondNumber.push(result);//若有符合的secondNumber就存到secondNumber中
            return true//這個fisrtNumber也要存起來
        } else {
            return false//result是undefined，所以這個fisrtNumber不存起來
        }
    }
)
let answerArray = [firstNumber,secondNumber];
console.log(answerArray);

//--------------------


function hexToRgb(hexNumber){
    let rgbNumber1 = parseInt(hexNumber[1]+hexNumber[2],16);
    let rgbNumber2 = parseInt(hexNumber[3]+hexNumber[4],16);
    let rgbNumber3 = parseInt(hexNumber[5]+hexNumber[6],16);
    //parseInt(a,16);a是字串，16是要填入字串a是幾進位的，而不是要轉幾進位的。
    return `rgb(${rgbNumber1},${rgbNumber2},${rgbNumber3})`;
}//輸入hex字串，輸出rgb字串

function rgbToHex(rgbNumber){
    let hexNumber = rgbNumber.slice(4,-1).split(",");
    //slice把字串第5到倒數第2個字切出來，split把逗號分開的字串轉成，array
    hexNumber = hexNumber.map(
        (items) => {
            return parseInt(items).toString(16);
            //把數字轉成16進位的字串
        });  
    return `#${hexNumber[0]}${hexNumber[1]}${hexNumber[2]}`;
}//輸入rgb字串，輸出hex字串


//const input ='rgb(155,125,30)';
const input ='#00ff11'
let output = 'format incorrect';

//假如字串開頭是井字，就丟去轉rbg，假如字串開頭是r，就丟去轉hex
if(input[0] === '#'){
    output = hexToRgb(input);
} else if (
    input[0] ==='r' || input[0] ==='R'
    ){
    output = rgbToHex(input);
}

console.log(output);













