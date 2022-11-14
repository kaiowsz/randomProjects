export function testimonials(countButton) {
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

    return {
        prevChange,
        nextChange,
    }
}

