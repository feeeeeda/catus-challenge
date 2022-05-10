// Abre e fecha o menu quando clicar no ícone hamburguer
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
  element.addEventListener('click', () => nav.classList.toggle('show'));
}

// quando clicar em um item do menubar, esconder o menu

const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', () => nav.classList.remove('show'));
}