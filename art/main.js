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
  }