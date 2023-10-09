

let menu = document.getElementById('menu');
let toggle_open = document.getElementById('toggle_open');
let toggle_close = document.getElementById('toggle_close');
let menuLinks = document.querySelectorAll('.menu a');

toggle_open.addEventListener('click', toggleMenu);
toggle_close.addEventListener('click', toggleMenu);

// Agregar un evento de clic a cada enlace del menú para cerrar el menú cuando se hace clic
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('show-menu')) {
      toggleMenu();
    }
  });
});

function toggleMenu() {
  menu.classList.toggle('show-menu');

  if (menu.classList.contains('show-menu')) {
    toggle_open.style.display = 'none';
    toggle_close.style.display = 'block';
  } else {
    toggle_open.style.display = 'block';
    toggle_close.style.display = 'none';
  }
}
