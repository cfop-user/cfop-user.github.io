function initGallery(id) {
    const gallery = document.getElementById(id);
    const dimmer = document.getElementById("dimmer");
    const images = gallery.children;
    const originalDimZ = dimmer.style.zIndex

    for (let i = 0; i < images.length; i++) {

      images[i].addEventListener("click", function(e) {
        dimmer.style.opacity = '0.5';
        dimmer.style.zIndex = originalDimZ;
        // corresponding modal box appears
      });
    }
  };


const body = document.getElementsByTagName("body")[0];
const navs = document.getElementsByTagName("navs");
console.log("body and nav declared")
document.addEventListener("scroll", function(_e){
  console.log("scroll detected");
  for (let i = 0; i < navs.length; i++) {
    navs[i].style.borderRadius = "25vw";
    console.log("succes rounding")
  }
});
