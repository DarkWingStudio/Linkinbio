document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const emailLink = document.querySelector(".js-email-link");
  if (emailLink) {
    const addrBytes = [100, 97, 114, 107, 119, 105, 110, 103, 100, 111, 109, 97, 105, 110, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109];
    const address = addrBytes.map(b => String.fromCharCode(b)).join("");

    emailLink.href = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(address);
    emailLink.target = "_blank";
    emailLink.rel = "noopener noreferrer nofollow";
    emailLink.setAttribute("aria-label", "Email DarkWing Studio using Gmail");
  }

  // Handle the gallery filter buttons
  const filterBtns = document.querySelectorAll(".asset-filter");
  const cards = document.querySelectorAll(".asset-card");

  if (filterBtns.length > 0 && cards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        // Clear active state on all buttons, set it on the clicked one
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.getAttribute("data-filter");

        cards.forEach(card => {
          if (category === "all" || card.getAttribute("data-category") === category) {
            card.style.display = "flex";
            card.style.opacity = "1";
          } else {
            card.style.display = "none";
            card.style.opacity = "0";
          }
        });
      });
    });
  }
});
