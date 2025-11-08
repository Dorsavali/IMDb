async function celebs() {
    let titleCelebsRes = await fetch("http://localhost:3000/titleCelebs");
    let titleCelebsData = await titleCelebsRes.json();
  
    let titleCelebsHTML = titleCelebsData
      .map((item) => {
        return `
         <div class="lineSvg">|</div>
         ${item.titleCelebs}
          `;
      })
      .join("");
  
    document
      .querySelector(".titleCelebs")
      .insertAdjacentHTML("afterbegin", titleCelebsHTML);

      let celebsRes = await fetch("http://localhost:3000/celebs");
      let celebsData = await celebsRes.json();
    
      let celebsHTML = celebsData
        .map((item) => {
          return `
          <div class="swiper-slide">
                <div class="celebs">
                <img src="${item.celebSrc}" alt="celebrity">
                <div class="ratings">
                  <div class="number">
                  ${item.number}
                  </div>
                  <div class="text">
                  <span>(</span>
                  <img src="${item.arrowSrc}" alt="arrow">
                  ${item.text}
                    <span>)</span>
                  </div>
                </div>
                <div class="name">
                ${item.name}
                </div>
                </div>
              </div>
          `;
        })
        .join("");
    
      document
        .querySelector(".celebsswiper .swiper-wrapper")
        .insertAdjacentHTML("afterbegin", celebsHTML);
 
  }
  
  export default celebs;