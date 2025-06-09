let currentSection = 0;
const sections = document.querySelectorAll(".section");
const totalSections = sections.length;
const container = document.querySelector(".container");

function updateSection() {
    container.style.transform = `translateY(-${currentSection * 100}vh)`;
}

// Scroll (desktop)
let isScrolling = false;
document.addEventListener("wheel", function(e) {
    if (isScrolling) return;

    isScrolling = true;

    if (e.deltaY > 0 && currentSection < totalSections - 1) {
        currentSection++;
    } else if (e.deltaY < 0 && currentSection > 0) {
        currentSection--;
    }

    updateSection();

    setTimeout(() => {
        isScrolling = false;
    }, 800);
});

// Swipe (mobile)
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener("touchstart", function(e) {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener("touchend", function(e) {
    touchEndY = e.changedTouches[0].clientY;
    handleSwipe();
});

function handleSwipe() {
    const swipeDistance = touchStartY - touchEndY;

    if (swipeDistance > 50 && currentSection < totalSections - 1) {
        currentSection++;
    } else if (swipeDistance < -50 && currentSection > 0) {
        currentSection--;
    }

    updateSection();
}

// Klik atas/bawah layar (opsional)
document.addEventListener("click", function(e) {
    const middle = window.innerHeight / 2;

    if (e.clientY > middle && currentSection < totalSections - 1) {
        currentSection++;
    } else if (e.clientY <= middle && currentSection > 0) {
        currentSection--;
    }

    updateSection();
});