initBurger();

function initBurger() {
  const burger = document.querySelector('.burger_menu');
  const menu = document.querySelector('.menu');
  const returnBtn = document.querySelector('.return_btn');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('menu_active');
    document.body.classList.toggle('body_lock');
  });

  returnBtn.addEventListener('click', () => {
    burger.classList.remove('burger_active');
    menu.classList.remove('menu_active');
    document.body.classList.remove('body_lock');
  });
}
