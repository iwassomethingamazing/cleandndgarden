window.addEventListener('load', () => {
    const lawnmower = document.querySelector('.lawnmower');
    const grass = document.querySelector('.grass');

    // Start the lawnmower animation after a short delay
    setTimeout(() => {
        lawnmower.classList.add('active');
        grass.style.clipPath = 'inset(0 0 0 0)'; // Simulate cutting the grass
    }, 1000); // Adjust delay as needed
});
