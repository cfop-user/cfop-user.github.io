function ImageClicked(image){
	modal = document.getElementById("modal");
	modalImage = document.getElementById("modal-image");
	modalHeader = document.getElementById("modal-text-header");
	modal.classList.toggle("closed");
	modal.style.backdropFilter = "blur(5px) saturate(40%)";
	modal.style.backgroundColor = "rgba(0,0,0,0.9)"
	modalImage.src = image.src;
	modalHeader.innerHTML = image.getAttribute("data-name");
	console.log("modal created")
}

function OverlayClicked() {
	modal = document.getElementById("modal");
	modal.classList.toggle("closed")
}

document.addEventListener(
	"click",
	function(event) {
		modal = document.getElementById("modal");
		if (
			event.target.matches("#modal")
		) {
			console.log("modal-closed")
			modal.classList.toggle("closed");
			console.log("modal-closed")
		}
	},
	false
  )