//  Abrir Hamburger Menu

const botonHamburger = document.querySelector(".headerHamburger");
const menuMobile = document.querySelector(".headerNav");

botonHamburger.addEventListener("click", function (e) {
  e.preventDefault();
  botonHamburger.classList.toggle("open");
  menuMobile.classList.toggle("headerNavOpen");
});

menuMobile.addEventListener("click", function () {
  menuMobile.classList.remove("header__navMobileOpen");
  botonHamburger.classList.remove("open");
});

// Cerrar Modal Urgencias

const cerrarModal = document.querySelector("#cerrarModalUrgencias");
const modalError = document.querySelector(".modalUrgencias");

cerrarModal.addEventListener("click", function(e) {
    modalError.classList.add("modalUrgenciasClose")
})


//  Boton Volver Arriba

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