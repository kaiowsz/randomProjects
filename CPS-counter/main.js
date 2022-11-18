let clicker = document.querySelector('.clicker')
let clicks = document.querySelector('.clicks-start')
let timeRemain = document.querySelector('.timer')
let counterClicks = 0;
let counterTime = 5;
let stopper = false;
let result = 0

let image = document.querySelector('.modal img')
let container = document.querySelector('.container')
let modalCPS = document.querySelector('.modal h2')
let modalText = document.querySelector('.modal p')
let playAgain = document.querySelector('.btn-modal')


const colors = ['#000', '#111', '#222', '#333', '#444', '#555', '#666', '#777', '#888', '#999', '#bebcbc', '#dbd8d8', '#FFF']
let random = 0;

clicker.addEventListener('click', countClicks)
playAgain.addEventListener('click', resetAll)

function countClicks() {
    if (random == 0) {
        timer()
    }
    if (stopper == true) {
        return
    }

    if (random == 12) {
        random = 1
    } else {
        random++
    }
    counterClicks++
    clicks.textContent = counterClicks;
}

function timer() {
    setTimeout(() => {
        if (counterTime <= 1) {
            counterTime = 0
            timeRemain.textContent = `Time remain: ${counterTime} sec`
            stopper = true;
            calcCPS()
            changeModal()
            return
        } else {
            counterTime--
        }
        timeRemain.textContent = `Time remain: ${counterTime} sec`
        timer()
    }, 1000);
}

function calcCPS() {
    result = counterClicks / 5
}

function changeModal() {
    container.classList.toggle('off')
    modalCPS.textContent = `${result} CPS`
    modalText.textContent = `You clicked ${counterClicks} times. Very well.`
    imageChange()
    
}

function imageChange() {
    /* 1 star = less than 4 CPS
    2 star = between 4 CPS and 7 CPS
    3 = between 7 CPS AND 9 CPS
    4 = between 9 and 12 CPS
    5 = more than 12 CPS
    */
    if (result < 4) {
        image.src = './stars/onestars.png'
    }
    if (result >= 4 && result < 7) {
        image.src = './stars/twostars.png'
    }
    if (result >= 7 && result < 9) {
        image.src = './stars/threestars.png'
    }
    if (result >= 9 && result < 12) {
        image.src = './stars/fourstars.png'
    }
    if (result >= 12) {
        image.src = './stars/fivestars.png'
    }
}

function resetAll() {
    changeModal()
    counterClicks = 0;
    counterTime = 5;
    stopper = false;
    result = 0;
    random = 0;
    clicks.textContent = counterClicks;
    timeRemain.textContent = `Time remain: ${counterTime} sec`
}