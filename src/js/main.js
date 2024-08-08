initBurger();


function initBurger() {
  const burger = document.querySelector('.burger_menu');
  const menu = document.querySelector('.menu');

  burger.addEventListener('click', (item) => {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('menu_active');
  });
}
