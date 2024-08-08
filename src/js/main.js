initBurger();
openSearch();

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


function openSearch() {
  const searchWrapper = document.querySelector('.search_wrap');
  const searchBar = document.querySelector('.search_bar');
  const searchBtn = document.querySelector('.search_icon');
  const searchInput = document.getElementById('search_input');

  searchBtn.addEventListener('click', () => {
    event.stopPropagation();
    searchBtn.classList.add('searchBtn_active');
    searchWrapper.classList.add('searchWrapper_active');
    searchInput.classList.add('searchInput_active');
    searchBar.classList.add('searchBar_active');
  });

  document.addEventListener('click', (event) => {
    if (
      !searchWrapper.contains(event.target) &&
      !searchBtn.contains(event.target)
    ) {
      searchBtn.classList.remove('searchBtn_active');
      searchWrapper.classList.remove('searchWrapper_active');
      searchInput.classList.remove('searchInput_active');
      searchBar.classList.remove('searchBar_active');
    }
  });
}
