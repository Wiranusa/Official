// Mendapatkan elemen canvas dan konteks 2D
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
const particlesContainer = document.querySelector('.particles-container');

// Fungsi untuk mengatur ukuran canvas agar sesuai dengan tinggi viewport
function resizeCanvas() {
    canvas.width = window.innerWidth * 2; // Lebar dua kali layar untuk geser horizontal
    canvas.height = window.innerHeight;
}
//Konten Dropdawn Hamburger menu
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    dropdown.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah navigasi default
        this.classList.toggle("active");
    });
});

// Inisialisasi canvas ukuran penuh
resizeCanvas();

// Array untuk partikel dan jumlah partikel
let particlesArray = [];
const numberOfParticles = 150;

// Kelas Partikel untuk membuat partikel dengan posisi, ukuran, dan kecepatan acak
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
    }

    // Perbarui posisi partikel
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Jika partikel bergerak keluar dari layar, reset posisinya
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
        }
        if (this.size > 0.2) this.size -= 0.1;
    }

    // Gambar partikel di canvas
    draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

// Inisialisasi partikel
function initParticles() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

// Menghandle gerakan dan gambar partikel
function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].size <= 0.3) {
            particlesArray[i].x = Math.random() * canvas.width;
            particlesArray[i].y = Math.random() * canvas.height;
            particlesArray[i].size = Math.random() * 5 + 1;
        }
        
    }
    
}

// Fungsi animasi partikel
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animateParticles);
}

// Inisialisasi dan mulai animasi
initParticles();
animateParticles();

// Update ukuran canvas saat window diresize
window.addEventListener('resize', resizeCanvas);

// Fungsi untuk menggeser latar belakang partikel berdasarkan scroll
window.addEventListener('scroll', () => {
    const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    particlesContainer.style.transform = `translateX(-${scrollPercentage * 50}%)`;
});
//Hamburger Menu
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const hamburger = document.querySelector('.hamburger');
    
    
    sidebar.classList.toggle('show');
    content.classList.toggle('content-with-sidebar');
    hamburger.classList.toggle('active');
}

function resizeIframe(iframe) {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}

// Copyright
document.getElementById("currentYear").textContent = new Date().getFullYear();