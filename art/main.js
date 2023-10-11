function ImageClicked(image){
	modal = document.getElementById("modal");
	modalImage = document.getElementById("modal-image");
	modalHeader = document.getElementById("modal-text-header");
	modalDescription = document.getElementById("modal-description");
	modal.classList.add("darkened-modal");
	modal.classList.remove("closed");

	modalImage.src = image.src;
	modalHeader.innerHTML = image.getAttribute("data-name");
	modalDescription.innerHTML = image.getAttribute("data-description")

}

function OverlayClicked() {
	modal = document.getElementById("modal");
	modal.classList.add("closed");
	modal.classList.remove("darkened-modal");
}

document.addEventListener(
	"click",
	function(event) {
		modal = document.getElementById("modal");
		if (
			event.target.matches("#modal")
		) {
			modal.classList.toggle("closed");
		}
	},
	false
  )