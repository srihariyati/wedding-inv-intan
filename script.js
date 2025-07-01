// document.addEventListener("DOMContentLoaded", () => {
//     // ======== Navigasi Section (Scroll, Click, Swipe) ========
//     let currentSection = 0;
//     const sections = document.querySelectorAll(".section");
//     const totalSections = sections.length;
//     const container = document.querySelector(".container");

//     function updateSection() {
//         container.style.transform = `translateY(-${currentSection * 100}vh)`;
//     }

//     // Scroll (desktop)
//     let isScrolling = false;
//     document.addEventListener("wheel", function(e) {
//         if (isScrolling) return;
//         isScrolling = true;

//         if (e.deltaY > 0 && currentSection < totalSections - 1) {
//             currentSection++;
//         } else if (e.deltaY < 0 && currentSection > 0) {
//             currentSection--;
//         }

//         updateSection();

//         setTimeout(() => {
//             isScrolling = false;
//         }, 800);
//     });

//     // Swipe (mobile)
//     let touchStartY = 0;
//     let touchEndY = 0;

//     document.addEventListener("touchstart", function(e) {
//         touchStartY = e.touches[0].clientY;
//     });

//     document.addEventListener("touchend", function(e) {
//         touchEndY = e.changedTouches[0].clientY;
//         handleSwipe();
//     });

//     function handleSwipe() {
//         const swipeDistance = touchStartY - touchEndY;

//         if (swipeDistance > 50 && currentSection < totalSections - 1) {
//             currentSection++;
//         } else if (swipeDistance < -50 && currentSection > 0) {
//             currentSection--;
//         }

//         updateSection();
//     }

//     // Klik layar untuk pindah section (atas/bawah)
//     document.addEventListener("click", function(e) {
//         const toggleBtn = document.getElementById("toggleMusic");
//         if (toggleBtn && toggleBtn.contains(e.target)) return; // Jangan scroll kalau klik tombol musik

//         const middle = window.innerHeight / 2;

//         if (e.clientY > middle && currentSection < totalSections - 1) {
//             currentSection++;
//         } else if (e.clientY <= middle && currentSection > 0) {
//             currentSection--;
//         }

//         updateSection();
//     });

//     // ======== Tampilkan Nama Tamu dari URL ========
//     const params = new URLSearchParams(window.location.search);
//     const nama = params.get('to');
//     if (nama) {
//         const namaTamuEl = document.getElementById('namaTamu');
//         if (namaTamuEl) {
//             namaTamuEl.textContent = decodeURIComponent(nama);
//         }
//     }

//     // ======== Countdown Timer ========
//     const targetDate = new Date("2025-07-11T00:00:00").getTime();

//     function updateCountdown() {
//         const now = new Date().getTime();
//         const gap = targetDate - now;

//         if (gap < 0) {
//             document.querySelector(".countdown").innerHTML = "Acara telah berlangsung";
//             return;
//         }

//         const days = Math.floor(gap / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((gap % (1000 * 60)) / 1000);

//         document.getElementById("days").textContent = days;
//         document.getElementById("hours").textContent = hours;
//         document.getElementById("minutes").textContent = minutes;
//         document.getElementById("seconds").textContent = seconds;
//     }

//     updateCountdown();
//     setInterval(updateCountdown, 1000);

//     // ======== Musik Background & Tombol Toggle ========
//     const bgMusic = document.getElementById("bgMusic");
//     const toggleBtn = document.getElementById("toggleMusic");

//     let hasInteracted = false;

//     if (bgMusic && toggleBtn) {
//         function playMusic() {
//             bgMusic.play().then(() => {
//                 toggleBtn.textContent = "🔊";
//             }).catch(err => {
//                 console.warn("Autoplay gagal:", err.message);
//             });
//         }

//         function pauseMusic() {
//             bgMusic.pause();
//             toggleBtn.textContent = "🔇";
//         }

//         // Toggle ON/OFF saat tombol diklik
//         toggleBtn.addEventListener("click", (e) => {
//             e.stopPropagation(); // cegah scroll section saat klik tombol
//             if (bgMusic.paused) {
//                 playMusic();
//             } else {
//                 pauseMusic();
//             }
//         });

//         // Auto main musik saat interaksi pertama (bukan tombol)
//         document.addEventListener("click", () => {
//             if (!hasInteracted) {
//                 playMusic();
//                 hasInteracted = true;
//             }
//         }, { once: true });
//     }
// });

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