async function orginal() {
    let titleorginalRes = await fetch("http://localhost:3000/titleorginal");
    let titleorginalData = await titleorginalRes.json();
  
    let titleorginalHTML = titleorginalData
      .map((item) => {
        return `
         <div class="orginal-top">
        ${item.orginalHeader}
        </div>
        <div class="titleorginal">
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
      .querySelector(".orginal-header")
      .insertAdjacentHTML("afterbegin", titleorginalHTML);
  
    let orginalRes = await fetch("http://localhost:3000/orginal");
    let orginalData = await orginalRes.json();
  
    let orginalHTML = orginalData
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
            <div class="title">
            ${item.title}
            </div>
            <div class="description">
            ${item.description}
            </div>
             </div>
          `;
      })
      .join("");
  
    document
      .querySelector(".orginalswiper .swiper-wrapper")
      .insertAdjacentHTML("afterbegin", orginalHTML);
  }
  
  export default orginal;
  