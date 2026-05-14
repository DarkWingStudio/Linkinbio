document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", async () => {
  const navButtons = document.querySelectorAll(".nav-btn");
  const contentSections = document.querySelectorAll(".content-section");
  const shopButton = document.querySelector('[data-target="shop-section"]');
  const shopSection = document.getElementById("shop-section");
  const emailLink = document.querySelector(".js-email-link");

  if (emailLink) {
    const address = decodeEmail([100, 97, 114, 107, 119, 105, 110, 103, 100, 111, 109, 97, 105, 110, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109]);
    emailLink.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(address)}`;
    emailLink.target = "_blank";
    emailLink.rel = "noopener noreferrer nofollow";
  }

  function showSection(targetId) {
    const targetSection = document.getElementById(targetId);
    if (!targetSection || targetSection.hidden) return;

    navButtons.forEach(btn => {
      const isActive = btn.dataset.target === targetId;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", String(isActive));
    });

    contentSections.forEach(section => {
      const isActive = section.id === targetId;
      section.classList.toggle("active", isActive);
      section.hidden = !isActive && section.id !== "shop-section";
    });

    if (shopSection && shopButton && shopButton.hidden) {
      shopSection.hidden = true;
    }
  }

  navButtons.forEach(button => {
    button.addEventListener("click", () => showSection(button.dataset.target));
  });

  document.addEventListener("click", event => {
    const internalLink = event.target.closest('a[href^="#"]');
    if (!internalLink) return;

    const targetId = internalLink.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    if (!targetSection || !targetSection.classList.contains("content-section") || targetSection.hidden) return;

    event.preventDefault();
    showSection(targetId);
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  const hasProducts = await loadProducts();
  loadLinks(hasProducts);
});

function decodeEmail(codes) {
  return codes.map(code => String.fromCharCode(code)).join("");
}

async function loadLinks(hasProducts) {
  try {
    const response = await fetch("links.json");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const links = await response.json();
    const list = document.getElementById("link-list");

    links
      .filter(link => hasProducts || link.link !== "#shop-section")
      .forEach(link => {
        const priorityClass = link.priority ? `link-${link.priority}` : "link-tertiary";
        const isInternal = link.link.startsWith("#");
        const isEmail = link.link.startsWith("mailto:");
        const target = isInternal || isEmail ? "" : 'target="_blank"';
        const rel = isInternal || isEmail ? "" : 'rel="noopener noreferrer"';

        list.innerHTML += `
          <a href="${link.link}" class="link-card ${priorityClass}" ${target} ${rel} role="listitem">
            <div class="link-prefix"><i class="${link.icon}" aria-hidden="true"></i></div>
            <div class="link-body">
              <span class="link-cmd">${link.cmd}</span>
              <span class="link-text">${link.label}</span>
            </div>
            <span class="link-arrow">&gt;_</span>
          </a>`;
      });
  } catch (error) {
    console.error("Error loading links:", error);
    document.getElementById("link-list").innerHTML = '<p class="error-msg">Failed to load links. Please try again later.</p>';
  }
}

async function loadProducts() {
  const shopButton = document.querySelector('[data-target="shop-section"]');
  const shopSection = document.getElementById("shop-section");
  const grid = document.getElementById("shop-grid");
  const fallbackImage = "assets/image-unavailable.svg";

  try {
    const response = await fetch("products.json");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const products = await response.json();
    const validProducts = products.filter(product => product.title && product.link);

    if (!validProducts.length) {
      if (shopButton) shopButton.hidden = true;
      if (shopSection) shopSection.hidden = true;
      return false;
    }

    if (shopButton) shopButton.hidden = false;
    if (shopSection) shopSection.hidden = true;

    validProducts.forEach(product => {
      const image = product.image || fallbackImage;
      grid.innerHTML += `
        <a href="${product.link}" class="product-card" role="listitem">
          <div class="product-img-wrap">
            ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ""}
            <img src="${image}" alt="${product.title}" class="product-image" loading="lazy" onerror="this.onerror=null;this.src='${fallbackImage}'">
          </div>
          <div class="product-info">
            <span class="product-title">${product.title}</span>
            ${product.desc ? `<span class="product-desc">${product.desc}</span>` : ""}
            <div class="product-footer">
              ${product.price ? `<span class="product-price">${product.price}</span>` : "<span></span>"}
              <span class="product-buy">BUY &gt;</span>
            </div>
          </div>
        </a>`;
    });

    return true;
  } catch (error) {
    console.error("Error loading products:", error);
    if (shopButton) shopButton.hidden = true;
    if (shopSection) shopSection.hidden = true;
    return false;
  }
}
