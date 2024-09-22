const dropdown = document.getElementById("blog-button");
let items = document.getElementById("blog-items")
console.log(dropdown)
console.log("test")
function dropdownClicked(){
	console.log("trying to add")
	items.classList.toggle("open");
}

dropdown.addEventListener(
	"click",
	function (){
		dropdownClicked()
	}
)



const modal = document.getElementById("modal");
modalImage = document.getElementById("modal-image");
modalHeader = document.getElementById("modal-text-header");
modalDescription = document.getElementById("modal-description");
const modalContent = document.querySelector('#modal-content'); 

function ImageClicked(image){
	OpenModal();
	modalImage.src = image.src;
	modalHeader.innerHTML = image.getAttribute("data-name");
	if (!image.hasAttribute("data-description")){
		modalDescription.innerHTML = "Made by Ben."
	} else {
		modalDescription.innerHTML = image.getAttribute("data-description");
	}
	modalContent.style.width = "max(60%, " + (modalImage.clientWidth*2) + "px)";
}

function CloseModal() {
	modal.classList.remove("darkened-modal");
	modal.classList.add("closed");
	modalContent.classList.add("closed")
}

function OpenModal(){
	modal.classList.remove("closed");
	modal.classList.add("darkened-modal");
	modalContent.classList.remove("closed")}

document.addEventListener(
	"click",
	function(event) {
		if (
			event.target.matches("#modal") || event.target.matches(".modal-close-button")
		) {
			CloseModal()
		}
	},
	false
)

const header = document.querySelector('.header'); 
if (header != null) {
	SetupHeader()
}

function SetupHeader() {
	header.addEventListener(
		"mousedown",
		function(e) {
			header.dataset.mouseDownAt = e.clientX;
		}
	)
	header.addEventListener(
		"mousemove",
		function(event) {
			if (header.dataset.mouseDownAt === "0") return;
			lastOffset = parseFloat(header.dataset.lastOffset);
			mouseDelta = parseFloat(header.dataset.mouseDownAt) - event.clientX;
			header.style.setProperty('--background-offset', String(mouseDelta + lastOffset)  +'px');
		}
	)
	header.addEventListener(
		"mouseup",
		function(){
			header.dataset.mouseDownAt = "0";
			header.dataset.lastOffset = getComputedStyle(header).getPropertyValue('--background-offset');
		}
	)
}

const galleryGrid =  document.querySelector('.gallery-grid');
if (galleryGrid != null){
	setupGalleryGrid()
}
function setupGalleryGrid() {
	for (const Image of galleryGrid.children) {
		Image.draggable = false
		Image.addEventListener(
			"click",
			function(){ImageClicked(Image)}
		)
	}
}

const test = document.querySelector('#test'); 
if (test != null) {
	setupTest()
}

function setupTest(){
	test.addEventListener(
		"mouseover",
		function(){
			test.classList.add("hovered");
			test.classList.remove("unhovered")
		}	
	)
	test.addEventListener(
		"mouseout",
		function(){
			test.classList.add("unhovered");
			test.classList.remove("hovered");
		}	
	)
}