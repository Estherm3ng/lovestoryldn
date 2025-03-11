document.addEventListener("DOMContentLoaded", function () {
    const imageContainerEl = document.querySelector(".image-container");
    const prevEl = document.getElementById("prev");
    const nextEl = document.getElementById("next");

    // Get total images
    const images = document.querySelectorAll(".image-container span");
    const totalImages = images.length;
    const angle = 360 / totalImages; // Dynamic rotation angle

    let x = 0; // Initial rotation
    let timer;

    // Set total images as a CSS variable
    document.documentElement.style.setProperty("--total-images", totalImages);

    // Assign each span an index dynamically
    images.forEach((span, index) => {
        span.style.setProperty("--i", index);
    });

    prevEl.addEventListener("click", () => {
        x += angle; // Rotate by calculated angle
        updateGallery();
        clearTimeout(timer);
    });

    nextEl.addEventListener("click", () => {
        x -= angle; // Rotate by calculated angle
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
});


