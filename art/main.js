function ImageClicked(image){
	modal = document.getElementById("modal");
	modalImage = document.getElementById("modal-image");
	modalHeader = document.getElementById("modal-text-header");
	modal.style.display = "block";
	modal.style.backdropFilter = "blur(5px) saturate(40%)";
	modal.style.backgroundColor = "rgba(0,0,0,0.9)"
	modalImage.src = image.src;
	modalHeader.innerHTML = image.getAttribute("data-name");
	console.log("success")
}