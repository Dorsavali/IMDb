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

  let socialRes = await fetch("http://localhost:3000/social");
  let socialData = await socialRes.json();

  let socialHTML = socialData
    .map((item) => {
      return `
<img src="${item.iconSrc}" alt="icon">
          `;
    })
    .join("");

  document
    .querySelector(".social .icon")
    .insertAdjacentHTML("afterbegin", socialHTML);

  let linkRes = await fetch("http://localhost:3000/link");
  let linkData = await linkRes.json();

  let linkHTML = linkData
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

    let easyRes = await fetch("http://localhost:3000/easyaccses");
    let easyData = await easyRes.json();
    
    let easyHTML = easyData
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

      let amazonRes = await fetch("http://localhost:3000/amazon");
      let amazonData = await amazonRes.json();
      
      let amazonHTML = amazonData
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


          let qrRes = await fetch("http://localhost:3000/qr");
          let qrData = await qrRes.json();
          
          let qrHTML = qrData
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
