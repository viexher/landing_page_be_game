document.getElementById("year").innerHTML = (new Date().getFullYear());


/* Toggle menu on mobile */

function menuToggle() {
  const navMenu = document.querySelectorAll('.main-menu');

  navMenu.forEach(navLinks => navLinks.classList.toggle('nav-toggle-show'));
}

document.querySelector('.toggle').addEventListener('click', menuToggle);

