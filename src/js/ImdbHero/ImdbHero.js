async function imdbHero() {
  let imdbHeroRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
  let imdbHeroData = await imdbHeroRes.json();

  let imdbHeroHTML = imdbHeroData.imdbHero
    .map((item) => {
      return `
         <div class="swiper-slide">
                <div class="video image-fade">
                    <img src="${item.VidSrc}" alt="play" >
                </div>
                <div class="cover">
                  <div class="left">
                    <img src="${item.imgMovieSrc}" alt="${item.imgMovieAlt}">
                    <img src="${item.imgWatchlist}" alt="wathclist" class="watchlist">
                  </div>
                  <div class="right">
                    <div class="videoPlay">
                     <img src="${item.imgPlaySrc}" alt="play">
                     ${item.duration}
                    </div>
                    <div class="title">${item.title}</div>
                    <div class="description">${item.description}</div>
                    <div class="ratings">
                      <div class="likes">
                        <img src="${item.imgLikeSrc}" alt="${item.imgLikeAlt}">
                        ${item.likeNum}
                      </div>
                      <div class="hearts">
                        <span>${item.heartSpan}</span>
                        ${item.heartNum}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      `;
    })
    .join("");

  document
    .querySelector(".imdbHeroSwiper .swiper-wrapper")
    .insertAdjacentHTML("afterbegin", imdbHeroHTML);

  document.querySelectorAll(".swiper-slide").forEach((slide) => {
    const playImg = slide.querySelector(".videoPlay img");
    const originalSrc =
      "https://raw.githubusercontent.com/Dorsavali/IMDb/refs/heads/images/play.svg";
    const hoverSrc =
      "https://raw.githubusercontent.com/Dorsavali/IMDb/refs/heads/images/playYellow.svg";

    slide.addEventListener("mouseenter", () => {
      playImg.src = hoverSrc;
    });
    slide.addEventListener("mouseleave", () => {
      playImg.src = originalSrc;
    });
    slide.addEventListener("click", () => {
      playImg.src = (playImg.src === originalSrc) ? hoverSrc : originalSrc;
    });
  });
  let titleDivRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
  let titleDivData = await titleDivRes.json();

  let titleDivHTML = titleDivData.titleDiv
    .map((item) => {
      return `
     ${item.titleDiv}
      `;
    })
    .join("");

  document
    .querySelector(".titleDiv")
    .insertAdjacentHTML("afterbegin", titleDivHTML);
  let trailersRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
  let trailersData = await trailersRes.json();

  let trailersHTML = trailersData.trailers
    .map((item) => {
      return `
       ${item.trailers}
        `;
    })
    .join("");

  document
    .querySelector(".trailers")
    .insertAdjacentHTML("afterbegin", trailersHTML);

  let ImdbHeroDesktopRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
  let ImdbHeroDesktopData = await ImdbHeroDesktopRes.json();

  let ImdbHeroDesktopHTML = ImdbHeroDesktopData.imdbHeroDesktop.map((item) => {
    return `
      
        <div class="coverDesktop">
              <div class="left">
                <img src="${item.imgMovieSrc}" alt="${item.imgMovieAlt}">
                <img src="${item.imgWatchlist}" alt="wathclist" class="watchlist">
              </div>
              <div class="right">
                <div class="videoPlay">
                 <img src="${item.imgPlaySrc}" alt="play">
                 ${item.duration}
                </div>
                <div class="title">${item.title}</div>
                <div class="description">${item.description}</div>
                <div class="ratings">
                  <div class="likes">
                    <img src="${item.imgLikeSrc}" alt="${item.imgLikeAlt}">
                    ${item.likeNum}
                  </div>
                  <div class="hearts">
                    <span>${item.heartSpan}</span>
                    ${item.heartNum}
                  </div>
                </div>
              </div>
            </div>
      `;
  }).join("");

  document
    .querySelector(".items")
    .insertAdjacentHTML("afterbegin", ImdbHeroDesktopHTML);

  document.querySelectorAll(".coverDesktop").forEach((slide) => {
    const playImg = slide.querySelector(".videoPlay img");
    const originalSrc = playImg.src;
    const hoverSrc =
      "https://raw.githubusercontent.com/Dorsavali/IMDb/refs/heads/images/playYellow.svg";

    slide.addEventListener("mouseenter", () => {
      playImg.src = hoverSrc;
    });
    slide.addEventListener("mouseleave", () => {
      playImg.src = originalSrc;
    });
    slide.addEventListener("click", () => {
      playImg.src = (playImg.src === originalSrc) ? hoverSrc : originalSrc;
    });
  });
}

export default imdbHero;
