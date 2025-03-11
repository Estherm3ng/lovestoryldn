document.addEventListener("DOMContentLoaded", function () {
    const imageContainerEl = document.querySelector(".image-container");
    const prevEl = document.getElementById("prev");
    const nextEl = document.getElementById("next");

    // Get all images inside .image-container
    const images = document.querySelectorAll(".image-container span");
    const totalImages = images.length;
    const imageWidth = 200; // Should match .image-container width in CSS

    // Calculate translateZ dynamically for proper 3D depth
    const translateZ = imageWidth / (2 * Math.tan(Math.PI / totalImages));

    // Set CSS variables for total images and depth
    document.documentElement.style.setProperty("--total-images", totalImages);
    document.documentElement.style.setProperty("--translateZ", `${translateZ}px`);

    // Set each image's index dynamically
    images.forEach((span, index) => {
        span.style.setProperty("--i", index);
    });

    let x = 0; // Initial rotation value
    let timer;

    prevEl.addEventListener("click", () => {
        x += 360 / totalImages; // Rotate based on total images
        updateGallery();
        clearTimeout(timer);
    });

    nextEl.addEventListener("click", () => {
        x -= 360 / totalImages; // Rotate based on total images
        updateGallery();
        clearTimeout(timer);
    });

    function updateGallery() {
        imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
        timer = setTimeout(() => {
            x -= 360 / totalImages; // Auto-rotate
            updateGallery();
        }, 3000);
    }

    updateGallery();
});

