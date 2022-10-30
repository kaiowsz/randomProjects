import {Buttons} from './buttons.js'

Buttons.buttonPlay.addEventListener('click', play)
Buttons.buttonPause.addEventListener('click', pause)
Buttons.buttonStop.addEventListener('click', stop)
Buttons.buttonSet.addEventListener('click', set)
Buttons.buttonVolumeOn.addEventListener('click', volumeOn)
Buttons.buttonVolumeOff.addEventListener('click', volumeOff)

let secondsScreen = document.querySelector('.seconds')
let minutesScreen = document.querySelector('.minutes')
let seconds = 0
let minutes = 0
let pauseCounter = false
let audio = document.querySelector('audio')
audio.volume = 0.01;

function set() {
    minutes = Number(prompt('Quantos minutos?'))
    if (typeof(minutes) == 'number' && minutes > 0) {
        minutesScreen.textContent = minutes
    } else {
        minutesScreen.textContent = '00'
        alert('Insira um tempo válido.')
        return
    }
}

function play() {
    Buttons.buttonPlay.classList.add('hide')
    Buttons.buttonPause.classList.remove('hide')
    Buttons.buttonSet.classList.add('hide')
    Buttons.buttonStop.classList.remove('hide')
    pauseCounter = false
    counter()
}

function pause() {
    Buttons.buttonPlay.classList.remove('hide')
    Buttons.buttonPause.classList.add('hide')
    pauseCounter = true
}

function counter() {
    setTimeout(() => {
    if (seconds == 0 && minutes > 0) {
        seconds = 60;
        minutes--
    }
    if (pauseCounter == true) {
        return
    }
    if (seconds <= 0 && minutes <= 0) {
        secondsScreen.textContent = '00'
        minutesScreen.textContent = '00'
        Buttons.buttonSet.classList.remove('hide')
        Buttons.buttonStop.classList.add('hide')
        Buttons.buttonPlay.classList.remove('hide')
        Buttons.buttonPause.classList.add('hide')
        return;
    } else {
        counter()
    }
    seconds--
    secondsScreen.textContent = seconds
    minutesScreen.textContent = minutes
    if (secondsScreen.textContent.length <= 1) {
        secondsScreen.textContent = '0' + seconds
    }
    if (minutesScreen.textContent.length <= 1) {
        minutesScreen.textContent = '0' + minutes
    }
}, 1000)
}

function stop() {
    Buttons.buttonSet.classList.remove('hide')
    Buttons.buttonStop.classList.add('hide')
    Buttons.buttonPlay.classList.remove('hide')
    Buttons.buttonPause.classList.add('hide')
    minutes = 0
    seconds = 0
    pauseCounter = false
    counter()
}

function volumeOn() {
    Buttons.buttonVolumeOn.classList.toggle('hide')
    Buttons.buttonVolumeOff.classList.toggle('hide')
    audio.pause()
    audio.currentTime = 0
}

function volumeOff() {
    Buttons.buttonVolumeOn.classList.toggle('hide')
    Buttons.buttonVolumeOff.classList.toggle('hide')
    audio.play()
}