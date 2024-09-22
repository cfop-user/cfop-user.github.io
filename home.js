var heading = document.getElementById("fancy");
console.log("running home")
function runAnimation() {
	console.log("adding class")
	heading.classList.add("underlined")
}

heading.addEventListener(
	"mouseover",
	function () {
		runAnimation()
	}
)