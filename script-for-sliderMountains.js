const slides = document.querySelectorAll('.slide');
const prevArrow = document.querySelector('.prev_arr');
const nextArrow = document.querySelector('.next_arr');
const dotsContainer = document.querySelector('.dots_mountains');
let currentSlide = 0;

// Generisanje tackica
slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
            dots[i].classList.add('active');
        } else {
            slide.style.display = 'none';
            dots[i].classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Event listeners za strelice
prevArrow.addEventListener('click', prevSlide);
nextArrow.addEventListener('click', nextSlide);

showSlide(currentSlide);