document.addEventListener("DOMContentLoaded", function () {
    const bottomContainer = document.querySelector(".bottom-layer");
    const topContainer = document.querySelector(".top-layer");
    const prevEl = document.getElementById("prev");
    const nextEl = document.getElementById("next");

    const totalImages = 10;
    const angle = 360 / totalImages; // 36 degrees per image

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
        bottomContainer.style.transform = `translate(-50%, -50%) perspective(2500px) rotateY(${x}deg)`;
        topContainer.style.transform = `translate(-50%, -50%) perspective(2500px) rotateY(${-x}deg)`;
        
        timer = setTimeout(() => {
            x -= angle;
            updateGallery();
        }, 3000);
    }

    updateGallery();
});

