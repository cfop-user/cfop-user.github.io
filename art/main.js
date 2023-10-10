function ImageClicked(image){
	modal = document.getElementById("modal");
	modalImage = document.getElementById("modal-image")
	modalHeader = document.getElementById("modal-text-header")
	modal.style.display = "block";
	modalImage.src = image.src;
	modalHeader.innerHTML = image.getAttribute("data-name");
	console.log("success")
}