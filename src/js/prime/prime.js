async function prime() {
    let primetitleRes = await fetch("http://localhost:3000/primetitle");
    let primetitleData = await primetitleRes.json();
  
    let primetitleHTML = primetitleData
      .map((item) => {
        return `
       <div class="top">
       <h1 class="title">${item.title}</h1>
       <a class="more-link" href="#">${item.moreLink}</a>
       
       </div>
     
      <div class="header">
       <div class="prime-text">
       ${item.text}
       </div>
       <div class="prime-description">
       ${item.heading}
       </div>
      </div>
        `;
      })
      .join("");
  
    document
      .querySelector(".primetitle")
      .insertAdjacentHTML("afterbegin", primetitleHTML);

      let primeRes = await fetch("http://localhost:3000/prime");
      let primeData = await primeRes.json();
    
      let primeHTML = primeData
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
        .querySelector(".primeswiper .swiper-wrapper")
        .insertAdjacentHTML("afterbegin", primeHTML);
 

}

export default prime;