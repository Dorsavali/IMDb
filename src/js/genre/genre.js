async function genre() {
  let titlegenreRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
  let titlegenreData = await titlegenreRes.json();

  let titlegenreHTML = titlegenreData.titlegenre
    .map((item) => {
      return `
        <div class="title">
        <span class="bar"></span>
            <span class="text">${item.title}</span>
            <span class="chev">${item.chev}</span></div>
          `;
    })
    .join("");

  document
    .querySelector(".titlegenre")
    .insertAdjacentHTML("afterbegin", titlegenreHTML);

  let genreRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
  let genreData = await genreRes.json();

  let genreHTML = genreData.genre
    .map((item) => {
      return `
            <div class="swiper-slide">
              <div class="cover">
                <div class="img">
                  <img src="${item.imgMovieSrc}" alt="poster">
                  <img src="${item.imgWatchlist}" alt="watchlist">
                </div>
                <div class="title">
                ${item.title}
                </div>
              </div>
            </div>

          `;
    })
    .join("");

  document
    .querySelector(".genreswiper .swiper-wrapper")
    .insertAdjacentHTML("afterbegin", genreHTML);
}

export default genre;
