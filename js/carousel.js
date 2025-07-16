function nextImage(btn) {
    const carousel = btn.closest('.carousel');
    const images = carousel.querySelectorAll('.carousel-img');
    let idx = Array.from(images).findIndex(img => img.classList.contains('active'));
    images[idx].classList.remove('active');
    idx = (idx + 1) % images.length;
    images[idx].classList.add('active');
}

function prevImage(btn) {
    const carousel = btn.closest('.carousel');
    const images = carousel.querySelectorAll('.carousel-img');
    let idx = Array.from(images).findIndex(img => img.classList.contains('active'));
    images[idx].classList.remove('active');
    idx = (idx - 1 + images.length) % images.length;
    images[idx].classList.add('active');
}