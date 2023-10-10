function ImageClicked(image){
	modal = document.getElementById("modal");
	modalImage = document.getElementById("modal-image")
	modalHeader = document.getElementById("modal-text-header")
	modal.style.display = "block";
	modalImage.src = image.src;
	if (modalImage.naturalWidth > (0.5*modal.offsetWidth)) {
		modalImage.style.width = "50%"; 
		// the ratio of the height to the width should be multiplied by the current height to get the right aspect ratio
	} else {
		modalImage.style.width = modalImage.naturalWidth;
	}
	modalHeader.innerHTML = image.getAttribute("data-name");
	console.log("success")
}