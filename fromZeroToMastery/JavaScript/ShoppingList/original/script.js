var button = document.getElementById("enter"); //輸入鈕
var input = document.getElementById("userinput"); //找到文字輸入
var ul = document.querySelector("ul"); //找到父元件
var deleteButtonAll = document.querySelectorAll(".delete"); //找到刪除鈕
var buttonListLength = deleteButtonAll.length; //設定刪除鈕數目

function inputLength() {
	return input.value.length;
} //算出輸入字元長度

function createListElement() {
	var deleteButton = document.createElement("button"); //產生一個刪除鈕
	deleteButton.appendChild(document.createTextNode("點我刪除")); //刪除鈕內的文字轉成Text Node的元件
	deleteButton.classList.add("delete"); //將刪除鈕加上一個class
	var sp = document.createElement("span"); //將書名變成span元件，以利與刪除鈕分離
	sp.appendChild(document.createTextNode(input.value)); //將輸入的文字轉成text node的元件
	var li = document.createElement("li"); //設定li為一個list元件。
	li.appendChild(sp); //將sp元件加入這個list中
	li.appendChild(deleteButton); //將刪除鍵加入這個list中
	ul.appendChild(li); //將這個list加入ul中
	input.value = ""; //輸入後，將輸入處清空
} //產生一個list內的元件

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		resetList(); //增加了一個list，就應該讓新增的元件有被監聽
	}
} //確認輸入處有字，才會執行產生list的函數

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		resetList(); //增加了一個list，就應該讓新增的元件有被監聽
	}
} //監聽到按enter了，才會執行產生list的函數


function deleteAfterClick(eventDelete){
	eventDelete.target.parentElement.remove(); //將鍵鈕的父元件刪除
	buttonListLength--; //按鍵刪除了，整個List長度要減1才正確
} //監聽到按刪除鍵了，才會將按鍵的父元件刪除

function listenDeleteButtons(indexOfDelete){
	deleteButtonAll[indexOfDelete].addEventListener("click", deleteAfterClick);
} //將某一刪除鍵設定為監聽狀態

function resetList(){
	deleteButtonAll = document.querySelectorAll(".delete") //因為新增完了list元件，所以重抓所有的刪除鍵
	buttonListLength = deleteButtonAll.length; //也重算了刪除鍵的數量
	listenDeleteButtons(buttonListLength-1); //設定新增的刪除鍵有被監聽
} //增加新元件時，所需要將新增的元件設定為監聽中

button.addEventListener("click", addListAfterClick); //監聽加書單確認鍵

input.addEventListener("keypress", addListAfterKeypress); //監聽enter鍵是否被按

ul.addEventListener("click",function(e){
	if (e.target.tagName == "SPAN"){	 
		e.target.classList.toggle("done");
	}
}); //監聽ul裡，哪一個span被按了，按了的話要加上刪除線

for(i=0; i<buttonListLength; i++) {
	listenDeleteButtons(i);
} //網頁載入時，將每一個刪除鍵設定為監聽


