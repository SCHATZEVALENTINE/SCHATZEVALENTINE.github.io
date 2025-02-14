let currentIndex = 0;

function startCarousel() {
    setInterval(() => {
        changeSlide(1);
    }, 3000); // Change l'image toutes les 3 secondes
}
function changeSlide(n) {
    
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + n + items.length) % items.length;

    items.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

startCarousel();