"use strict"

// variable preloader
var preloader = document.querySelector('.preloader');

// Waiting to load resources
window.addEventListener('load', function(){
    if (preloader) {
        preloader.classList.toggle('fade');
        setTimeout(function(){
            preloader.style.display = 'none';
        }, 1000);
    }

});