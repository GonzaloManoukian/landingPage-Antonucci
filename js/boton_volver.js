const buttonUp = document.querySelector('#button-up')

buttonUp.addEventListener('click', scrollUp)

function scrollUp() {

    window.scroll(0, 0);
    buttonUp.style.opacity = 0;
    buttonUp.style.pointerEvents = 'none'

}

window.onscroll = function() {
    const scroll = document.documentElement.scrollTop;

    if(scroll > 100) {
        buttonUp.style.opacity = 1;
        buttonUp.style.pointerEvents = 'all'
    } else if (scroll < 100) {
        buttonUp.style.opacity = 0;
        buttonUp.style.pointerEvents = 'none'

    }
    
}