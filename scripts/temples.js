const humburger = document.querySelector('#menu');
const navigator = document.querySelector('.navigation')

humburger.addEventListener('click', () => {
    humburger.classList.toggle('show');
    navigator.classList.toggle('show');
});

document.getElementById('currentyear').textContent = new Date().getFullYear();


document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;