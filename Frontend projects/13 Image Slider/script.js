const slides = document.querySelectorAll(".slide")
let counter = 0;
const totalSlides = slides.length;

// console.log(slides)

slides.forEach( (slide, index) => {
    slide.style.left = `${index * 100}%`
})

const goPrev = () => {
    counter = (counter-1 + totalSlides) % totalSlides
    slideImage()
}

const goNext = () =>  {
    counter = (counter+1 + totalSlides) % totalSlides
    slideImage()
}

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}