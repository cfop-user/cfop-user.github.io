
function makeStuff() {
    console.log("starting make stuff")
    var gallery = document.getElementsByClassName('gallery')[0]
    var galleryDivs = gallery.getElementsByTagName("div");
    console.log(galleryDivs)
}



function adjustTextSize(divs) {
    console.log("test");
    console.log(divs)
    for (let i = 0; i < divs.length; i++) {
        console.log(divs)
        const texts = divs[i].querySelectorAll("p");
        for (let j = 0; j < texts.length; j++) {
            console.log(texts)
            while (divs[i].clientHeight < texts[j].clientHeight) {
                texts[j].style.fontSize = (parseFloat(getComputedStyle(texts[j]).fontSize) - 1) + "px";
            }
        }
    }
}


window.onload = makeStuff();
adjustTextSize(galleryDivs);
window.addEventListener("resize", adjustTextSize);


// credit to cgpt