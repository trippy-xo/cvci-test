const gallery = document.getElementById("gallery");

const MAX_IMAGES = 11;

// IMAGE PATH
function getImagePath(index) {
  return `images/gallery/gallery ${index}.JPG`;
}

// LOAD ALL IMAGES
function loadImages() {
  for (let i = 1; i <= MAX_IMAGES; i++) {

    const item = document.createElement("div");
    item.classList.add("gallery-item");

    const img = document.createElement("img");
    img.src = getImagePath(i);
    img.loading = "lazy";

    // LIGHTBOX (optional, keeps your feature)
    img.addEventListener("click", () => {
      const lightbox = document.getElementById("lightbox");
      const lightboxImg = document.querySelector(".lightbox-img");

      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });

    item.appendChild(img);
    gallery.appendChild(item);
  }
}

// INITIAL LOAD
loadImages();

// LIGHTBOX CLOSE
const closeBtn = document.querySelector(".close");
const lightbox = document.getElementById("lightbox");

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});