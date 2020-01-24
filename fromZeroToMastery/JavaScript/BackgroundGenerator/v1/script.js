var firstPick = document.querySelector("#first-pick");
var secondPick = document.querySelector("#second-pick");
var selectHtml = document.querySelector("html");
var showValue = document.querySelector("#value-output")

function setbackground(){
    selectHtml.style.background = "linear-gradient(to right, " + 
    firstPick.value + ", " + 
    secondPick.value;
    showValue.innerHTML = selectHtml.style.background + ";";
    //.innerHTML .textContent都可以用
}

firstPick.addEventListener("input",setbackground);

secondPick.addEventListener("input",setbackground);

