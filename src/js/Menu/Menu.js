let toggleSidebar = function (action) {
  const sidebar = document.getElementById("sidebarMenu");
  const overlay = document.getElementById("sidebarOverlay");

  if (action === "open") {
    sidebar.classList.add("open");
    overlay.classList.add("open");
  } else {
    sidebar.classList.remove("open");
    overlay.classList.remove("open");
  }
};

async function menu() {
  if (window.menuInitialized) return;
  window.menuInitialized = true;
  const menuRes = await fetch("https://dorsavali.github.io/saei-server/db.json");
  const menuData = await menuRes.json();
  const headerElement = document.querySelector(".sidebar-menu .header");
  headerElement.innerHTML = `
    <img src="https://raw.githubusercontent.com/Dorsavali/IMDb/refs/heads/images/imdbLogo.png" alt="IMDb Logo" class="imdb-logo-desktop">
    <button class="close-btn" id="closeSidebarBtn">&times;</button>
  `;
  const closeBtn = document.getElementById("closeSidebarBtn");
  closeBtn.addEventListener("click", () => toggleSidebar("close"));
  const menuHTML = menuData.sideMenu
    .map((group) => {
      const submenuHTML =
        group.hasSubmenu && group.submenuItems?.length
          ? `
        <ul class="submenu">
          ${group.submenuItems
            .map(
              (item) => `
            <li>
              <a href="${item.href}">
                ${item.src ? `<img src="${item.src}" alt="${item.title}" class="submenu-icon" />` : ""}
                ${item.title}
              </a>
            </li>
          `
            )
            .join("")}
        </ul>
      `
          : "";

      return `
        <li class="menu-item ${group.hasSubmenu ? "has-submenu" : ""}">
          <a href="${group.groupLink}" class="menu-link">
            <img src="${group.groupIconSrc}" alt="${group.groupName}" class="icon" />
            ${group.groupName}
            ${group.hasSubmenu ? '<span class="dropdown-arrow">&#8964;</span>' : ""}
          </a>
          ${submenuHTML}
        </li>
      `;
    })
    .join("");
  document.querySelector(".sidebar-menu > ul").innerHTML = menuHTML;
  if (!document.querySelector("#sidebarMenu .imdb-pro-section")) {
    const utilityHTML = `
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
    `;
    document
      .getElementById("sidebarMenu")
      .insertAdjacentHTML("beforeend", utilityHTML);
  }
  const submenuLinks = document.querySelectorAll(".menu-item.has-submenu .menu-link");
  submenuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const parentLi = link.closest(".menu-item");
      const submenu = parentLi.querySelector(".submenu");
      if (submenu) {
        parentLi.classList.toggle("active");
        submenu.style.display = parentLi.classList.contains("active")
          ? "block"
          : "none";
      }
    });
  });
  const menuToggleBtn = document.getElementById("menuToggle");
  const overlay = document.getElementById("sidebarOverlay");
  menuToggleBtn.addEventListener("click", () => toggleSidebar("open"));
  overlay.addEventListener("click", () => toggleSidebar("close"));
}
document.addEventListener("DOMContentLoaded", menu);
export default menu;
