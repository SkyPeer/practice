var divElement = document.querySelector('div');
divElement.onclick = function() {
    /*event.target.style.borderColor='red'; */
    if ( event.target.style.borderColor == 'red') {
        event.target.style.borderColor='white';
    }
    else {
        event.target.style.borderColor='red';
    }
};