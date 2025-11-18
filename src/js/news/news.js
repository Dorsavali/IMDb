async function news() {
  let titlenewsRes = await fetch("http://localhost:3000/titlenews");
  let titlenewsData = await titlenewsRes.json();

  let titlenewsHTML = titlenewsData
    .map((item) => {
      return `
        <div class="title">
        <span class="bar"></span>
            <span class="text">${item.title}</span>
            <span class="chev">${item.chev}</span></div>
          `;
    })
    .join("");

  document
    .querySelector(".titlenews")
    .insertAdjacentHTML("afterbegin", titlenewsHTML);

  let newsRes = await fetch("http://localhost:3000/newsTop");
  let newsData = await newsRes.json();

  let newsHTML = newsData
    .map((item) => {
      return `
            
            <div class="itemtop">
             <div class="img">
              <img src="${item.coverSrc}" alt="moviePoster">
             </div>
             <div class="text">
              <div class="title">
                ${item.title}
              </div>
              <div class="description">
                ${item.description}
              </div>
              <div class="date-text">
                <div class="date">${item.date}</div>
                <div class="text">${item.text}</div>
              </div>
             </div>
           </div>
            

          `;
    })
    .join("");

  document.querySelector(".topnews ").insertAdjacentHTML("afterbegin", newsHTML);

  let newsBotttmRes = await fetch("http://localhost:3000/newsBottom");
  let newsBotttmData = await newsBotttmRes.json();

  let newsBotttmHTML = newsBotttmData
    .map((item) => {
      return `
           <div class="item">
  <div class="img">
    <img src="${item.coverSrc}" alt="moviePoster" />
  </div>
  <div class="text">
    <div class="title">${item.title}</div>
    <div class="date-text">
      <div class="date">${item.date}</div>
      <div class="text">${item.text}</div>
    </div>
  </div>
</div>

          `;
    })
    .join("");

  document
    .querySelector(".bottomnews ")
    .insertAdjacentHTML("afterbegin", newsBotttmHTML);
    
    let newsrightHTML = `

      <div class="title">MORE NEWS</div>
      <div class="buttons">
        <button class="btn">Top news</button>
        <button class="btn">Celebrity news</button>
        <button class="btn">Movie news</button>
        <button class="btn">Indie news</button>
        <button class="btn">TV news</button>
      </div>
     
    `;
    

  document
    .querySelector(".rightnews")
    .insertAdjacentHTML("afterbegin", newsrightHTML);
}

export default news;
