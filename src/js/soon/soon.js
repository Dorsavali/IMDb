async function soon() {
    let titlesoonRes = await fetch("http://localhost:3000/titlesoon");
    let titlesoonData = await titlesoonRes.json();
  
    let titlesoonHTML = titlesoonData
      .map((item) => {
        return `
        <div class="titlesoon">
                 <div class="title">
        <span class="bar"></span>
            <span class="text">${item.title}</span>
            <span class="chev">${item.chev}</span></div>
        </div>
        <div class="description">
        ${item.description}
        </div>
          `;
      })
      .join("");
  
    document
      .querySelector(".soon-header")
      .insertAdjacentHTML("afterbegin", titlesoonHTML);
  
    let soonRes = await fetch("http://localhost:3000/soon");
    let soonData = await soonRes.json();
  
    let soonHTML = soonData
      .map((item) => {
        return `
 <div class="swiper-slide">
  <div class="poster">
  <img src="${item.imgSrc}" alt="poster">
  <div class="list">
  <img src="${item.imgPlay}" alt="list">
  ${item.number}
  </div>
  </div>
   <div class="text">
    <div class="left">
      <img src="${item.watchlistSrc}" alt="watchlist">
    </div>
    <div class="right">
      <div class="date">
        ${item.date}
      </div>
      <div class="title">
        ${item.title}
      </div>
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
      .querySelector(".soonswiper .swiper-wrapper")
      .insertAdjacentHTML("afterbegin", soonHTML);
  }
  
  export default soon;
  