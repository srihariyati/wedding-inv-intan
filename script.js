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


document.addEventListener("click", function(e) {
    const middle = window.innerHeight / 2;

    if (e.clientY > middle && currentSection < totalSections - 1) {
        currentSection++;
    } else if (e.clientY <= middle && currentSection > 0) {
        currentSection--;
    }

    updateSection();
});

const params = new URLSearchParams(window.location.search);
const nama = params.get('to');
if (nama) {
    const namaTamuEl = document.getElementById('namaTamu');
    if (namaTamuEl) {
        namaTamuEl.textContent = decodeURIComponent(nama);
    }
}

const targetDate = new Date("2025-07-11T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = targetDate - now;

    if (gap < 0) {
        document.querySelector(".countdown").innerHTML = "Acara telah berlangsung";
        return;
    }

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((gap % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);