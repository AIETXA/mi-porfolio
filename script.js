let slideActual = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[slideActual].classList.remove('active');
    slideActual = (slideActual + 1) % slides.length;
    slides[slideActual].classList.add('active');
}

setInterval(nextSlide, 5000);