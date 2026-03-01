// Select the hamburger button, sliding menu, and close button
const hamburgerMenu = document.querySelector('.hamburger-menu');
const slidingMenu = document.querySelector('.sliding-menu');
const closeMenu = document.querySelector('.close-menu');

// Toggle the sliding menu when the hamburger button is clicked
hamburgerMenu.addEventListener('click', () => {
    slidingMenu.classList.add('active');
});

// Close the sliding menu when the close button is clicked
closeMenu.addEventListener('click', () => {
    slidingMenu.classList.remove('active');
});

// Optional: Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (
        !slidingMenu.contains(event.target) &&
        !hamburgerMenu.contains(event.target) &&
        slidingMenu.classList.contains('active')
    ) {
        slidingMenu.classList.remove('active');
    }
});
