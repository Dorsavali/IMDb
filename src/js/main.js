import logos from "./Header/Header";
import menu from "./Menu/Menu";
import imdbHero from "./ImdbHero/ImdbHero";
import featured from "./featured/featured";

async function allData() {
  await slider();
}
allData();

async function slider() {
  await logos();
  await menu();
  await imdbHero();
  await featured();

  const heroSwiper = new Swiper(".imdbHeroSwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 25000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".imdbHero .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".imdbHero .swiper-button-next",
      prevEl: ".imdbHero .swiper-button-prev",
    },
    breakpoints: {
      0: { pagination: false, navigation: false },
      768: {
        pagination: false,
        navigation: {
          nextEl: ".imdbHero .swiper-button-next",
          prevEl: ".imdbHero .swiper-button-prev",
        },
      },
    },
  });

  const featuredSwiper = new Swiper(".featuredswiper", {
    spaceBetween: 1,
    centeredSlides: false,
    autoplay: {
      delay: 250000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".featured .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".featured .swiper-button-next",
      prevEl: ".featured .swiper-button-prev",
    },
    breakpoints: {
      0: { pagination: false, navigation: false , slidePerView : 1.1},
      768: {
        pagination: false,
        navigation: {
          nextEl: ".featured .swiper-button-next",
          prevEl: ".featured .swiper-button-prev",
        },
      },
    },
  });
}
