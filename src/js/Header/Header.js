async function logos() {
  /*logo svg*/
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
  /*menu svg*/
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
  /*search bar */
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
  /*options */
  let optionsRes = await fetch("http://localhost:3000/options");
  let optionsData = await optionsRes.json();

  let optionsHTML = optionsData
    .map((item) => {
      return `
         ${item.title}
      `;
    })
    .join("");

  document
    .querySelector(".options")
    .insertAdjacentHTML("afterbegin", optionsHTML);
  /*imdb pro */
  let proRes = await fetch("http://localhost:3000/proLogo");
  let proData = await proRes.json();

  let proHTML = proData
    .map((item) => {
      return `
          <img src="${item.src}" alt="${item.alt}">
      `;
    })
    .join("");

  document.querySelector(".pro").insertAdjacentHTML("afterbegin", proHTML);
  /*watchlist */
  let watchlistRes = await fetch("http://localhost:3000/watchlistLogo");
  let watchlistData = await watchlistRes.json();

  let watchlistHTML = watchlistData
    .map((item) => {
      return `
          <img src="${item.src}" alt="${item.alt}">${item.title}
      `;
    })
    .join("");

  document
    .querySelector(".watchlist")
    .insertAdjacentHTML("afterbegin", watchlistHTML);
  /*signin */
  let signInRes = await fetch("http://localhost:3000/signIn");
  let signInData = await signInRes.json();

  let signInHTML = signInData
    .map((item) => {
      return `
           ${item.title}
        `;
    })
    .join("");

  document
    .querySelector(".signIn")
    .insertAdjacentHTML("afterbegin", signInHTML);
  /*useApp */
  let useAppRes = await fetch("http://localhost:3000/useApp");
  let useAppData = await useAppRes.json();

  let useAppHTML = useAppData
    .map((item) => {
      return `
               <a href = "${item.href}">${item.title}</a>
            `;
    })
    .join("");

  document
    .querySelector(".useApp")
    .insertAdjacentHTML("afterbegin", useAppHTML);
  /*lang */
  let langRes = await fetch("http://localhost:3000/lang");
  let langData = await langRes.json();

  let langHTML = langData
    .map((item) => {
      return `
          <img src="${item.src}" alt="${item.alt}">${item.title}
      `;
    })
    .join("");

  document.querySelector(".lang").insertAdjacentHTML("afterbegin", langHTML);
}

export default logos;
