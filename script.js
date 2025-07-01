document.addEventListener("DOMContentLoaded", () => {
    // ======== Tampilkan Nama Tamu dari URL ========
    const params = new URLSearchParams(window.location.search);
    const nama = params.get('to');
    if (nama) {
        const namaTamuEl = document.getElementById('namaTamu');
        if (namaTamuEl) {
            namaTamuEl.textContent = decodeURIComponent(nama);
        }
    }

    // ======== Countdown Timer ========
    const targetDate = new Date("2025-07-11T09:00:00").getTime();

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

    // ======== Musik Background & Tombol Toggle ========
    const bgMusic = document.getElementById("bgMusic");
    const toggleBtn = document.getElementById("toggleMusic");

    let hasInteracted = false;

    if (bgMusic && toggleBtn) {
        function playMusic() {
            bgMusic.play().then(() => {
                toggleBtn.textContent = "🔊";
            }).catch(err => {
                console.warn("Autoplay gagal:", err.message);
            });
        }

        function pauseMusic() {
            bgMusic.pause();
            toggleBtn.textContent = "🔇";
        }

        toggleBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Cegah efek klik lainnya
            if (bgMusic.paused) {
                playMusic();
            } else {
                pauseMusic();
            }
        });

        // Auto-play setelah klik pertama (bukan tombol)
        document.addEventListener("click", () => {
            if (!hasInteracted) {
                playMusic();
                hasInteracted = true;
            }
        }, { once: true });
    }
});


// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll(".fade-in-up");

    const options = {
        threshold: 0.2
    };

    const appearOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // Reset saat keluar viewport
            }
        });
    }, options);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const giftButton = document.getElementById("giftButton");
    const giftWrapper = document.getElementById("giftWrapper");
    const giftBox = document.getElementById("giftBox");

    giftButton.addEventListener("click", function() {
        giftWrapper.style.display = "none"; // Sembunyikan tombol
        giftBox.style.display = "block"; // Tampilkan box
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const openBtn = document.getElementById("openInvitationBtn");
    const targetSection = document.getElementById("section-greatings");

    openBtn.addEventListener("click", function() {
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const btnAkad = document.getElementById("btnLocationAkad");
    const btnResepsi = document.getElementById("btnLocationResepsi");

    btnAkad.addEventListener("click", function() {
        window.open("https://maps.app.goo.gl/drLpreQZd6oceqdH6?g_st=aw", "_blank");
    });

    btnResepsi.addEventListener("click", function() {
        window.open("https://maps.app.goo.gl/y9Y1cNn8Rt8ponV96", "_blank");
    });
});


document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman

    const nama = document.getElementById('nama').value.trim();
    const hadir = document.getElementById('hadir').value;
    const ucapan = document.getElementById('ucapan').value.trim();

    const pesan = `Halo Intan & Ikhwan! Saya *${nama}*, *${hadir}* ke acara.\n\nUcapan:\n${ucapan}`;
    const nomor = '6282361153298'; // ganti 0 dengan 62
    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

    window.open(url, '_blank');
});


function smoothScrollTo(targetY, duration = 800) {
    console.log("masohkkk");

    const startY = window.scrollY;
    const distanceY = targetY - startY;
    const startTime = performance.now();
    console.log("targetY", targetY, "startY", startY);

    function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease in-out cubic (smooth effect)
        const ease = progress < 0.5 ?
            4 * progress * progress * progress :
            1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startY + distanceY * ease);

        if (progress < 1) {
            requestAnimationFrame(step);
        }
        console.log(progress);
    }

    requestAnimationFrame(step);
}


const openBtn = document.getElementById('openInvitationBtn');

// Kunci scroll awal
document.body.classList.add('lock-scroll');

document.getElementById('openInvitationBtn').addEventListener('click', function() {
    document.body.classList.remove('lock-scroll');
    const countdownSection = document.getElementById('section-countdown');
    if (countdownSection) {
        const offset = countdownSection.offsetTop;
        smoothScrollTo(offset);
    } else {
        console.error("❌ Section countdown tidak ditemukan saat klik.");
    }
});