//const s = "leetcode"
const s = "addaaddaaaafg"

const arrayCal = s.split("");
const loopNumber = s.length;
let hasUniq = false;

if(!loopNumber || loopNumber <3){
    //return -1;
     return -1;
} else if(isPaired(arrayCal)){
    for(i in arrayCal){
        hasUniq = isUnique(arrayCal[i],arrayCal);
        if(hasUniq === true) {
            return i;
        }
    }
    return -1;
} else {
    return -1;
}


function isPaired(arrayCal){
    let i = 0;
    for(itemOutside of arrayCal){
        let numOfSame = 0;
        arrayCal.forEach((itemInside) =>{
            if (itemInside===itemOutside){
                numOfSame++;
            }
        })
        if(numOfSame>1){
            return true;
        }
//        debugger;
        if (i === (arrayCal.length-2)){
            return false;
        }
        i++;
//        debugger;
    }
}



function isUnique(inputItem,inputArray){
    let length = inputArray.length
    for (let i=0;i<length;i++){
        let arrayDistinct = inputArray.filter(
            item=>{
                if (inputItem != item) {return true}
            });
        if(arrayDistinct.length === (length-1)){
            return true;
        } else { return false}
    }
}

//const s = "addaaddaaaafg"
//const arrayCal = s.split("");

//let result = isUnique(arrayCal[1],arrayCal);
//console.log(result);