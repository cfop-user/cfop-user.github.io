function initGallery(id) {
    const gallery = document.getElementById(id);
    const dimmer = document.getElementById("dimmer");
    const images = gallery.children;
    const originalDimZ = dimmer.style.zIndex

    for (let i = 0; i < images.length; i++) {
      images[i].addEventListener("mouseover", function(e) {
        dimmer.style.opacity = '0.5';
        dimmer.style.zIndex = "98";
        console.log('success')
      });

      images[i].addEventListener("mouseout", function(e) {
        dimmer.style.opacity = '0';
        dimmer.style.zIndex = originalDimZ;
        console.log('success2')
      });

      images[i].addEventListener("click", function(e) {
        dimmer.style.opacity = '0.5';
        dimmer.style.zIndex = originalDimZ;
        // corresponding modal box appears
      });
    }
  };

// function initGridNav(){
//   const gridElements = document.getElementsByClassName("grid-nav")[0].children;
//   console.log(gridElements)
//   for (let i = 0; i < gridElements.length; i++) {
//     gridElements[i].children[0].addEventListener("mouseover", function(e) {
//       console.log("overr");

//     });
//     gridElements[i].children[0].addEventListener("mouseout", function(e) {
//       gridElements[i].children[0].style.animation = "none";
//     });
// }};


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
