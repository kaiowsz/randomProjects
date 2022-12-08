const images = document.querySelectorAll('.customer')

const prevButton = document.querySelector('.prev-button')
const nextButton = document.querySelector('.next-button')
let index = 0;

nextButton.addEventListener('click', forward)
prevButton.addEventListener('click', cback)


function forward() {
    images[index].classList.remove('on')
    index++
    if (index >= 4) {
        index = 0
    }
    images[index].classList.add('on')
}

function cback() {
    images[index].classList.remove('on')

    if (index == 0) {
        index = 3
    } else {
        index--
    }
    
    console.log(index)
    images[index].classList.add('on')


}
