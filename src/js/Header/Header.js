async function logos() {
  let logoRes = await fetch("http://localhost:3000/logo");
  let logoData = await logoRes.json();

  let logoHTML = logoData
    .map((item) => {
      return `
      <div class="logoItem" key=${item.id}>
        <img src="${item.src}" alt="${item.alt}" />
        ${item.title}
      </div>
    `;
    })
    .join("");

  document.querySelector(".logo").insertAdjacentHTML("afterbegin", logoHTML);

  let menuRes = await fetch("http://localhost:3000/menuLogo");
  let menuData = await menuRes.json();

  let menuHTML = menuData
    .map((item) => {
      return `
      
        <img src="${item.src}" alt="${item.alt}" />
        ${item.title}
      
    `;
    })
    .join("");

  document
    .querySelector(".menuLogo")
    .insertAdjacentHTML("afterbegin", menuHTML);

    let searchRes = await fetch("http://localhost:3000/searchLogo");
    let searchData = await searchRes.json();
  
    let searchHTML = searchData
      .map((item) => {
        return `
        
          <input type="search" name="search" id="search" placeholder="">
          <img src="${item.src}" alt="${item.alt}">
        
      `;
      })
      .join("");
  
    document
      .querySelector(".search")
      .insertAdjacentHTML("afterbegin", searchHTML);

}

export default logos;
