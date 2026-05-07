// ============================================================
// EDIT YOUR PRODUCTS HERE
// ------------------------------------------------------------
// Each product has:
//   id, name, category, price, image, emoji, color
// Set image: "" to use the emoji/color placeholder.
// ============================================================

const PRODUCTS = [
  {
    id: "zoom-collection",
    name: "Zoom Bait Co. Assorted Trailers & Worms (11-pack lot)",
    category: "Soft Plastics",
    price: 39.99,
    image: "images/zoom-collection.jpg",
    emoji: "🪱",
    color: "linear-gradient(135deg,#1f6f54,#0c3b2e)"
  },
  {
    id: "yamamoto-senko-mixed",
    name: "Gary Yamamoto Custom Baits Senko",
    category: "Soft Plastics",
    price: 6.00,
    image: "images/yamamoto-senko.jpg",
    emoji: "🐟",
    color: "linear-gradient(135deg,#2a8f6b,#0c3b2e)"
  },
  {
    id: "strikeking-watermelon",
    name: "Strike King Shim-E-Stick — Watermelon Black Flake (7 pk)",
    category: "Soft Plastics",
    price: 6.99,
    image: "images/strikeking-watermelon.jpg",
    emoji: "🪱",
    color: "linear-gradient(135deg,#5e8c1a,#2c4a08)"
  },
  {
    id: "strikeking-greenpumpkin",
    name: "Strike King Shim-E-Stick — Green Pumpkin (7 pk)",
    category: "Soft Plastics",
    price: 6.99,
    image: "images/strikeking-greenpumpkin.jpg",
    emoji: "🪱",
    color: "linear-gradient(135deg,#4a6a1a,#1f2e08)"
  },
  {
    id: "yum-dinger-morningdawn",
    name: "YUM 5\" Dinger — Morning Dawn",
    category: "Soft Plastics",
    price: 5.49,
    image: "images/yum-dinger-morningdawn.jpg",
    emoji: "🐛",
    color: "linear-gradient(135deg,#7a3a4a,#3a1620)"
  },
  {
    id: "yum-dinger-tinfoil",
    name: "YUM 5\" Dinger — Tin Foil (8 pk)",
    category: "Soft Plastics",
    price: 5.49,
    image: "images/yum-dinger-tinfoil.jpg",
    emoji: "✨",
    color: "linear-gradient(135deg,#5a5a6a,#2a2a36)"
  },
  {
    id: "yamasenko-smoke",
    name: "Yamamoto 5\" Yamasenko — Smoke w/ Black Hologram (10 pk)",
    category: "Soft Plastics",
    price: 9.49,
    image: "images/yamasenko-smoke.jpg",
    emoji: "🐟",
    color: "linear-gradient(135deg,#2a8f6b,#0c3b2e)"
  },
  {
    id: "wackyworm-smoke",
    name: "Wacky Worm Inc. 5.5\" Wacko — Smoke Hologram Shad",
    category: "Soft Plastics",
    price: 7.99,
    image: "images/wackyworm-smoke.jpg",
    emoji: "🪱",
    color: "linear-gradient(135deg,#888,#444)"
  },
  {
    id: "bigbite-trickstick",
    name: "Big Bite Baits 5\" Trick Stick — Watermelon (25 pk)",
    category: "Soft Plastics",
    price: 6.00,
    image: "images/bigbite-trickstick.jpg",
    emoji: "🦈",
    color: "linear-gradient(135deg,#c0531c,#6b2a0c)"
  },
  {
    id: "yum-dinger-eldersmagic",
    name: "YUM 5\" Dinger — Elders Magic (30 pk)",
    category: "Soft Plastics",
    price: 12.99,
    image: "images/yum-dinger-eldersmagic.jpg",
    emoji: "🌌",
    color: "linear-gradient(135deg,#1a3a4a,#08161f)"
  },
  {
    id: "berkley-powerbait",
    name: "Berkley PowerBait Worms",
    category: "Soft Plastics",
    price: 6.99,
    image: "images/berkley-powerbait.jpg",
    emoji: "🪱",
    color: "linear-gradient(135deg,#e8801c,#7a3a08)"
  },
  {
    id: "wackyworm-bluegill",
    name: "Wacky Worm Inc. 5\" Wacko — Bluegill (Pork Fat, Heavily Salted)",
    category: "Soft Plastics",
    price: 7.99,
    image: "images/wackyworm-bluegill.jpg",
    emoji: "🐟",
    color: "linear-gradient(135deg,#3a5a6a,#16242e)"
  },
  {
    id: "slider-shad",
    name: "Charlie Brewer's Slider 5\" Shad",
    category: "Soft Plastics",
    price: 6.49,
    image: "images/slider-shad.jpg",
    emoji: "🐟",
    color: "linear-gradient(135deg,#b01c1c,#5a0808)"
  },
  {
    id: "chatterbait-blue",
    name: "ChatterBait EZSkirt 3/8 oz — Blue",
    category: "Hard Baits",
    price: 6.00,
    image: "images/chatterbait-blue.jpg",
    emoji: "⚡",
    color: "linear-gradient(135deg,#1c3ab0,#0a1a5a)"
  },
  {
    id: "chatterbait-chartreuse",
    name: "ChatterBait EZSkirt 3/8 oz — Chartreuse",
    category: "Hard Baits",
    price: 6.00,
    image: "images/chatterbait-chartreuse.jpg",
    emoji: "⚡",
    color: "linear-gradient(135deg,#c8d81c,#5a6a08)"
  },
  {
    id: "lews-mach-crush",
    name: "Lew's Mach Crush Baitcasting Reel (Left-Hand Retrieve)",
    category: "Reels",
    price: 150.00,
    image: "images/lews-mach-crush.jpg",
    emoji: "🎣",
    color: "linear-gradient(135deg,#e8801c,#3a1a08)"
  }
];
