import logos from "./Header/Header";
import menu from "./Menu/Menu";
import imdbHero from "./ImdbHero/ImdbHero";

async function allData() {
  await slider();
}
allData();

async function slider() {
  await logos();
  await menu();
  await imdbHero();
  var swiper = new Swiper(".imdbHeroSwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 25000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        pagination: false,
        navigation: false,
      },
      768: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    },
  });
}
