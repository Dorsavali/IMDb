async function born() {
    let titlebornRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
    let titlebornData = await titlebornRes.json();
  
    let titlebornHTML = titlebornData.titleborn
      .map((item) => {
        return `
         <div class="born-top">
        ${item.bornHeader}
        </div>
        <div class="titleborn">
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
      .querySelector(".born-header")
      .insertAdjacentHTML("afterbegin", titlebornHTML);
  
    let bornRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
    let bornData = await bornRes.json();
  
    let bornHTML = bornData.born
      .map((item) => {
        return `
    <div class="swiper-slide">
                <div class="celebs">
                <img src="${item.bornSrc}" alt="celebrity">
                <div class="name">
                ${item.name}
                </div>
                   <div class="ratings">
                  <div class="number">
                  ${item.number}
                  </div>
                </div>
                </div>
              </div>
          `;
      })
      .join("");
  
    document
      .querySelector(".bornswiper .swiper-wrapper")
      .insertAdjacentHTML("afterbegin", bornHTML);
  }
  
  export default born;
  