
let arrayTest = [1,2,3,4,5,6,7,8]
var _ = require('lodash');
console.log(_.without(arrayTest,3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomSelect(){
	color1.value = colorRandom();
	color2.value = colorRandom();
	setGradient();
}

function colorRandom(){
	var randomColorHex = ['#','0','0','0','0','0','0'];
	var hexString = "0123456789ABCDEF";
	var hexRandom = Math.floor(Math.random() * 15);
	for (var i = 1; i < 7; i++){
		var hexRandom = Math.floor(Math.random() * 15);
		randomColorHex[i] = hexString[hexRandom];
		// console.log(hexRandom, hexString[hexRandom]);
	}
	return randomColorHex.join('');
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomSelect);