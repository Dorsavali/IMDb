async function featured() {
  let titleFeaturedRes = await fetch("http://localhost:3000/titleFeatured");
  let titleFeaturedData = await titleFeaturedRes.json();

  let titleFeaturedHTML = titleFeaturedData
    .map((item) => {
      return `
       ${item.titleFeatured}
        `;
    })
    .join("");

  document
    .querySelector(".titleFeatured")
    .insertAdjacentHTML("afterbegin", titleFeaturedHTML);

  let featuredRes = await fetch("http://localhost:3000/featured");
  let featuredData = await featuredRes.json();

  let featuredHTML = featuredData
    .map((item) => {
      return `
      <div class="swiper-slide">
<div class="poster">
<img src="${item.imgSrc}" alt="poster">
<div class="list">
<img src="${item.imgList}" alt="list">
${item.text}
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
    .querySelector(".featuredswiper .swiper-wrapper")
    .insertAdjacentHTML("afterbegin", featuredHTML);
}

export default featured;
