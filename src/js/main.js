initBurger();
openSearch();
initMainSwiper();
initReviewSwiper();

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

function initMainSwiper() {
  const mainSwiperElement = document.querySelector('.swiper_review');

  if (mainSwiperElement) {
    const swiper = new Swiper('.main_swiper', {
      slidesPerView: 1.3,
      centeredSlides: true,
      spaceBetween: 30,
      speed: 3000,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 2500,
      },

      pagination: {
        el: '.swiper-pagination',
      },

      breakpoints: {
        320: {
          slidesPerView: 1.05,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1.3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2.1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 1.1,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 1.3,
          spaceBetween: 30,
        },
      },
    });
  }
}

function initReviewSwiper() {
  const reviewSwiperElement = document.querySelector('.swiper_review');

  if (reviewSwiperElement) {
    const swiperReview = new Swiper('.swiper_review', {
      slidesPerView: 2,
      spaceBetween: 60,
      speed: 3000,
      grabCursor: true,
      loop: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 60,
        },
        1920: {
          slidesPerView: 3,
        },
      },
    });
  }
}
