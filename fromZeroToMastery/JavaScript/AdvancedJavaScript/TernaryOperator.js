function election(result){
    if(result==="win"){
        return true;
    }
    else{
        return false;
    }
}


var result = prompt('please enter the result');
var prize = election(result) ? 100000 : 0;
console.log("You've got NT " + prize);