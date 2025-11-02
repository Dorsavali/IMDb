let toggleSidebar = function (action) {
    let sidebar = document.getElementById("sidebarMenu");
    let overlay = document.getElementById("sidebarOverlay");
    if (action === "open") {
      sidebar.classList.add("open");
      overlay.classList.add("open");
    } else {
      sidebar.classList.remove("open");
      overlay.classList.remove("open");
    }
  };
  
  async function menu() {
    let menuRes = await fetch("http://localhost:3000/sideMenu");
    let menuData = await menuRes.json();
  
    let menuHTML = menuData
      .map((group) => {
        let submenuHTML = "";
        if (group.hasSubmenu && group.submenuItems && group.submenuItems.length > 0) {
          submenuHTML = `
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
          `;
        }
  
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
  
    let submenuLinks = document.querySelectorAll(".menu-item.has-submenu .menu-link");
    submenuLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        let parentLi = link.closest(".menu-item");
        let submenu = parentLi.querySelector(".submenu");
        if (submenu) {
          parentLi.classList.toggle("active");
          submenu.style.display = parentLi.classList.contains("active") ? "block" : "none";
        }
      });
    });
  
    let menuToggleBtn = document.getElementById("menuToggle");
    let closeBtn = document.getElementById("closeSidebarBtn");
    let overlay = document.getElementById("sidebarOverlay");
  
    menuToggleBtn.addEventListener("click", () => toggleSidebar("open"));
    closeBtn.addEventListener("click", () => toggleSidebar("close"));
    overlay.addEventListener("click", () => toggleSidebar("close"));
  }
  
  document.addEventListener("DOMContentLoaded", menu);
  
  export default menu;
  