async function top10() {
    let titletop10Res = await fetch("http://localhost:3000/titletop10");
    let titletop10Data = await titletop10Res.json();
  
    let titletop10HTML = titletop10Data
      .map((item) => {
        return `
            <span class="bar"></span>
            <span class="text">${item.title}</span>
            <span class="chev">${item.chev}</span>
          `;
      })
      .join("");
  
    document
      .querySelector(".titletop10")
      .insertAdjacentHTML("afterbegin", titletop10HTML);

      let top10Res = await fetch("http://localhost:3000/top10");
      let top10Data = await top10Res.json();
    
      let top10HTML = top10Data
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
        .querySelector(".top10swiper .swiper-wrapper")
        .insertAdjacentHTML("afterbegin", top10HTML);
 
  }
  
  export default top10;