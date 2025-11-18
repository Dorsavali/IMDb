async function footer() {
  let imdbappHTML = `
  Get the IMDb App
      `;

  document
    .querySelector(".imdbapp")
    .insertAdjacentHTML("afterbegin", imdbappHTML);

  let buttonHTML = `
Sign in for more access
        `;

  document
    .querySelector(".button")
    .insertAdjacentHTML("afterbegin", buttonHTML);

  let socialtitleHTML = `
follow IMDb on social
      `;

  document
    .querySelector(".social .title")
    .insertAdjacentHTML("afterbegin", socialtitleHTML);

  let socialRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
  let socialData = await socialRes.json();

  let socialHTML = socialData.social
    .map((item) => {
      return `
<img src="${item.iconSrc}" alt="icon">
          `;
    })
    .join("");

  document
    .querySelector(".social .icon")
    .insertAdjacentHTML("afterbegin", socialHTML);

  let linkRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
  let linkData = await linkRes.json();

  let linkHTML = linkData.link
    .map((item) => {
      return `
<a href="#">
            ${item.title}
            <img src="${item.help}" alt="help">
          </a>
          `;
    })
    .join("");

  document
    .querySelector(".links")
    .insertAdjacentHTML("afterbegin", linkHTML);

    let easyRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
    let easyData = await easyRes.json();
    
    let easyHTML = easyData.easyaccses
      .map((item) => {
     
        const imageTag = item.easy
          ? `<img src="${item.easy}" alt="link">`
          : ""; 
        return `
          <a href="#">
            ${item.title}
            ${imageTag} 
          </a>
        `;
      })
      .join("");
    
    document
      .querySelector(".easy-accses")
      .insertAdjacentHTML("afterbegin", easyHTML);

      let amazonRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
      let amazonData = await amazonRes.json();
      
      let amazonHTML = amazonData.amazon
      .map((item) => {
        return `
 <img src="${item.amazon}" alt="amazon">
            `;
      })
        .join("");
      
      document
        .querySelector(".amazon")
        .insertAdjacentHTML("afterbegin", amazonHTML);

        let copyrightHTML = `
        © 1990-2025 by IMDb.com, Inc.
            `;
      
        document
          .querySelector(".copyright")
          .insertAdjacentHTML("afterbegin", copyrightHTML);


          let qrRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
          let qrData = await qrRes.json();
          
          let qrHTML = qrData.qr
          .map((item) => {
            return `

            <div class ="text">
            <div class="title">${item.title}</div>
            <div class="description">
              ${item.description}
            </div></div>
            <img src="${item.qrcode}" alt="QRcode">
                `;
          })
            .join("");
          
          document
            .querySelector(".appqr")
            .insertAdjacentHTML("afterbegin", qrHTML);

      
}

export default footer;
