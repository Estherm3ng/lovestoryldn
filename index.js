const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

const totalImages = 20;
const angle = 360 / totalImages; // 18° per image

let x = 0;
let timer;

// ✅ Button Click Event (Desktop)
prevEl.addEventListener("click", () => {
   x += angle;
   updateGallery();
   clearTimeout(timer);
});

nextEl.addEventListener("click", () => {
   x -= angle;
   updateGallery();
   clearTimeout(timer);
});

// ✅ Function to Update Rotation
function updateGallery() {
    imageContainerEl.style.transform = `perspective(1500px) rotateY(${x}deg)`;
}

// ✅ Swipe Gesture for Mobile
let startX = 0;
let endX = 0;

document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    let diff = startX - endX;
    let threshold = 50; // Minimum swipe distance

    if (Math.abs(diff) > threshold) {
        if (diff > 0) {
            // Swiped left
            x -= angle;
        } else {
            // Swiped right
            x += angle;
        }
        updateGallery();
    }
}

updateGallery();
