const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

// Count total images dynamically
const totalImages = document.querySelectorAll(".image-container span").length;

// Calculate dynamic rotation angle
const rotationAngle = 360 / totalImages;

let x = 0;
let timer;

prevEl.addEventListener("click", () => {
  x = x + rotationAngle; // Rotate based on total images
  updateGallery();
  clearTimeout(timer);
});

nextEl.addEventListener("click", () => {
  x = x - rotationAngle; // Rotate based on total images
  updateGallery();
  clearTimeout(timer);
});

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - rotationAngle; // Auto-rotate
    updateGallery();
  }, 3000);
}

// Set total images as a CSS variable
document.documentElement.style.setProperty("--total-images", totalImages);

// Run update function
updateGallery();
