"use strict"

document.addEventListener('DOMContentLoaded', function(){

    // Variables
    const mobileButton = document.querySelector('.menu-mobile');
    const menuWrapper = document.querySelector('.menu-wrapper');
    const arrayElements = [mobileButton, menuWrapper];

    // Mouse click event
    if (mobileButton) {
        mobileButton.addEventListener('click', function(event) {
            event.preventDefault();
            toggle(arrayElements);
        });
    }

    // Function class switching elements
    function toggle(elements) {
        elements.forEach(element => {
            element.classList.toggle('active');
        });
    }

});