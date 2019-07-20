"use strict"

document.addEventListener('DOMContentLoaded', function () {

  // Variables
  const links = document.querySelectorAll('[data-tab]');

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', tabs);
  }

  function clear() {
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
      let id = links[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  function tabs(e) {
    e.preventDefault();
    clear();

    // Find link to add class active
    let parent = e.srcElement.parentNode;
    parent.classList.add('active');
    // e.target.classList.add('active');
    let id = event.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  }

});