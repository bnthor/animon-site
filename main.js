import './style.css'
import './syntax.css'
import { animon } from 'animon/dist/animon.esm.js';


// -------------
// LAUNCH ANIMON
// -------------

animon();


// -------------------
// LAUNCH HIGHLIGHT JS
// -------------------

hljs.highlightAll();


// --------------------
// MOBILE MENU TOGGLING
// --------------------

const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav');

if (hamburger && navigation) {
  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('is-active');
      navigation.classList.toggle('is-visible');
  });
}


// --------------------------
// CLOSE MOBILE MENU ON CLICK
// --------------------------

const navItems = document.querySelectorAll('.nav__item');

for (let item of navItems) {
  item.addEventListener('click', () => {
      hamburger.classList.remove('is-active');
      navigation.classList.remove('is-visible');
  })
}

