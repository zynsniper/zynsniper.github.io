function scrollPage() {
    const links = document.querySelectorAll('a[href^="#"]');
    const currentY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const docHeight = document.body.scrollHeight;

    const targets = Array.from(links)
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(el => el !== null);

    if (currentY + viewportHeight >= docHeight - 5) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    for (let i = 0; i < targets.length; i++) {
        const sectionTop = targets[i].getBoundingClientRect().top + window.scrollY;
        if (sectionTop > currentY + 10) {
            targets[i].scrollIntoView({ behavior: 'smooth' });
            return;
        }
    }
}

window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollButton');
    const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 5;

    btn.innerHTML = atBottom ? '&#8593;' : '&#8595;';
})