import logos from "./Header/Header";
import menu from "./Menu/Menu";
import imdbHero from "./ImdbHero/ImdbHero";
import featured from "./featured/featured";
import celebs from "./celebs/celebs";

async function allData() {
  await slider();
}
allData();

async function slider() {
  await logos();
  await menu();
  await imdbHero();
  await featured();
  await celebs();
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

  var featuredswiper = new Swiper(".featuredswiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".featured .swiper-button-next",
      prevEl: ".featured .swiper-button-prev",
    },
    breakpoints: {
      0: { navigation: false ,   loop: true},
      768: {
        navigation: {
          loop: true,
          nextEl: ".featured .swiper-button-next",
          prevEl: ".featured .swiper-button-prev",
        },
      },
    },
  });

  var celebsswiper = new Swiper(".celebsswiper", {
    slidesPerView: 3,
    spaceBetween: 70,
    navigation: {
      nextEl: ".celebs .swiper-button-next",
      prevEl: ".celebs .swiper-button-prev",
    },
    breakpoints: {
      0: { navigation: false,spaceBetween: 70  ,   slidesPerView: 3},
      768: {
        slidesPerView: 6,
        spaceBetween: 0,
        navigation: {
          nextEl: ".celebs .swiper-button-next",
          prevEl: ".celebs .swiper-button-prev",
        },
      },
    },
  });
}
