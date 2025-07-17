function scrollPage() {
    const sections = document.querySelectorAll('section');
    const currentY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const docHeight = document.body.scrollHeight;

    // Detect if you're at (or very close to) the bottom
    if (currentY + viewportHeight >= docHeight - 5) {
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    // Otherwise, scroll to next section
    for (let i = 0; i < sections.length; i++) {
        const sectionTop = sections[i].getBoundingClientRect().top + window.scrollY;
        if (sectionTop > currentY + 10) {
            sections[i].scrollIntoView({ behavior: 'smooth' });
            return;
        }
    }
}


window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollButton');
    const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 5;

    btn.innerHTML = atBottom ? '&#8593;' : '&#8595;';
});

