document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const navToggle = document.querySelector('nav ul');
const burgerMenu = document.querySelector('.burger');

burgerMenu.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    burgerMenu.textContent = burgerMenu.textContent === '☰' ? '✖' : '☰';
});
