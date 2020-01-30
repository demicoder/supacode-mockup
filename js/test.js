const mainNav = document.querySelector('#main__header');
const navScrollClass = 'main__header--scrolled';

const fixNav = () => {
  if (window.scrollY > mainNav.offsetHeight / 2) {
    mainNav.classList.add(navScrollClass);
  } else {
    mainNav.classList.remove(navScrollClass);
  }
};

window.addEventListener('scroll', fixNav);
window.addEventListener('resize', fixNav);
