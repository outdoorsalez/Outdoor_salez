// Renders the product grid. Edit products in /products.js.
// Edit images in the /images folder.
const INSTAGRAM_USER = "Outdoor_salez";

function dmLink() {
  return `https://instagram.com/${INSTAGRAM_USER}`;
}

function productImage(p) {
  if (p.image) {
    return `<div class="product-img" style="background-image:url('${p.image}');background-size:cover;background-position:center;"></div>`;
  }
  return `<div class="product-img" style="background-image:${p.color};"><span class="emoji">${p.emoji}</span></div>`;
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid || typeof PRODUCTS === "undefined") return;
  grid.innerHTML = PRODUCTS.map(p => `
    <article class="product">
      ${productImage(p)}
      <div class="product-body">
        <span class="product-cat">${p.category}</span>
        <h3>${p.name}</h3>
        <div class="product-foot">
          <span class="price">$${p.price.toFixed(2)}</span>
          <a class="btn btn-primary btn-sm" href="${dmLink()}" target="_blank" rel="noopener">DM to Buy</a>
        </div>
      </div>
    </article>
  `).join("");
}

renderProducts();
