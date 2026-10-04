document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const emailLink = document.querySelector(".js-email-link");
  if (emailLink) {
    const address = [100, 97, 114, 107, 119, 105, 110, 103, 100, 111, 109, 97, 105, 110, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109]
      .map(code => String.fromCharCode(code))
      .join("");

    emailLink.href = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(address);
    emailLink.target = "_blank";
    emailLink.rel = "noopener noreferrer nofollow";
    emailLink.setAttribute("aria-label", "Email DarkWing Studio using Gmail");
  }

  // Gallery Filter Logic
  const filterButtons = document.querySelectorAll(".asset-filter");
  const assetCards = document.querySelectorAll(".asset-card");

  if (filterButtons.length > 0 && assetCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Add active class to clicked button
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        assetCards.forEach(card => {
          if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
            card.style.display = "flex"; // Reset display
            card.style.opacity = "1";
          } else {
            card.style.display = "none"; // Hide non-matching
            card.style.opacity = "0";
          }
        });
      });
    });
  }
});
