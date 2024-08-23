window.addEventListener('load', () => {
    const lawnmower = document.querySelector('.lawnmower');
    const grass = document.querySelector('.grass');
    const text = document.querySelector('.text');

    // Start the lawnmower animation after a short delay
    setTimeout(() => {
        lawnmower.classList.add('active');
        grass.style.clipPath = 'inset(0 0 0 0)'; // Reveal the text
        text.style.opacity = '1'; // Make the text visible
    }, 1000); // Adjust delay as needed
});
