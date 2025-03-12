document.addEventListener("DOMContentLoaded", function () {
    const imageContainerEl = document.querySelector(".image-container");
    const prevEl = document.getElementById("prev");
    const nextEl = document.getElementById("next");

    const totalImages = 20;
    const angle = 360 / totalImages; // 18° per image

    let x = 0;
    let timer;

    prevEl.addEventListener("click", () => {
        x += angle; // Rotate by 18°
        updateGallery();
        clearTimeout(timer);
    });

    nextEl.addEventListener("click", () => {
        x -= angle; // Rotate by 18°
        updateGallery();
        clearTimeout(timer);
    });

    function updateGallery() {
        imageContainerEl.style.transform = ` perspective(1500px) rotateY(${x}deg)`;
        timer = setTimeout(() => {
            x -= angle; // Auto-rotate every 3 seconds
            updateGallery();
        }, 3000);
    }

    updateGallery();
});