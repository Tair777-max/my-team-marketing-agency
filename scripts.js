const movingImages = document.querySelector('.moving-images');
let animationPaused = false;

movingImages.addEventListener('mouseenter', () => {
    animationPaused = true;
    movingImages.style.animationPlayState = 'paused';
});

movingImages.addEventListener('mouseleave', () => {
    animationPaused = false;
    movingImages.style.animationPlayState = 'running';
});
