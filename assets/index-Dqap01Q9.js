(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const e of s.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&n(e)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();async function T(){let i=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).logo.map(a=>`
      <div class="logoItem" key=${a.id}>
        <img src="${a.src}" alt="${a.alt}" />
        ${a.title}
      </div>
    `).join("");document.querySelector(".logo").insertAdjacentHTML("afterbegin",i);let s=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).menuLogo.map(a=>`
      
        <img src="${a.src}" alt="${a.alt}" />
        ${a.title}
      
    `).join("");document.querySelector(".menuLogo").insertAdjacentHTML("afterbegin",s);let c=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).searchLogo.map(a=>`
        
          <input type="search" name="search" id="search" placeholder="">
          <img src="${a.src}" alt="${a.alt}">
        
      `).join("");document.querySelector(".search").insertAdjacentHTML("afterbegin",c);let g=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).options.map(a=>`
         ${a.title}
      `).join("");document.querySelector(".options").insertAdjacentHTML("afterbegin",g);let b=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).submenu.map(a=>`
        <li><a href="${a.href}">
                  <img src="${a.src}" alt="${a.alt}">
                  ${a.title}
                </a></li>
      `).join("");document.querySelector(".submenu").insertAdjacentHTML("afterbegin",b);const u=document.querySelector(".options"),m=document.querySelector(".submenu");u&&m&&(u.addEventListener("click",a=>{a.stopPropagation(),m.classList.toggle("show"),u.classList.toggle("open")}),document.addEventListener("click",a=>{u.contains(a.target)||(m.classList.remove("show"),u.classList.remove("open"))}));let p=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).proLogo.map(a=>`
          <img src="${a.src}" alt="${a.alt}">
      `).join("");document.querySelector(".pro").insertAdjacentHTML("afterbegin",p);let M=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).watchlistLogo.map(a=>`
          <img src="${a.src}" alt="${a.alt}">${a.title}
      `).join("");document.querySelector(".watchlist").insertAdjacentHTML("afterbegin",M);let H=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).signIn.map(a=>`
           ${a.title}
        `).join("");document.querySelector(".signIn").insertAdjacentHTML("afterbegin",H);let S=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).useApp.map(a=>`
               <a href = "${a.href}">${a.title}</a>
            `).join("");document.querySelector(".useApp").insertAdjacentHTML("afterbegin",S);let D=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).lang.map(a=>`
          <img src="${a.src}" alt="${a.alt}">${a.title}
      `).join("");document.querySelector(".lang").insertAdjacentHTML("afterbegin",D)}let f=function(d){const o=document.getElementById("sidebarMenu"),i=document.getElementById("sidebarOverlay");d==="open"?(o.classList.add("open"),i.classList.add("open")):(o.classList.remove("open"),i.classList.remove("open"))};async function L(){if(window.menuInitialized)return;window.menuInitialized=!0;const o=await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json(),i=document.querySelector(".sidebar-menu .header");i.innerHTML=`
    <img src="https://raw.githubusercontent.com/Dorsavali/IMDb/refs/heads/images/imdbLogo.png" alt="IMDb Logo" class="imdb-logo-desktop">
    <button class="close-btn" id="closeSidebarBtn">&times;</button>
  `,document.getElementById("closeSidebarBtn").addEventListener("click",()=>f("close"));const r=o.sideMenu.map(c=>{const w=c.hasSubmenu&&c.submenuItems?.length?`
        <ul class="submenu">
          ${c.submenuItems.map(l=>`
            <li>
              <a href="${l.href}">
                ${l.src?`<img src="${l.src}" alt="${l.title}" class="submenu-icon" />`:""}
                ${l.title}
              </a>
            </li>
          `).join("")}
        </ul>
      `:"";return`
        <li class="menu-item ${c.hasSubmenu?"has-submenu":""}">
          <a href="${c.groupLink}" class="menu-link">
            <img src="${c.groupIconSrc}" alt="${c.groupName}" class="icon" />
            ${c.groupName}
            ${c.hasSubmenu?'<span class="dropdown-arrow">&#8964;</span>':""}
          </a>
          ${w}
        </li>
      `}).join("");document.querySelector(".sidebar-menu > ul").innerHTML=r,document.querySelector("#sidebarMenu .imdb-pro-section")||document.getElementById("sidebarMenu").insertAdjacentHTML("beforeend",`
      <div class="imdb-pro-section">
      <img src="https://raw.githubusercontent.com/Dorsavali/IMDb/refs/heads/images/imdbPro.svg" alt="imdb pro">
        <p>For industry and professionals</p>
        <a href="#">
          <span class="external-link-icon">&#x2197;</span>
        </a>
      </div>
      <div class="language-section">
        <p>L A N G U A G E</p>
        <a href="#">
          English (US)
          <span class="dropdown-arrow">&#8964;</span>
        </a>
      </div>
    `),document.querySelectorAll(".menu-item.has-submenu .menu-link").forEach(c=>{c.addEventListener("click",w=>{w.preventDefault();const l=c.closest(".menu-item"),g=l.querySelector(".submenu");g&&(l.classList.toggle("active"),g.style.display=l.classList.contains("active")?"block":"none")})});const e=document.getElementById("menuToggle"),h=document.getElementById("sidebarOverlay");e.addEventListener("click",()=>f("open")),h.addEventListener("click",()=>f("close"))}document.addEventListener("DOMContentLoaded",L);async function R(){let i=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).imdbHero.map(t=>`
         <div class="swiper-slide">
                <div class="video image-fade">
                    <img src="${t.VidSrc}" alt="play" >
                </div>
                <div class="cover">
                  <div class="left">
                    <img src="${t.imgMovieSrc}" alt="${t.imgMovieAlt}">
                    <img src="${t.imgWatchlist}" alt="wathclist" class="watchlist">
                  </div>
                  <div class="right">
                    <div class="videoPlay">
                     <img src="${t.imgPlaySrc}" alt="play">
                     ${t.duration}
                    </div>
                    <div class="title">${t.title}</div>
                    <div class="description">${t.description}</div>
                    <div class="ratings">
                      <div class="likes">
                        <img src="${t.imgLikeSrc}" alt="${t.imgLikeAlt}">
                        ${t.likeNum}
                      </div>
                      <div class="hearts">
                        <span>${t.heartSpan}</span>
                        ${t.heartNum}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      `).join("");document.querySelector(".imdbHeroSwiper .swiper-wrapper").insertAdjacentHTML("afterbegin",i),document.querySelectorAll(".swiper-slide").forEach(t=>{const v=t.querySelector(".videoPlay img"),b="https://raw.githubusercontent.com/Dorsavali/IMDb/refs/heads/images/play.svg",u="https://raw.githubusercontent.com/Dorsavali/IMDb/refs/heads/images/playYellow.svg";t.addEventListener("mouseenter",()=>{v.src=u}),t.addEventListener("mouseleave",()=>{v.src=b}),t.addEventListener("click",()=>{v.src=v.src===b?u:b})});let s=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).titleDiv.map(t=>`
     ${t.titleDiv}
      `).join("");document.querySelector(".titleDiv").insertAdjacentHTML("afterbegin",s);let c=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).trailers.map(t=>`
       ${t.trailers}
        `).join("");document.querySelector(".trailers").insertAdjacentHTML("afterbegin",c);let g=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).imdbHeroDesktop.map(t=>`
      
        <div class="coverDesktop">
              <div class="left">
                <img src="${t.imgMovieSrc}" alt="${t.imgMovieAlt}">
                <img src="${t.imgWatchlist}" alt="wathclist" class="watchlist">
              </div>
              <div class="right">
                <div class="videoPlay">
                 <img src="${t.imgPlaySrc}" alt="play">
                 ${t.duration}
                </div>
                <div class="title">${t.title}</div>
                <div class="description">${t.description}</div>
                <div class="ratings">
                  <div class="likes">
                    <img src="${t.imgLikeSrc}" alt="${t.imgLikeAlt}">
                    ${t.likeNum}
                  </div>
                  <div class="hearts">
                    <span>${t.heartSpan}</span>
                    ${t.heartNum}
                  </div>
                </div>
              </div>
            </div>
      `).join("");document.querySelector(".items").insertAdjacentHTML("afterbegin",g),document.querySelectorAll(".coverDesktop").forEach(t=>{const v=t.querySelector(".videoPlay img"),b=v.src,u="https://raw.githubusercontent.com/Dorsavali/IMDb/refs/heads/images/playYellow.svg";t.addEventListener("mouseenter",()=>{v.src=u}),t.addEventListener("mouseleave",()=>{v.src=b}),t.addEventListener("click",()=>{v.src=v.src===b?u:b})})}async function x(){let i=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).titleFeatured.map(e=>`
       ${e.titleFeatured}
        `).join("");document.querySelector(".titleFeatured").insertAdjacentHTML("afterbegin",i);let s=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).featured.map(e=>`
      <div class="swiper-slide">
<div class="poster">
<img src="${e.imgSrc}" alt="poster">
<div class="list">
<img src="${e.imgList}" alt="list">
${e.text}
</div>
</div>
<div class="title">
${e.title}
</div>
<div class="description">
${e.description}
</div>
 </div>
        `).join("");document.querySelector(".featuredswiper .swiper-wrapper").insertAdjacentHTML("afterbegin",s)}async function q(){let i=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).titleCelebs.map(e=>`
         <div class="lineSvg">|</div>
         ${e.titleCelebs}
          `).join("");document.querySelector(".titleCelebs").insertAdjacentHTML("afterbegin",i);let s=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).celebs.map(e=>`
          <div class="swiper-slide">
                <div class="celebs">
                <img src="${e.celebSrc}" alt="celebrity">
                <div class="ratings">
                  <div class="number">
                  ${e.number}
                  </div>
                  <div class="text">
                  <span>(</span>
                  <img src="${e.arrowSrc}" alt="arrow">
                  ${e.text}
                    <span>)</span>
                  </div>
                </div>
                <div class="name">
                ${e.name}
                </div>
                </div>
              </div>
          `).join("");document.querySelector(".celebsswiper .swiper-wrapper").insertAdjacentHTML("afterbegin",s)}async function A(){let i=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).signin.map(n=>`
                  <div class="watch-header">
          <h1 class="title">${n.title}</h1>
          <a class="more-link" href="#">${n.moreLink}</a>
        </div>

        <main class="watch-main">
          <div class="left-nav">
            <div class="watchlist-link">
              <span class="bar"></span>
              <span class="text">${n.text}</span>
              <span class="chev">${n.chev}</span>
            </div>
          </div>

          <section class="center">
            <div class="bookmark">
              <img src="${n.imgSrc}" alt="bookmark" />
            </div>
            <h2 class="center-heading">${n.heading}</h2>
            <p class="center-sub">
            ${n.sub}
            </p>
            <button class="signin-btn">${n.signinBtn}</button>
          </section>
        </main>
          `).join("");document.querySelector(".signin").insertAdjacentHTML("afterbegin",i)}async function k(){let i=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).titletop10.map(e=>`
            <span class="bar"></span>
            <span class="text">${e.title}</span>
            <span class="chev">${e.chev}</span>
          `).join("");document.querySelector(".titletop10").insertAdjacentHTML("afterbegin",i);let s=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).top10.map(e=>`
            <div class="swiper-slide">
              <div class="cover">
                <div class="img">
                  <img src="${e.imgMovieSrc}" alt="poster">
                  <img src="${e.imgWatchlist}" alt="watchlist">
                </div>
                <div class="ratings">
                <div class="stars">
                  <img src="${e.starSrc}" alt="star">
                  ${e.number}
                </div>
                <div class="star"><img src="${e.staroutline}
                  " alt="star"></div>
                </div>
                <div class="title">
                ${e.title}
                </div>
                <div class="buttons">
                  <button class="watch">Watch options</button>
                  <button><img src="${e.trailerSrc}" alt="play">
                    Trailer</button>
                </div>
              </div>
            </div>

          `).join("");document.querySelector(".top10swiper .swiper-wrapper").insertAdjacentHTML("afterbegin",s)}async function E(){let i=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).titlefavorites.map(e=>`
        <div class="title">
        <span class="bar"></span>
            <span class="text">${e.title}</span>
            <span class="chev">${e.chev}</span></div>

            <div class="descirption">${e.description}</div>
          `).join("");document.querySelector(".titlefavorites").insertAdjacentHTML("afterbegin",i);let s=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).favorites.map(e=>`
            <div class="swiper-slide">
              <div class="cover">
                <div class="img">
                  <img src="${e.imgMovieSrc}" alt="poster">
                  <img src="${e.imgWatchlist}" alt="watchlist">
                </div>
                <div class="ratings">
                <div class="stars">
                  <img src="${e.starSrc}" alt="star">
                  ${e.number}
                </div>
                <div class="star"><img src="${e.staroutline}
                  " alt="star"></div>
                </div>
                <div class="title">
                ${e.title}
                </div>
                <div class="buttons">
                  <button class="watch">Watch options</button>
                  <button><img src="${e.trailerSrc}" alt="play">
                    Trailer</button>
                </div>
              </div>
            </div>

          `).join("");document.querySelector(".favoritesswiper .swiper-wrapper").insertAdjacentHTML("afterbegin",s)}async function B(){let i=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).titlegenre.map(e=>`
        <div class="title">
        <span class="bar"></span>
            <span class="text">${e.title}</span>
            <span class="chev">${e.chev}</span></div>
          `).join("");document.querySelector(".titlegenre").insertAdjacentHTML("afterbegin",i);let s=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).genre.map(e=>`
            <div class="swiper-slide">
              <div class="cover">
                <div class="img">
                  <img src="${e.imgMovieSrc}" alt="poster">
                  <img src="${e.imgWatchlist}" alt="watchlist">
                </div>
                <div class="title">
                ${e.title}
                </div>
              </div>
            </div>

          `).join("");document.querySelector(".genreswiper .swiper-wrapper").insertAdjacentHTML("afterbegin",s)}async function P(){let i=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).titleorginal.map(e=>`
         <div class="orginal-top">
        ${e.orginalHeader}
        </div>
        <div class="titleorginal">
                 <div class="title">
        <span class="bar"></span>
            <span class="text">${e.title}</span>
            <span class="chev">${e.chev}</span></div>
        </div>
        <div class="description">
        ${e.description}
        </div>
          `).join("");document.querySelector(".orginal-header").insertAdjacentHTML("afterbegin",i);let s=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).orginal.map(e=>`
          <div class="swiper-slide">
            <div class="poster">
            <img src="${e.imgSrc}" alt="poster">
            <div class="list">
            <img src="${e.imgPlay}" alt="list">
            ${e.number}
            </div>
            </div>
            <div class="title">
            ${e.title}
            </div>
            <div class="description">
            ${e.description}
            </div>
             </div>
          `).join("");document.querySelector(".orginalswiper .swiper-wrapper").insertAdjacentHTML("afterbegin",s)}async function I(){let i=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).primetitle.map(e=>`
       <div class="top">
       <h1 class="title">${e.title}</h1>
       <a class="more-link" href="#">${e.moreLink}</a>
       
       </div>
     
      <div class="header">
       <div class="prime-text">
       ${e.text}
       </div>
       <div class="prime-description">
       ${e.heading}
       </div>
      </div>
        `).join("");document.querySelector(".primetitle").insertAdjacentHTML("afterbegin",i);let s=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).prime.map(e=>`
            <div class="swiper-slide">
              <div class="cover">
                <div class="img">
                  <img src="${e.imgMovieSrc}" alt="poster">
                  <img src="${e.imgWatchlist}" alt="watchlist">
                </div>
                <div class="ratings">
                <div class="stars">
                  <img src="${e.starSrc}" alt="star">
                  ${e.number}
                </div>
                <div class="star"><img src="${e.staroutline}
                  " alt="star"></div>
                </div>
                <div class="title">
                ${e.title}
                </div>
                <div class="buttons">
                  <button class="watch">Watch options</button>
                  <button><img src="${e.trailerSrc}" alt="play">
                    Trailer</button>
                </div>
              </div>
            </div>

          `).join("");document.querySelector(".primeswiper .swiper-wrapper").insertAdjacentHTML("afterbegin",s)}async function V(){let i=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).titleexplore.map(e=>`
         <div class="explore-top">
        ${e.exploreHeader}
        </div>
        <div class="titleexplore">
                 <div class="title">
        <span class="bar"></span>
            <span class="text">${e.title}</span>
            <span class="chev">${e.chev}</span></div>
        </div>
        <div class="description">
        ${e.description}
        </div>
          `).join("");document.querySelector(".explore-header").insertAdjacentHTML("afterbegin",i);let s=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).explore.map(e=>`
         <div class="item">
              <div class="number">
                ${e.number}
              </div>
              <div class="watchlist">
                <img src="${e.watchlistSrc}" alt="watchlist">
              </div>
              <div class="name-price">
                <div class="name">
                  ${e.name}
                </div>
                <div class="prices">
                <div class="old">
                  ${e.oldprice}
                </div>
                <div class="total">
                  ${e.total}
                </div>
                </div>
              </div>
            </div>
          `).join("");document.querySelector(".explore .list .items").insertAdjacentHTML("afterbegin",s)}async function N(){let i=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).titlesoon.map(e=>`
        <div class="titlesoon">
                 <div class="title">
        <span class="bar"></span>
            <span class="text">${e.title}</span>
            <span class="chev">${e.chev}</span></div>
        </div>
        <div class="description">
        ${e.description}
        </div>
          `).join("");document.querySelector(".soon-header").insertAdjacentHTML("afterbegin",i);let s=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).soon.map(e=>`
 <div class="swiper-slide">
  <div class="poster">
  <img src="${e.imgSrc}" alt="poster">
  <div class="list">
  <img src="${e.imgPlay}" alt="list">
  ${e.number}
  </div>
  </div>
   <div class="text">
    <div class="left">
      <img src="${e.watchlistSrc}" alt="watchlist">
    </div>
    <div class="right">
      <div class="date">
        ${e.date}
      </div>
      <div class="title">
        ${e.title}
      </div>
      <div class="ratings">
        <div class="likes">
          <img src="${e.imgLikeSrc}" alt="${e.imgLikeAlt}">
          ${e.likeNum}
        </div>
        <div class="hearts">
          <span>${e.heartSpan}</span>
          ${e.heartNum}
        </div>
      </div>
    </div>
   </div>
   </div>
          `).join("");document.querySelector(".soonswiper .swiper-wrapper").insertAdjacentHTML("afterbegin",s)}async function z(){let i=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).titleborn.map(e=>`
         <div class="born-top">
        ${e.bornHeader}
        </div>
        <div class="titleborn">
                 <div class="title">
        <span class="bar"></span>
            <span class="text">${e.title}</span>
            <span class="chev">${e.chev}</span></div>
        </div>
        <div class="description">
        ${e.description}
        </div>
          `).join("");document.querySelector(".born-header").insertAdjacentHTML("afterbegin",i);let s=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).born.map(e=>`
    <div class="swiper-slide">
                <div class="celebs">
                <img src="${e.bornSrc}" alt="celebrity">
                <div class="name">
                ${e.name}
                </div>
                   <div class="ratings">
                  <div class="number">
                  ${e.number}
                  </div>
                </div>
                </div>
              </div>
          `).join("");document.querySelector(".bornswiper .swiper-wrapper").insertAdjacentHTML("afterbegin",s)}async function O(){let i=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).titlenews.map(l=>`
        <div class="title">
        <span class="bar"></span>
            <span class="text">${l.title}</span>
            <span class="chev">${l.chev}</span></div>
          `).join("");document.querySelector(".titlenews").insertAdjacentHTML("afterbegin",i);let s=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).newsTop.map(l=>`
            
            <div class="itemtop">
             <div class="img">
              <img src="${l.coverSrc}" alt="moviePoster">
             </div>
             <div class="text">
              <div class="title">
                ${l.title}
              </div>
              <div class="description">
                ${l.description}
              </div>
              <div class="date-text">
                <div class="date">${l.date}</div>
                <div class="text">${l.text}</div>
              </div>
             </div>
           </div>
            

          `).join("");document.querySelector(".topnews ").insertAdjacentHTML("afterbegin",s);let c=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).newsBottom.map(l=>`
           <div class="item">
  <div class="img">
    <img src="${l.coverSrc}" alt="moviePoster" />
  </div>
  <div class="text">
    <div class="title">${l.title}</div>
    <div class="date-text">
      <div class="date">${l.date}</div>
      <div class="text">${l.text}</div>
    </div>
  </div>
</div>

          `).join("");document.querySelector(".bottomnews ").insertAdjacentHTML("afterbegin",c),document.querySelector(".rightnews").insertAdjacentHTML("afterbegin",`

      <div class="title">MORE NEWS</div>
      <div class="buttons">
        <button class="btn">Top news</button>
        <button class="btn">Celebrity news</button>
        <button class="btn">Movie news</button>
        <button class="btn">Indie news</button>
        <button class="btn">TV news</button>
      </div>
     
    `)}async function C(){document.querySelector(".recently").insertAdjacentHTML("afterbegin",`

<div class="title">Recently viewed

</div>
        <div class="description">
          You have no recently viewed pages
        </div>

`)}async function F(){document.querySelector(".imdbapp").insertAdjacentHTML("afterbegin",`
  Get the IMDb App
      `),document.querySelector(".button").insertAdjacentHTML("afterbegin",`
Sign in for more access
        `),document.querySelector(".social .title").insertAdjacentHTML("afterbegin",`
follow IMDb on social
      `);let s=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).social.map(p=>`
<img src="${p.iconSrc}" alt="icon">
          `).join("");document.querySelector(".social .icon").insertAdjacentHTML("afterbegin",s);let c=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).link.map(p=>`
<a href="#">
            ${p.title}
            <img src="${p.help}" alt="help">
          </a>
          `).join("");document.querySelector(".links").insertAdjacentHTML("afterbegin",c);let g=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).easyaccses.map(p=>{const $=p.easy?`<img src="${p.easy}" alt="link">`:"";return`
          <a href="#">
            ${p.title}
            ${$} 
          </a>
        `}).join("");document.querySelector(".easy-accses").insertAdjacentHTML("afterbegin",g);let b=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).amazon.map(p=>`
 <img src="${p.amazon}" alt="amazon">
            `).join("");document.querySelector(".amazon").insertAdjacentHTML("afterbegin",b),document.querySelector(".copyright").insertAdjacentHTML("afterbegin",`
        © 1990-2025 by IMDb.com, Inc.
            `);let j=(await(await fetch("https://dorsavali.github.io/saei-server/db.json")).json()).qr.map(p=>`

            <div class ="text">
            <div class="title">${p.title}</div>
            <div class="description">
              ${p.description}
            </div></div>
            <img src="${p.qrcode}" alt="QRcode">
                `).join("");document.querySelector(".appqr").insertAdjacentHTML("afterbegin",j)}async function W(){await G()}W();async function G(){await T(),await L(),await R(),await x(),await q(),await A(),await k(),await E(),await B(),await P(),await I(),await V(),await N(),await z(),await O(),await C(),await F(),new Swiper(".imdbHeroSwiper",{spaceBetween:0,centeredSlides:!0,loop:!0,autoplay:{delay:25e3,disableOnInteraction:!1},pagination:{el:".imdbHero .swiper-pagination",clickable:!0},navigation:{nextEl:".imdbHero .swiper-button-next",prevEl:".imdbHero .swiper-button-prev"},breakpoints:{0:{pagination:!1,navigation:!1},768:{pagination:!1,navigation:{nextEl:".imdbHero .swiper-button-next",prevEl:".imdbHero .swiper-button-prev"}}}}),new Swiper(".featuredswiper",{slidesPerView:1,spaceBetween:0,loop:!0,navigation:{nextEl:".featured .swiper-button-next",prevEl:".featured .swiper-button-prev"},breakpoints:{0:{navigation:!1,loop:!0},768:{navigation:{loop:!0,nextEl:".featured .swiper-button-next",prevEl:".featured .swiper-button-prev"}}}}),new Swiper(".celebsswiper",{slidesPerView:3,spaceBetween:70,breakpoints:{0:{navigation:!1,spaceBetween:110,slidesPerView:3},768:{slidesPerView:6,spaceBetween:0,navigation:{nextEl:".celebrities .swiper-button-next",prevEl:".celebrities .swiper-button-prev"}}}}),new Swiper(".top10swiper",{slidesPerView:3,spaceBetween:30,breakpoints:{0:{navigation:!1,spaceBetween:2,slidesPerView:2},768:{slidesPerView:6,spaceBetween:0,navigation:{nextEl:".top10 .swiper-button-next",prevEl:".top10 .swiper-button-prev"}}}}),new Swiper(".favoritesswiper",{slidesPerView:3,spaceBetween:30,breakpoints:{0:{navigation:!1,spaceBetween:2,slidesPerView:2},768:{slidesPerView:6,spaceBetween:0,navigation:{nextEl:".favorites .swiper-button-next",prevEl:".favorites .swiper-button-prev"}}}}),new Swiper(".genreswiper",{slidesPerView:3,spaceBetween:30,breakpoints:{0:{navigation:!1,spaceBetween:2,slidesPerView:1.4},768:{slidesPerView:4,spaceBetween:0,navigation:{nextEl:".genre .swiper-button-next",prevEl:".genre .swiper-button-prev"}}}}),new Swiper(".orginalswiper",{slidesPerView:3,spaceBetween:0,loop:!0,navigation:{nextEl:".orginal .swiper-button-next",prevEl:".orginal .swiper-button-prev"},breakpoints:{0:{navigation:!1,loop:!0,slidesPerView:1,spaceBetween:0},768:{spaceBetween:27,slidesPerView:3,navigation:{loop:!0,nextEl:".orginal .swiper-button-next",prevEl:".orginal .swiper-button-prev"}}}}),new Swiper(".primeswiper",{slidesPerView:3,spaceBetween:30,breakpoints:{0:{navigation:!1,spaceBetween:2,slidesPerView:2},768:{slidesPerView:6,spaceBetween:0,navigation:{nextEl:".prime .swiper-button-next",prevEl:".prime .swiper-button-prev"}}}}),new Swiper(".soonswiper",{slidesPerView:3,spaceBetween:0,loop:!0,navigation:{nextEl:".soon .swiper-button-next",prevEl:".soon .swiper-button-prev"},breakpoints:{0:{navigation:!1,loop:!0,slidesPerView:1,spaceBetween:0},768:{spaceBetween:27,slidesPerView:3,navigation:{loop:!0,nextEl:".soon .swiper-button-next",prevEl:".soon .swiper-button-prev"}}}}),new Swiper(".bornswiper",{slidesPerView:3,spaceBetween:70,breakpoints:{0:{navigation:!1,spaceBetween:110,slidesPerView:3},768:{slidesPerView:6,spaceBetween:0,navigation:{nextEl:".born .swiper-button-next",prevEl:".born .swiper-button-prev"}}}})}
