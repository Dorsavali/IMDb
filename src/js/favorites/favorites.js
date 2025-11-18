async function favorites() {
    let titlefavoritesRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
    let titlefavoritesData = await titlefavoritesRes.json();
  
    let titlefavoritesHTML = titlefavoritesData.titlefavorites
      .map((item) => {
        return `
        <div class="title">
        <span class="bar"></span>
            <span class="text">${item.title}</span>
            <span class="chev">${item.chev}</span></div>

            <div class="descirption">${item.description}</div>
          `;
      })
      .join("");
  
    document
      .querySelector(".titlefavorites")
      .insertAdjacentHTML("afterbegin", titlefavoritesHTML);

      let favoritesRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
      let favoritesData = await favoritesRes.json();
    
      let favoritesHTML = favoritesData.favorites
        .map((item) => {
          return `
            <div class="swiper-slide">
              <div class="cover">
                <div class="img">
                  <img src="${item.imgMovieSrc}" alt="poster">
                  <img src="${item.imgWatchlist}" alt="watchlist">
                </div>
                <div class="ratings">
                <div class="stars">
                  <img src="${item.starSrc}" alt="star">
                  ${item.number}
                </div>
                <div class="star"><img src="${item.staroutline}
                  " alt="star"></div>
                </div>
                <div class="title">
                ${item.title}
                </div>
                <div class="buttons">
                  <button class="watch">Watch options</button>
                  <button><img src="${item.trailerSrc}" alt="play">
                    Trailer</button>
                </div>
              </div>
            </div>

          `;
        })
        .join("");
    
      document
        .querySelector(".favoritesswiper .swiper-wrapper")
        .insertAdjacentHTML("afterbegin", favoritesHTML);
 
  }
  
  export default favorites;