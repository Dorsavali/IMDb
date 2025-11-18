async function recently() {
let newsrightHTML = `

<div class="title">Recently viewed

</div>
        <div class="description">
          You have no recently viewed pages
        </div>

`;


document
.querySelector(".recently")
.insertAdjacentHTML("afterbegin", newsrightHTML);
}
export default recently;