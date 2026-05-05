// ============================================================
// PRODUCTS — Edit this list to manage your store.
//
// HOW TO HOOK UP STRIPE CHECKOUT (no backend required):
// 1. Go to https://dashboard.stripe.com/payment-links
// 2. Click "+ New" and create a Payment Link for each product below.
// 3. Copy the link URL (looks like https://buy.stripe.com/abc123...)
// 4. Paste it into the `stripeLink` field for that product.
//
// Because GitHub Pages is static, each item checks out via its own
// Stripe Payment Link. Multiple items in the cart will open each
// Stripe checkout in sequence (or you can create a single combined
// Payment Link for bundles).
// ============================================================
const PRODUCTS = [
  {
    id: "senko-pack",
    name: "Yamamoto Senko 5\" — 10 pack",
    category: "Soft Plastics",
    price: 8.99,
    emoji: "🪱",
    color: "linear-gradient(135deg,#1f6f54,#0c3b2e)",
    stripeLink: "https://buy.stripe.com/REPLACE_ME"
  },
  {
    id: "paddle-tail",
    name: "Keitech Swing Impact 4.5\"",
    category: "Soft Plastics",
    price: 7.49,
    emoji: "🐟",
    color: "linear-gradient(135deg,#2a8f6b,#0c3b2e)",
    stripeLink: "https://buy.stripe.com/REPLACE_ME"
  },
  {
    id: "jerkbait",
    name: "Megabass Vision 110 Jerkbait",
    category: "Hard Baits",
    price: 24.99,
    emoji: "🎣",
    color: "linear-gradient(135deg,#c0531c,#6b2a0c)",
    stripeLink: "https://buy.stripe.com/REPLACE_ME"
  },
  {
    id: "topwater-frog",
    name: "Spro Bronzeye Frog 65",
    category: "Hard Baits",
    price: 11.99,
    emoji: "🐸",
    color: "linear-gradient(135deg,#5e8c1a,#2c4a08)",
    stripeLink: "https://buy.stripe.com/REPLACE_ME"
  },
  {
    id: "casting-rod",
    name: "St. Croix Mojo Bass 7'1\" MH",
    category: "Rods",
    price: 149.00,
    emoji: "🎯",
    color: "linear-gradient(135deg,#2a4d8f,#0f223f)",
    stripeLink: "https://buy.stripe.com/REPLACE_ME"
  },
  {
    id: "spinning-rod",
    name: "Shimano SLX 7'2\" Spinning",
    category: "Rods",
    price: 89.00,
    emoji: "🪝",
    color: "linear-gradient(135deg,#1c4a8f,#0a1f3f)",
    stripeLink: "https://buy.stripe.com/REPLACE_ME"
  },
  {
    id: "baitcaster",
    name: "Shimano SLX DC Baitcaster",
    category: "Reels",
    price: 179.00,
    emoji: "🌀",
    color: "linear-gradient(135deg,#4a3c2a,#1d1610)",
    stripeLink: "https://buy.stripe.com/REPLACE_ME"
  },
  {
    id: "spinning-reel",
    name: "Daiwa BG 3000 Spinning Reel",
    category: "Reels",
    price: 99.00,
    emoji: "⚙️",
    color: "linear-gradient(135deg,#5c4a30,#2a1f12)",
    stripeLink: "https://buy.stripe.com/REPLACE_ME"
  }
];

// ============================================================
// Cart state (persisted in localStorage)
// ============================================================
const CART_KEY = "outdoor_salez_cart_v1";
let cart = JSON.parse(localStorage.getItem(CART_KEY) || "{}");

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCart();
  renderCount();
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  openDrawer();
}

function removeFromCart(id) {
  delete cart[id];
  saveCart();
}

function setQty(id, qty) {
  if (qty <= 0) return removeFromCart(id);
  cart[id] = qty;
  saveCart();
}

