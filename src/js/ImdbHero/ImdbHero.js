async function imdbHero() {
  let imdbHeroRes = await fetch("http://localhost:3000/imdbHero");
  let imdbHeroData = await imdbHeroRes.json();

  let imdbHeroHTML = imdbHeroData
    .map((item) => {
      return `
         <div class="swiper-slide">
                <div class="video">
                    <img src="${item.VidSrc}" alt="play">
                </div>
                <div class="cover">
                  <div class="left">
                    <img src="${item.imgMovieSrc}" alt="${item.imgMovieAlt}">
                    <img src="${
                      item.imgWatchlist
                    }" alt="wathclist" class="watchlist">
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

  document.querySelectorAll('.swiper-slide').forEach(slide => {
    const playImg = slide.querySelector('.videoPlay img');
    const originalSrc = playImg.src;
    const hoverSrc = "https://raw.githubusercontent.com/Dorsavali/IMDb/refs/heads/images/playYellow.svg";


    slide.addEventListener('mouseenter', () => {
      playImg.src = hoverSrc;
    });
    slide.addEventListener('mouseleave', () => {
      playImg.src = originalSrc;
    });
    slide.addEventListener('click', () => {
      playImg.src = (playImg.src === originalSrc) ? hoverSrc : originalSrc;
    });
  });
}

export default imdbHero;
