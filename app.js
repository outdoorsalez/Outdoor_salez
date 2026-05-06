// ============================================================
// PRODUCTS — Edit this list to manage your store.
// Orders are placed by DM on Instagram (@Outdoor_salez).
//
// To add a product image: drop the file into the /images folder
// (e.g. images/senko.jpg) and set `image: "images/senko.jpg"`.
// If `image` is missing, the emoji + gradient fallback is shown.
// ============================================================
const INSTAGRAM_USER = "Outdoor_salez";

const PRODUCTS = [
  {
    id: "senko-pack",
    name: "Yamamoto Senko 5\" — 10 pack",
    category: "Soft Plastics",
    price: 8.99,
    image: "images/senko.jpg",
    emoji: "🪱",
    color: "linear-gradient(135deg,#1f6f54,#0c3b2e)"
  },
  {
    id: "paddle-tail",
    name: "Keitech Swing Impact 4.5\"",
    category: "Soft Plastics",
    price: 7.49,
    image: "images/keitech.jpg",
    emoji: "🐟",
    color: "linear-gradient(135deg,#2a8f6b,#0c3b2e)"
  },
  {
    id: "jerkbait",
    name: "Megabass Vision 110 Jerkbait",
    category: "Hard Baits",
    price: 24.99,
    image: "images/vision110.jpg",
    emoji: "🎣",
    color: "linear-gradient(135deg,#c0531c,#6b2a0c)"
  },
  {
    id: "topwater-frog",
    name: "Spro Bronzeye Frog 65",
    category: "Hard Baits",
    price: 11.99,
    image: "images/frog.jpg",
    emoji: "🐸",
    color: "linear-gradient(135deg,#5e8c1a,#2c4a08)"
  },
  {
    id: "casting-rod",
    name: "St. Croix Mojo Bass 7'1\" MH",
    category: "Rods",
    price: 149.00,
    image: "images/mojo-bass.jpg",
    emoji: "🎯",
    color: "linear-gradient(135deg,#2a4d8f,#0f223f)"
  },
  {
    id: "spinning-rod",
    name: "Shimano SLX 7'2\" Spinning",
    category: "Rods",
    price: 89.00,
    image: "images/slx-rod.jpg",
    emoji: "🪝",
    color: "linear-gradient(135deg,#1c4a8f,#0a1f3f)"
  },
  {
    id: "baitcaster",
    name: "Shimano SLX DC Baitcaster",
    category: "Reels",
    price: 179.00,
    image: "images/slx-dc.jpg",
    emoji: "🌀",
    color: "linear-gradient(135deg,#4a3c2a,#1d1610)"
  },
  {
    id: "spinning-reel",
    name: "Daiwa BG 3000 Spinning Reel",
    category: "Reels",
    price: 99.00,
    image: "images/daiwa-bg.jpg",
    emoji: "⚙️",
    color: "linear-gradient(135deg,#5c4a30,#2a1f12)"
  }
];

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
  if (!grid) return;
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
