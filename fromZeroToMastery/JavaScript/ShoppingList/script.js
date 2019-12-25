var button = document.querySelector("#enter");
var input = document.querySelector("#inputItem");
var ul = document.querySelector("ul");

function clickButton(){
    if(input.value.length > 0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        //li.appendChild裡不能直接放文字，而是text node
        ul.appendChild(li);
        input.value = "";
    }
}

function enterItem(event){
    if(input.value.length >0 && event.charCode == 13){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
}


button.addEventListener("click",clickButton);

input.addEventListener("keypress",enterItem);
//event竟然不需要當作argument傳遞
//這叫callback function，clickButton和enterItem被呼叫時並不會執行
//只有事件被觸發時，()才會被放進去，也就是被執行，(event)也才自動被傳遞

