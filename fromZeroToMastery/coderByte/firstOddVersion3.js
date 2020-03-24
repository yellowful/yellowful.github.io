
const s = "cc"

var firstUniqChar = function(s) {
    const arrayCal = s.split("");
    const length = arrayCal.length;
    if(length===0){
        return -1;
    } else if (length===1){
        return 0;
    } else{
        for (i in arrayCal){
            let outSide = arrayCal[i];
            let uniqueArray = arrayCal.filter(inside => inside != outSide);
            //debugger;
            if (uniqueArray.length === (length-1)){
                //debugger;
                return i;
            }
        } 
        return -1   
    }
};

let result = firstUniqChar(s);
console.log(result);