import {header} from './header.js'
import {slider} from './slider.js'
import {testimonials} from './testimonials.js'

let buttonHeader = document.querySelector('.header-button')
let headerPath = document.querySelector('.header-path')
let nav = document.querySelector('.header-nav')
let openClose = false;
let count = 1;
let countButton = 1;
let stopper = false;

const radios = {
    radio1: document.getElementById("radio1"),
    radio2: document.getElementById("radio2"),
    radio3: document.getElementById("radio3"),
    radio4: document.getElementById("radio4"),
}
const buttons = {
    prev: document.getElementById('prev-button'),
    next: document.getElementById('next-button'),
}


const {openHeader} = header(headerPath, nav, openClose)

const {stopSlider, slides} = slider(count, stopper)

const {prevChange, nextChange} = testimonials(countButton)


buttonHeader.addEventListener('click', openHeader)
// slider
radios.radio1.addEventListener('click', stopSlider)
radios.radio2.addEventListener('click', stopSlider)
radios.radio3.addEventListener('click', stopSlider)
radios.radio4.addEventListener('click', stopSlider)
// testimonials
buttons.prev.addEventListener('click', prevChange)
buttons.next.addEventListener('click', nextChange)

prevChange()
slides()