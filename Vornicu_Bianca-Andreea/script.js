let currentSlide = 0;

function showSlides() {
    const slides = document.querySelectorAll("#slideshow img");
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? "block" : "none";
    });
    currentSlide = (currentSlide + 1) % slides.length;
}

let slideshowInterval;


function startSlideshow() {
    slideshowInterval = setInterval(showSlides, 3000);
}


function stopSlideshow() {
    clearInterval(slideshowInterval);
}


document.getElementById("utilizarea-resurselor").addEventListener("dblclick", function() {
    
    const images = document.querySelectorAll("#slideshow img");
    images.forEach(image => {
        image.style.display = "none";  
    });
    startSlideshow();  
});

function SlideAntecedent() {
    currentSlide = (currentSlide - 1 + document.querySelectorAll("#slideshow img").length) % document.querySelectorAll("#slideshow img").length;
    showSlides();
}

function SlidePrecedent() {
    currentSlide = (currentSlide + 1) % document.querySelectorAll("#slideshow img").length;
    showSlides();
}

showSlides();
