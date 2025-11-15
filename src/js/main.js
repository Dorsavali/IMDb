import logos from "./Header/Header";
import menu from "./Menu/Menu";
import imdbHero from "./ImdbHero/ImdbHero";
import featured from "./featured/featured";
import celebs from "./celebs/celebs";
import signin from "./signin/signin";
import top10 from "./top10/top10";
import favorites from "./favorites/favorites";
import genre from "./genre/genre";
import orginal from "./orginal/orginal";
import prime from "./prime/prime";
import explore from "./explore/explore";
import soon from "./soon/soon";

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
  await signin();
  await top10();
  await favorites();
  await genre();
  await orginal();
  await prime();
  await explore();
  await soon();
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
      0: { navigation: false, loop: true },
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
    breakpoints: {
      0: { navigation: false, spaceBetween: 110, slidesPerView: 3 },
      768: {
        slidesPerView: 6,
        spaceBetween: 0,
        navigation: {
          nextEl: ".celebrities .swiper-button-next",
          prevEl: ".celebrities .swiper-button-prev",
        },
      },
    },
  });

  var top10swiper = new Swiper(".top10swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: { navigation: false, spaceBetween: 2, slidesPerView: 2 },
      768: {
        slidesPerView: 6,
        spaceBetween: 0,
        navigation: {
          nextEl: ".top10 .swiper-button-next",
          prevEl: ".top10 .swiper-button-prev",
        },
      },
    },
  });

  var favoritesswiper = new Swiper(".favoritesswiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: { navigation: false, spaceBetween: 2, slidesPerView: 2 },
      768: {
        slidesPerView: 6,
        spaceBetween: 0,
        navigation: {
          nextEl: ".favorites .swiper-button-next",
          prevEl: ".favorites .swiper-button-prev",
        },
      },
    },
  });

  var genreswiper = new Swiper(".genreswiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: { navigation: false, spaceBetween: 2, slidesPerView: 1.4 },
      768: {
        slidesPerView: 4,
        spaceBetween: 0,
        navigation: {
          nextEl: ".genre .swiper-button-next",
          prevEl: ".genre .swiper-button-prev",
        },
      },
    },
  });

  var orginalswiper = new Swiper(".orginalswiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".orginal .swiper-button-next",
      prevEl: ".orginal .swiper-button-prev",
    },
    breakpoints: {
      0: { navigation: false, loop: true, slidesPerView: 1, spaceBetween: 0 },
      768: {
        spaceBetween: 27,
        slidesPerView: 3,
        navigation: {
          loop: true,
          nextEl: ".orginal .swiper-button-next",
          prevEl: ".orginal .swiper-button-prev",
        },
      },
    },
  });

  var primeswiper = new Swiper(".primeswiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: { navigation: false, spaceBetween: 2, slidesPerView: 2 },
      768: {
        slidesPerView: 6,
        spaceBetween: 0,
        navigation: {
          nextEl: ".prime .swiper-button-next",
          prevEl: ".prime .swiper-button-prev",
        },
      },
    },
  });

  var soonswiper = new Swiper(".soonswiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".soon .swiper-button-next",
      prevEl: ".soon .swiper-button-prev",
    },
    breakpoints: {
      0: { navigation: false, loop: true, slidesPerView: 1, spaceBetween: 0 },
      768: {
        spaceBetween: 27,
        slidesPerView: 3,
        navigation: {
          loop: true,
          nextEl: ".soon .swiper-button-next",
          prevEl: ".soon .swiper-button-prev",
        },
      },
    },
  });
}
