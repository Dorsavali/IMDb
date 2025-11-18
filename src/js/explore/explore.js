async function explore() {
    let titleexploreRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
    let titleexploreData = await titleexploreRes.json();
  
    let titleexploreHTML = titleexploreData.titleexplore
      .map((item) => {
        return `
         <div class="explore-top">
        ${item.exploreHeader}
        </div>
        <div class="titleexplore">
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
      .querySelector(".explore-header")
      .insertAdjacentHTML("afterbegin", titleexploreHTML);
  
    let exploreRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
    let exploreData = await exploreRes.json();
  
    let exploreHTML = exploreData.explore
      .map((item) => {
        return `
         <div class="item">
              <div class="number">
                ${item.number}
              </div>
              <div class="watchlist">
                <img src="${item.watchlistSrc}" alt="watchlist">
              </div>
              <div class="name-price">
                <div class="name">
                  ${item.name}
                </div>
                <div class="prices">
                <div class="old">
                  ${item.oldprice}
                </div>
                <div class="total">
                  ${item.total}
                </div>
                </div>
              </div>
            </div>
          `;
      })
      .join("");
  
    document
      .querySelector(".explore .list .items")
      .insertAdjacentHTML("afterbegin", exploreHTML);
  }
  
  export default explore;
  