"use strict"

const mobileButton = document.querySelector('.menu-mobile');
const menuWrapper = document.querySelector('.menu-wrapper');

if (mobileButton) {
    mobileButton.addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.toggle('active');
        menuWrapper.classList.toggle('active');
    });
}