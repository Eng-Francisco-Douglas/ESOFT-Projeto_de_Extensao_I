const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('#nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.innerHTML = nav.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

const carousel = document.querySelector('.hero-carousel');
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.carousel-dots .dot');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
        if (i === index) {
            const img = item.querySelector('.animate-image');
            if (img) {
                img.style.animation = 'none';
                img.offsetHeight; // Trigger reflow
                img.style.animation = null;
            }
        }
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
    });
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}, 5000);

const depoimentoItems = document.querySelectorAll('.depoimento-item');
let depoimentoIndex = 0;

function showDepoimento(index) {
    depoimentoItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

setInterval(() => {
    depoimentoIndex = (depoimentoIndex + 1) % depoimentoItems.length;
    showDepoimento(depoimentoIndex);
}, 7000);

document.getElementById('matricula-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Pré-matrícula enviada com sucesso! Entraremos em contato em breve.');
    e.target.reset();
});

let modalTimeout;

function openModal() {
    const modal = document.getElementById('director-modal');
    modal.style.display = 'flex';
    // Define o timeout para fechar o modal após 10 segundos
    modalTimeout = setTimeout(() => {
        closeModal();
    }, 10000);
}

function closeModal() {
    const modal = document.getElementById('director-modal');
    modal.style.display = 'none';
    // Limpa o timeout ao fechar manualmente
    clearTimeout(modalTimeout);
}

document.getElementById('director-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada ao diretor com sucesso!');
    e.target.reset();
    closeModal();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        nav.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 80;
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

const animateImages = document.querySelectorAll('.animate-image');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const animationType = img.dataset.animate;
            img.style.animation = animationType === 'fade' ? 'fadeIn 1s ease-out forwards' : 'slideIn 1s ease-out forwards';
            observer.unobserve(img);
        }
    });
}, { threshold: 0.2 });

animateImages.forEach(img => observer.observe(img));