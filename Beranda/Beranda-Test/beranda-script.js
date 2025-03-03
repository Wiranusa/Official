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
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

let particlesArray = [];
const numberOfParticles = 500;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                }
            }

            draw() {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }

        function initParticles() {
            particlesArray = [];
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle());
            }
        }

        function handleParticles() {
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            handleParticles();
            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();
        window.addEventListener('resize', resizeCanvas);
// Background Partikel END --------------------------------------------------------------------------------------
// Background horizontal scrolling effect
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let backgroundPositionX = -(scrollPosition * 0.2); // Adjust scroll speed
    document.querySelector('.background').style.transform = `translateX(${backgroundPositionX}px)`;
});

// window.addEventListener('scroll', function() {
//     let scrollPosition = window.scrollY;
//     let backgroundPositionX = -(scrollPosition * 0.2); // Atur kecepatan scroll
//     requestAnimationFrame(() => {
//         document.querySelector('.background').style.transform = `translateX(${backgroundPositionX}px)`;
//     });
// });
