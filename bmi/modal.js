export const Modal = {
    modalWrapper: document.querySelector('.modal'),
    modalTitle: document.querySelector('.modal h2'),
    modalParagraph: document.querySelector('.modal p'),
    modalButton: document.querySelector('.close')
}

export function toggleScreen() {
    Modal.modalWrapper.classList.toggle('hide')
}

export function comeback() {
    let height = document.querySelector('#height')
    let weight = document.querySelector('#weight')
    height.value = ''
    weight.value = ''
    toggleScreen()
}
