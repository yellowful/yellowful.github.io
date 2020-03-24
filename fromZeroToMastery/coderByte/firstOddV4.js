const s = "dddccdbba"

var firstUniqChar = function(s) {
    let arrayCal = s.split("");
    const lengthS = arrayCal.length;
    if(lengthS===0){
        return -1;
    } else if (lengthS===1){
        return 0;
    } else{
        let tempArray=[];
        while (true){
            tempArray = arrayCal.filter(
                item => item != arrayCal[0]
            )
            if(tempArray.length === (arrayCal.length -1)){
                return s.indexOf(arrayCal[0]);
            } else if(tempArray.length===1){
                return s.indexOf(tempArray[0]);
            } else if(tempArray.length===0){
                return -1
            } else{
                arrayCal = tempArray;
            }
        }
    }
};

let result = firstUniqChar(s);
console.log(result);
