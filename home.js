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

var grid = document.querySelector('.gallery');
var msnry = new Masonry(grid, {
  // options
  itemSelector: '.gallery__thumb',
  columnWidth: '.gallery__thumb'
});

