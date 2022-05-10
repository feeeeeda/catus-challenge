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

// Swiper.js // Carousel
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 4,
  speed: 300,
  breakpoints: {
    // when window width is >= 640px
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 900px
    900: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // when window width is >= 1380px
    1380: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
