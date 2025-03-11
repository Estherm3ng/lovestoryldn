document.addEventListener("DOMContentLoaded", function () {
    const imageContainerEl = document.querySelector(".image-container");
    const prevEl = document.getElementById("prev");
    const nextEl = document.getElementById("next");

    // Get total images
    const images = document.querySelectorAll(".image-container span");
    const totalImages = images.length;

    // Calculate rotation angle dynamically
    const angle = 360 / totalImages;

    // Adjust the Z distance for correct spacing
    const imageWidth = 200; // Match .image-container width
    const translateZ = imageWidth / (2 * Math.tan(Math.PI / totalImages)) * 2.5; // Ensures proper depth

    // Apply CSS variables
    document.documentElement.style.setProperty("--total-images", totalImages);
    document.documentElement.style.setProperty("--translateZ", `${translateZ}px`);

    // Assign each span an index dynamically
    images.forEach((span, index) => {
        span.style.setProperty("--i", index);
    });

    let x = 0; // Initial rotation
    let timer;

    prevEl.addEventListener("click", () => {
        x += angle; // Rotate based on total images
        updateGallery();
        clearTimeout(timer);
    });

    nextEl.addEventListener("click", () => {
        x -= angle; // Rotate based on total images
        updateGallery();
        clearTimeout(timer);
    });

    function updateGallery() {
        imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`; // Keep original 3D effect
        timer = setTimeout(() => {
            x -= angle; // Auto-rotate
            updateGallery();
        }, 3000);
    }

    updateGallery();
});


