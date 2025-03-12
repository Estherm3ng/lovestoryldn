const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

const totalImages = 10; // Fixed number of images
const angle = 360 / totalImages; // 12 degrees per image
const translateZ = 1600; // Keep the same depth as the old style

// Set the translateZ value in CSS
document.documentElement.style.setProperty("--translateZ", `${translateZ}px`);

let x = 0;
let timer;

prevEl.addEventListener("click", () => {
    x += angle; // Rotate by 12 degrees
    updateGallery();
    clearTimeout(timer);
});

nextEl.addEventListener("click", () => {
    x -= angle; // Rotate by 12 degrees
    updateGallery();
    clearTimeout(timer);
});

function updateGallery() {
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x -= angle; // Auto-rotate
        updateGallery();
    }, 3000);
}

updateGallery();


