// script.js (optional)
const slider = document.querySelector('.slider');

function addImageToSlider(src, alt) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    slider.appendChild(img);
}

// Usage example:
addImageToSlider('image3.jpg', 'Image 3');
