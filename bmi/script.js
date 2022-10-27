import {Modal, toggleScreen, comeback} from './modal.js'

const button = document.querySelector('.button')
const error = document.querySelector('.error')
let imc = 0

button.addEventListener('click', calcIMC)

Modal.modalButton.addEventListener('click', comeback)


function modalChange() {
    imc = Number(imc)
    error.classList.remove('open')
    if (imc < 18.5) {
        Modal.modalTitle.innerText = `Your BMI is ${imc}`
        Modal.modalParagraph.innerText = 'You are in Underweight.'
        toggleScreen()
    } else if (imc >= 18.5 && imc < 25) {
        Modal.modalTitle.innerText = `Your BMI is ${imc}`
        Modal.modalParagraph.innerText = 'You are in Normal weight.'
        toggleScreen()
    } else if (imc >= 25 && imc < 30) {
        Modal.modalTitle.innerText = `Your BMI is ${imc}`
        Modal.modalParagraph.innerText = 'You are in Overweight.'
        toggleScreen()
    } else if (imc >= 30 && imc < 35) {
        Modal.modalTitle.innerText = `Your BMI is ${imc}`
        Modal.modalParagraph.innerText = 'You are in Obesity.'
        toggleScreen()
    } else if (imc >= 35 && imc < 40) {
        Modal.modalTitle.innerText = `Your BMI is ${imc}`
        Modal.modalParagraph.innerText = 'You are Severely Obese.'
        toggleScreen()
    } else if (imc >= 40) {
        Modal.modalTitle.innerText = `Your BMI is ${imc}`
        Modal.modalParagraph.innerText = 'You are in Morbidly Obese.'
        toggleScreen()
    } else {
        error.classList.add('open')
    }
}

function calcIMC(event) {
    event.preventDefault()
    let height = document.querySelector('#height').value
    let weight = document.querySelector('#weight').value
    imc = (weight / ((height / 100) ** 2)).toFixed(1)
    modalChange()
}