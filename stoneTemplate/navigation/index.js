let headerButton = document.querySelector('.header-button')
headerButton.addEventListener('click', toggleNav)

function toggleNav() {
    document.querySelector('.header-nav').classList.toggle('off')
}