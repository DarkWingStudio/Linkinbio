// for having the current year
document.getElementById("year").textContent = new Date().getFullYear();
     
    document.addEventListener('DOMContentLoaded', () => {
      const navButtons = document.querySelectorAll('.nav-btn');
      const contentSections = document.querySelectorAll('.content-section');

      navButtons.forEach(button => {
        button.addEventListener('click', () => {
          const targetId = button.dataset.target;

          // Remove active class from all buttons and sections
          navButtons.forEach(btn => btn.classList.remove('active'));
          contentSections.forEach(section => section.classList.remove('active'));

          // Add active class to clicked button and target section
          button.classList.add('active');
          document.getElementById(targetId).classList.add('active');
        });
      });
    });
// adding links with this 
    fetch('links.json')
      .then(res => res.json())
      .then(links => {
        const list = document.getElementById('link-list');
        links.forEach(l => {
          list.innerHTML += `
            <a href="${l.link}" class="link-card" target="_blank">
              <div class="link-prefix"><i class="fa-solid ${l.icon}"></i></div>
              <div class="link-body">
                <span class="link-cmd">${l.cmd}</span>
                <span class="link-text">${l.label}</span>
              </div>
              <span class="link-arrow">&gt;_</span>
            </a>`;
        });
      });
// adding products details
    fetch('products.json')
      .then(res => res.json())
      .then(products => {
        const grid = document.getElementById('shop-grid');
        products.forEach(p => {
          grid.innerHTML += `
            <a href="${p.link}" class="product-card">
              <div class="product-img-wrap">
                ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ''}
                <img src="${p.image}" alt="${p.title}" class="product-image">
              </div>
              <div class="product-info">
                <span class="product-title">${p.title}</span>
                <span class="product-desc">${p.desc}</span>
                <div class="product-footer">
                  <span class="product-price">${p.price}</span>
                  <span class="product-buy">BUY →</span>
                </div>
              </div>
            </a>`;
        });
      });