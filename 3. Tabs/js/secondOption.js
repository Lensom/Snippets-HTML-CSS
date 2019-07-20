"use strict"

document.addEventListener('DOMContentLoaded', function () {

  // Variables
  const links = document.getElementsByClassName('tab-link');
  const tabs = document.getElementsByClassName('tab-block');

  function clickTabs(linkClickEvent) {
    // Remove active class from links
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }

    let clickedLink = linkClickEvent.currentTarget;
    clickedLink.classList.add('active');

    linkClickEvent.preventDefault()

    // Remove active class from tabs
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }

    // Get href active link and set active class to tab
    let link = linkClickEvent.target;
    let activeLink = link.getAttribute('href');
    let activeTab = document.querySelector(activeLink);
    activeTab.classList.add('active');

  }

  // Add event click on all links
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', clickTabs)
  }

});