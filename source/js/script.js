let mainNav = document.querySelector('.main-nav');
let navBurger = document.querySelector('.main-nav__burger');

mainNav.classList.remove('main-nav--nojs');

navBurger.addEventListener('click', function() {
  if(mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.remove('main-nav--opend');
    mainNav.classList.add('main-nav--closed');
  }
})
