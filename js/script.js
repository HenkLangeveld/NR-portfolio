// const mobileNavButton = document.querySelector('.show-mobile-nav-button');
// const hideMobileNavButton = document.querySelector('.hide-mobile-nav-button');
// const mainNav = document.querySelector('.main-nav__list');

// function showMobileNav() {
//   mainNav.classList.add('show-mobile-nav__list');
//   hideMobileNavButton.classList.add('show-button')
// }

// function hideMobileNav() {
//   mainNav.classList.remove('show-mobile-nav__list');
//   hideMobileNavButton.classList.remove('show-button')
// }

// mobileNavButton.addEventListener('click', showMobileNav);
// hideMobileNavButton.addEventListener('click', hideMobileNav);

const mobileNav = document.querySelector('.icon');
const mainNav = document.querySelector('.main-nav__list');

function toggelMobileNav() {
  mobileNav.classList.toggle('close')
  mainNav.classList.toggle('show-mobile-nav__list');
}

mobileNav.addEventListener('click', toggelMobileNav);