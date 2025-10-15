const humburger = document.querySelector('#menu');
const navigator = document.querySelector('.styletop')

humburger.addEventListener('click', () => {
    humburger.classList.toggle('show');
    navigator.classList.toggle('show');
});

document.getElementById('currentyear').textContent = new Date().getFullYear();


document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;