 // Menu Hamburguer
 const hamburger = document.querySelector('.hamburger');
 const nav = document.querySelector('#nav');
 hamburger.addEventListener('click', () => {
     nav.classList.toggle('active');
     hamburger.innerHTML = nav.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
 });

 // Carrossel
 const carousel = document.querySelector('.carousel');
 const items = document.querySelectorAll('.carousel-item');
 const dots = document.querySelectorAll('.carousel-dots .dot');
 const prevBtn = document.querySelector('.carousel-btn.prev');
 const nextBtn = document.querySelector('.carousel-btn.next');
 let currentIndex = 0;

 function showSlide(index) {
     items.forEach((item, i) => {
         item.classList.toggle('active', i === index);
         dots[i].classList.toggle('active', i === index);
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

 // Depoimentos Carrossel
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

 // Formulário Contato
 document.getElementById('contact-form').addEventListener('submit', (e) => {
     e.preventDefault();
     alert('Mensagem enviada com sucesso!');
     e.target.reset();
 });

 // Modal Diretor
 function openModal() {
     document.getElementById('director-modal').style.display = 'block';
 }

 function closeModal() {
     document.getElementById('director-modal').style.display = 'none';
 }

 document.getElementById('director-form').addEventListener('submit', (e) => {
     e.preventDefault();
     alert('Mensagem enviada ao diretor com sucesso!');
     e.target.reset();
     closeModal();
 });

 // Navegação Suave
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         nav.classList.remove('active');
         hamburger.innerHTML = '<i class="fas fa-bars"></i>';
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });