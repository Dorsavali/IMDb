async function logos() {
  /*logo svg*/
  let logoRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
  let logoData = await logoRes.json();

  let logoHTML = logoData.logo
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
  let menuRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
  let menuData = await menuRes.json();

  let menuHTML = menuData.menuLogo
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
  let searchRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
  let searchData = await searchRes.json();

  let searchHTML = searchData.searchLogo
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
  let optionsRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
  let optionsData = await optionsRes.json();

  let optionsHTML = optionsData.options
    .map((item) => {
      return `
         ${item.title}
      `;
    })
    .join("");

  document
    .querySelector(".options")
    .insertAdjacentHTML("afterbegin", optionsHTML);

  /*options */
  let submenuRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
  let submenuData = await submenuRes.json();

  let submenuHTML = submenuData.submenu
    .map((item) => {
      return `
        <li><a href="${item.href}">
                  <img src="${item.src}" alt="${item.alt}">
                  ${item.title}
                </a></li>
      `;
    })
    .join("");

  document
    .querySelector(".submenu")
    .insertAdjacentHTML("afterbegin", submenuHTML);
    const options = document.querySelector(".options");
    const submenu = document.querySelector(".submenu");
    
    if (options && submenu) {
      options.addEventListener("click", (e) => {
        e.stopPropagation();
        submenu.classList.toggle("show");
        options.classList.toggle("open");
      });
    
      document.addEventListener("click", (e) => {
        if (!options.contains(e.target)) {
          submenu.classList.remove("show");
          options.classList.remove("open");
        }
      });
    }
    
  /*imdb pro */
  let proRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
  let proData = await proRes.json();

  let proHTML = proData.proLogo
    .map((item) => {
      return `
          <img src="${item.src}" alt="${item.alt}">
      `;
    })
    .join("");

  document.querySelector(".pro").insertAdjacentHTML("afterbegin", proHTML);
  /*watchlist */
  let watchlistRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
  let watchlistData = await watchlistRes.json();

  let watchlistHTML = watchlistData.watchlistLogo
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
  let signInRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
  let signInData = await signInRes.json();

  let signInHTML = signInData.signIn
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
  let useAppRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
  let useAppData = await useAppRes.json();

  let useAppHTML = useAppData.useApp
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
  let langRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
  let langData = await langRes.json();

  let langHTML = langData.lang
    .map((item) => {
      return `
          <img src="${item.src}" alt="${item.alt}">${item.title}
      `;
    })
    .join("");

  document.querySelector(".lang").insertAdjacentHTML("afterbegin", langHTML);
}

export default logos;