// ============================================================
// Render product grid
// ============================================================
function renderProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = PRODUCTS.map(p => `
    <article class="product">
      <div class="product-img" style="background-image:${p.color};">
        <span class="emoji">${p.emoji}</span>
      </div>
      <div class="product-body">
        <span class="product-cat">${p.category}</span>
        <h3>${p.name}</h3>
        <div class="product-foot">
          <span class="price">$${p.price.toFixed(2)}</span>
          <button class="btn btn-primary btn-sm" onclick="addToCart('${p.id}')">Add</button>
        </div>
      </div>
    </article>
  `).join("");
}

// ============================================================
// Render cart
// ============================================================
function renderCount() {
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  document.getElementById("cartCount").textContent = count;
}

function renderCart() {
  const items = document.getElementById("cartItems");
  const ids = Object.keys(cart);
  if (ids.length === 0) {
    items.innerHTML = `<p class="empty">Your cart is empty.</p>`;
    document.getElementById("cartTotal").textContent = "$0.00";
    document.getElementById("checkoutBtn").disabled = true;
    return;
  }
  let total = 0;
  items.innerHTML = ids.map(id => {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return "";
    const qty = cart[id];
    const sub = p.price * qty;
    total += sub;
    return `
      <div class="cart-item">
        <div class="cart-thumb" style="background-image:${p.color};">${p.emoji}</div>
        <div class="cart-info">
          <strong>${p.name}</strong>
          <span class="muted">$${p.price.toFixed(2)}</span>
          <div class="qty">
            <button onclick="setQty('${p.id}', ${qty - 1})">−</button>
            <span>${qty}</span>
            <button onclick="setQty('${p.id}', ${qty + 1})">+</button>
            <button class="remove" onclick="removeFromCart('${p.id}')">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
  document.getElementById("cartTotal").textContent = "$" + total.toFixed(2);
  document.getElementById("checkoutBtn").disabled = false;
}

// ============================================================
// Drawer
// ============================================================
function openDrawer() {
  document.getElementById("drawer").classList.add("open");
  document.getElementById("drawerBackdrop").classList.add("open");
}
function closeDrawer() {
  document.getElementById("drawer").classList.remove("open");
  document.getElementById("drawerBackdrop").classList.remove("open");
}

// ============================================================
// Checkout — opens each product's Stripe Payment Link.
// For multi-item carts, opens the first item and lists the rest
// so the buyer can complete them. For best UX with multi-item
// purchases, create a single Stripe Payment Link per bundle, OR
// move to a backend (Lovable Cloud) for combined checkout.
// ============================================================
function checkout() {
  const ids = Object.keys(cart);
  if (ids.length === 0) return;

  const links = ids.map(id => {
    const p = PRODUCTS.find(x => x.id === id);
    return { name: p.name, qty: cart[id], link: p.stripeLink };
  });

  const missing = links.filter(l => !l.link || l.link.includes("REPLACE_ME"));
  if (missing.length) {
    alert(
      "Stripe Payment Link not set for:\n\n" +
      missing.map(m => "• " + m.name).join("\n") +
      "\n\nEdit app.js and paste your Stripe Payment Link URLs."
    );
    return;
  }

  if (links.length === 1) {
    // Single item — go straight to Stripe (with quantity prefilled)
    const url = new URL(links[0].link);
    if (links[0].qty > 1) url.searchParams.set("__prefilled_quantity", links[0].qty);
    window.location.href = url.toString();
  } else {
    // Multiple items — open first, store rest for the user to confirm
    const confirmMsg =
      "Your cart has multiple items. You'll be sent to Stripe to pay for the first item.\n\n" +
      "After payment, return here to checkout the rest, or DM @Outdoor_salez to bundle into one invoice.\n\nContinue?";
    if (!confirm(confirmMsg)) return;
    const first = links[0];
    const url = new URL(first.link);
    if (first.qty > 1) url.searchParams.set("__prefilled_quantity", first.qty);
    window.location.href = url.toString();
  }
}

// ============================================================
// Init
// ============================================================
document.getElementById("openCart").addEventListener("click", openDrawer);
document.getElementById("closeCart").addEventListener("click", closeDrawer);
document.getElementById("drawerBackdrop").addEventListener("click", closeDrawer);
document.getElementById("checkoutBtn").addEventListener("click", checkout);

renderProducts();
renderCart();
renderCount();
