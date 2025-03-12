document.addEventListener("DOMContentLoaded", function () {
    const rightContainer = document.querySelector(".right-layer");
    const leftContainer = document.querySelector(".left-layer");
    const prevEl = document.getElementById("prev");
    const nextEl = document.getElementById("next");

    const totalImages = 10;
    const angle = 360 / totalImages;

    let x = 0;
    let timer;

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

    function updateGallery() {
        rightContainer.style.transform = `translate(-50%, -50%) perspective(2500px) rotateX(${x}deg)`;
        leftContainer.style.transform = `translate(-50%, -50%) perspective(2500px) rotateX(${-x}deg)`;

        timer = setTimeout(() => {
            x -= angle;
            updateGallery();
        }, 3000);
    }

    updateGallery();
});

