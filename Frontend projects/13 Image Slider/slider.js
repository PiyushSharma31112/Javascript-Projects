let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function showSlide(n) {
    slideIndex = (n + totalSlides) % totalSlides;
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
}

function changeSlide(n) {
    showSlide(slideIndex + n);
}

showSlide(slideIndex);



