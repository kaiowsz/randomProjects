export function factory(headerPath, nav, openClose) {
    function abrirHeader() {
        if (openClose == true) {
            openClose = false;
        } else {
            openClose = true;
        }
    
        if (openClose) {   
            headerPath.style.fill = "white";
        } else {
            headerPath.style.fill = "lightgray";
        }
        nav.classList.toggle('ondisplay')
    }

    return {
        abrirHeader
    }
}