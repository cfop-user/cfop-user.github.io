function swapSheet(sheet) {
	document.getElementById("default").setAttribute("href", sheet); 		 
}

function dark(){
	swapSheet("/dark.css")
}
function defa(){
	swapSheet("/style.css")
}

var modal = document.getElementById("modal");
var bttn = document.getElementById("theme-button");
var close = document.getElementsByClassName("close")[0];
bttn.onclick = function() {
	modal.style.display = "block";
}
close.onclick = function() {
	modal.style.display = "none";
}	