export function slider(count, stopper) {
    document.getElementById("radio1").checked = true;
    
    function stopSlider() {
        stopper = true
    }
    
    function slides() {
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
    }

    return {
        stopSlider,
        slides,
    }
}