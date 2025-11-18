async function signin() {
      let signinRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
      let signinData = await signinRes.json();
    
      let signinHTML = signinData.signin
        .map((item) => {
          return `
                  <div class="watch-header">
          <h1 class="title">${item.title}</h1>
          <a class="more-link" href="#">${item.moreLink}</a>
        </div>

        <main class="watch-main">
          <div class="left-nav">
            <div class="watchlist-link">
              <span class="bar"></span>
              <span class="text">${item.text}</span>
              <span class="chev">${item.chev}</span>
            </div>
          </div>

          <section class="center">
            <div class="bookmark">
              <img src="${item.imgSrc}" alt="bookmark" />
            </div>
            <h2 class="center-heading">${item.heading}</h2>
            <p class="center-sub">
            ${item.sub}
            </p>
            <button class="signin-btn">${item.signinBtn}</button>
          </section>
        </main>
          `;
        })
        .join("");
    
      document
        .querySelector(".signin")
        .insertAdjacentHTML("afterbegin", signinHTML);
 
  }
  
  export default signin;