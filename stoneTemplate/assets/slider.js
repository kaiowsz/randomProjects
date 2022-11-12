count = 1;
document.getElementById("radio1").checked = true;

const radios = {
    radio1: document.getElementById("radio1"),
    radio2: document.getElementById("radio2"),
    radio3: document.getElementById("radio3"),
    radio4: document.getElementById("radio4"),
}

let stopper = false;

function stopSlider() {
    stopper = true
}

setInterval(() => {
    if (stopper == true) {
        return
    }
    
    count++
    if (count > 4) {
        count = 1
    }
    document.getElementById("radio"+count).checked = true;
}, 4000);


radios.radio1.addEventListener('click', stopSlider)
radios.radio2.addEventListener('click', stopSlider)
radios.radio3.addEventListener('click', stopSlider)
radios.radio4.addEventListener('click', stopSlider)

// testimonials script

const buttons = {
    prev: document.getElementById('prev-button'),
    next: document.getElementById('next-button'),
}

buttons.prev.addEventListener('click', prevChange)
buttons.next.addEventListener('click', nextChange)

let countButton = 1;

prevChange()

function prevChange() {
    document.querySelector('.comment'+countButton).classList.remove('on')
    if (countButton == 1) {
        countButton = 4;
    } else {
        countButton--
    } 
    document.querySelector('.comment'+countButton).classList.add('on')
}

function nextChange() {
    document.querySelector('.comment'+countButton).classList.remove('on')
    if (countButton == 4) {
        countButton = 1;
    } else {
        countButton++
    }
    document.querySelector('.comment'+countButton).classList.add('on')
}