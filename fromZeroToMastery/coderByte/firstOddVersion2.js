const s = "addaaddaaaafg"

const arrayCal = s.split("");
const loopNumber = s.length;
let hasUniq = false;

if(!loopNumber){
    return -1;
} else if(loopNumber === 1){
    return 0;
} else {
    for(i in arrayCal){
        hasUniq = isUnique(arrayCal[i],arrayCal);
        if(hasUniq === true) {
            return i;
        }
    }
    return -1;
};


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
