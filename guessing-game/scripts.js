// variáveis

let randomNumber = (Math.random() * 10).toFixed(0)
let count = 0
let button = document.querySelector('.button-screen1')
let screen1 = document.querySelector('.screen1')
let screen2 = document.querySelector('.screen2')
let textScreen2 = screen2.querySelector('h1')
let textScreen1 = screen1.querySelector('.screen1-p')
let button2 = screen2.querySelector('.button-screen2')

// eventos botões
button.addEventListener('click', verify)
button2.addEventListener('click', comeback)

// funções
function verify(event) {
    event.preventDefault()
    count++
    let userNumber = document.querySelector('#input-number').value
    if (userNumber == randomNumber) {
        toggleScreen()
        textScreen2.innerText = `You won in ${count} tries!`
    } else {
        if (count == 1) {
            textScreen1.innerText = `You missed ${count} time. Try again!`
        } if (count > 1) {
            textScreen1.innerText = `You missed ${count} times. Try again!`
        }
        textScreen1.classList.remove('hide')
    }
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function comeback() {
    count = 0
    toggleScreen()
    randomNumber = (Math.random() * 10).toFixed(0)
    textScreen1.classList.add('hide')
    document.getElementById('input-number').value=''
}