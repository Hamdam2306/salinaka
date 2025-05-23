// src/cart.ts
function renderCart() {
  document.body.innerHTML = "";
  const basketContainer = document.createElement("div");
  basketContainer.className = "max-w-3xl mx-auto bg-white shadow-lg p-6";
  const header = document.createElement("div");
  header.className = "flex justify-between items-center border-b pb-4";
  const title = document.createElement("h2");
  title.className = "text-xl font-semibold";
  title.textContent = "My Basket";
  const itemCount = document.createElement("span");
  itemCount.className = "text-gray-500 ml-2";
  title.appendChild(itemCount);
  const buttonContainer = document.createElement("div");
  const closeButton = document.createElement("button");
  closeButton.className = "px-4 py-2 border rounded text-gray-700 hover:bg-gray-200";
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", () => renderShop());
  const clearButton = document.createElement("button");
  clearButton.className = "px-4 py-2 border rounded text-red-600 hover:bg-red-100 ml-2";
  clearButton.textContent = "Clear Basket";
  clearButton.addEventListener("click", () => {
    clearCart();
  });
  buttonContainer.appendChild(closeButton);
  buttonContainer.appendChild(clearButton);
  header.appendChild(title);
  header.appendChild(buttonContainer);
  const checkoutButton = document.createElement("button");
  checkoutButton.className = "w-full bg-black text-white py-3 text-lg font-semibold rounded mt-4 hover:bg-gray-800";
  checkoutButton.textContent = "CHECK OUT";
  basketContainer.appendChild(header);
  const emptyBasket = document.createElement("div");
  const subtotalPrice = document.createElement("p");
  subtotalPrice.className = "text-2xl font-bold";
  const emptyBasketText = document.createElement("p");
  emptyBasketText.className = "text-center text-lg font-semibold mt-4";
  emptyBasketText.textContent = "Your basket is empty \uD83D\uDE22";
  function renderCartItems() {
    itemCount.textContent = `(${cart.length} items)`;
    if (cart.length === 0) {
      emptyBasket.appendChild(emptyBasketText);
    }
    cart?.forEach((cartProduct) => {
      const plusBtn = document.createElement("button");
      plusBtn.className = "text-gray-500 hover:text-gray-700 font-semibold text-xl mr-4 ml-4 border border-gray-300 px-2 hover:bg-gray-100";
      plusBtn.textContent = "+";
      plusBtn.addEventListener("click", () => {
        cart.forEach((product) => {
          if (product.id === cartProduct.id) {
            product.quantity++;
            emptyBasket.innerHTML = "";
            renderCartItems();
          }
        });
      });
      const minusBtn = document.createElement("button");
      minusBtn.className = "text-gray-500 hover:text-gray-700 font-semibold text-xl mr-4 ml-4 border border-gray-300 px-2 hover:bg-gray-100";
      minusBtn.textContent = "-";
      minusBtn.addEventListener("click", () => {
        cart.forEach((product) => {
          if (product.id === cartProduct.id && product.quantity > 1) {
            product.quantity--;
            emptyBasket.innerHTML = "";
            renderCartItems();
          }
        });
      });
      const quantity = document.createElement("span");
      quantity.className = "text-lg font-semibold";
      quantity.textContent = `${cartProduct.quantity}`;
      const itemContainer = document.createElement("div");
      itemContainer.className = "flex items-center justify-between p-4 border-b";
      const image = document.createElement("img");
      image.src = cartProduct.imageUrl;
      image.alt = "Glasses";
      image.className = "w-20 ";
      const itemDetails = document.createElement("div");
      itemDetails.className = "flex-1 ml-4";
      const itemName = document.createElement("p");
      itemName.className = "text-lg font-semibold";
      itemName.textContent = cartProduct.name;
      const size = document.createElement("p");
      size.className = "text-sm text-gray-600";
      const sizeLabel = document.createElement("span");
      sizeLabel.textContent = "Size: ";
      const sizeValue = document.createElement("span");
      sizeValue.className = "font-medium";
      sizeValue.textContent = `${cartProduct.size} `;
      size.appendChild(sizeLabel);
      size.appendChild(sizeValue);
      itemContainer.appendChild(minusBtn);
      itemContainer.appendChild(quantity);
      itemContainer.appendChild(plusBtn);
      itemDetails.appendChild(itemName);
      itemDetails.appendChild(size);
      const price = document.createElement("p");
      price.className = "text-lg font-semibold";
      price.textContent = `$${(+cartProduct.price * cartProduct.quantity).toFixed(2)}`;
      const removeBtn = document.createElement("button");
      removeBtn.className = "text-red-500 hover:text-red-700 font-semibold text-xl ml-4 border border-red hover:bg-red-200 px-2";
      removeBtn.textContent = "X";
      removeBtn.addEventListener("click", () => {
        cart.forEach((product) => {
          if (product.id === cartProduct.id) {
            const index = cart.indexOf(product);
            product.hasCart = false;
            cart.splice(index, 1);
            emptyBasket.innerHTML = "";
            renderCartItems();
          }
        });
      });
      itemContainer.appendChild(image);
      itemContainer.appendChild(itemDetails);
      itemContainer.appendChild(price);
      itemContainer.appendChild(removeBtn);
      emptyBasket.appendChild(itemContainer);
    });
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.quantity;
    });
    subtotalPrice.textContent = `$${total}`;
  }
  renderCartItems();
  const subtotalContainer = document.createElement("div");
  subtotalContainer.className = "flex justify-between items-center p-4 mt-4 border-t";
  const subtotalText = document.createElement("p");
  subtotalText.className = "text-lg font-semibold";
  subtotalText.textContent = "Subtotal Amount:";
  subtotalContainer.appendChild(subtotalText);
  subtotalContainer.appendChild(subtotalPrice);
  basketContainer.appendChild(emptyBasket);
  basketContainer.appendChild(subtotalContainer);
  basketContainer.appendChild(checkoutButton);
  document.body.appendChild(basketContainer);
}

// src/db.ts
var products = [
  {
    id: "0af16e20-bc45-4595-a9be-6b237eef53fa",
    name: "Nightmare Abbey",
    price: 77,
    category: "Betsin Maalat",
    imageUrl: "https://www.vadoclothingco.com/cdn/shop/files/sunski_polarized_sunglasses_baia_honey_sepia_2_1360x_jpg.webp?v=1729621858&width=1445",
    description: "New Towels model with 62 GB RAM, 113 GB storage, and entire features",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "69a6c8dc-8359-4de2-a0c1-2267b15d9747",
    name: "The Diary of",
    price: 243,
    category: "Salt",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0DL0LLJp4yrN_JvDkl4KNoDOQIanv7QlWg&s",
    description: "Professional-grade Keyboard perfect for dramatic training and recreational use",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "9e0683e2-7aee-4547-9fe4-2f5f3fb52366",
    name: "David Copperfield",
    price: 164,
    category: "Betsin Maalat",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMdZVS7aeAugY5kxibt2pFn0gTf0d0V_BJUVpp9qOjZrghe7kiCEVk-ez7tyumUoHebs&usqp=CAU",
    description: "The sleek and delectable Keyboard comes with turquoise LED lighting for smart functionality",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "d6e1850b-e38d-4385-b54e-d62e5a16089e",
    name: "The Fountainhead",
    price: 215,
    category: "Salt",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvSOZlj6X1x8ienIV26NF9i0Ffz2Wf-tz1OV5XBzXUsGcRg4T_UKVRttRgcPcLDOPCpQ&usqp=CAU",
    description: "Ergonomic Fish made with Rubber for all-day cuddly support",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "582860e5-ca15-4caa-8d6d-634f9a42bce0",
    name: "Ruth Fielding",
    price: 154,
    category: "Betsin Maalat",
    imageUrl: "https://cdn.dsmcdn.com/mnresize/600/-/ty1322/product/media/images/prod/SPM/PIM/20240507/17/256b6287-0a08-3958-bbb7-41d0ed074093/1_org_zoom.jpg",
    description: "Introducing the Lebanon-inspired Cheese, blending grumpy style with local craftsmanship",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "a67b945c-e080-491b-9851-c2e3e26f7970",
    name: "Of Mice ",
    price: 228,
    category: "Salt",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlp2fBC8McMa44Hk4pWvqCrJEnY_G2yEHTnHzGT75eztetaS2ZnFcc_ly3fPvEipt9Gyg&usqp=CAU",
    description: "Ergonomic Car made with Wooden for all-day unwieldy support",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "3df7c17a-07d5-49c8-9ec1-7fc82097fa43",
    name: "Harry Potter ",
    price: 257,
    category: "Betsin Maalat",
    imageUrl: "https://ampere.shop/cdn/shop/files/Dusk-Blackframewithdarktint_polarizedlenses_969c55e5-54b3-44bc-ad49-3c0eac2e49f5_1100x.jpg?v=1704269504",
    description: "Stylish Keyboard designed to make you stand out with excellent looks",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "268dad34-bf23-483c-ab78-e95d317a5edf",
    name: "Dora",
    price: 34,
    category: "Salt",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnK8DNRlNZbNiz3QxDgOMwm79ZbFLLCyNjhqqKtm9b07n8ocB_yYES3j-bSImrW_GPDmI&usqp=CAU",
    description: "Experience the olive brilliance of our Sausages, perfect for agitated environments",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "a9895bf0-b144-4e7b-aea8-6897c34dfcc0",
    name: "Brave New",
    price: 61,
    category: "Betsin Maalat",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVEucE5CbTQZUrrGBdsPaYR-0r9M98X9T-34zaK1WNKMQzCvEc1w4gSwK5JTDvvOlm-A&usqp=CAU",
    description: "The sleek and warm Hat comes with red LED lighting for smart functionality",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "b76fd8ec-dca1-46a8-bbf1-8eb375bc6eb8",
    name: "Grimms' Fairy Tales",
    price: 96,
    category: "Salt",
    imageUrl: "https://theshoppemiami.com/cdn/shop/files/7S25T509_2460_large_f48f6d1b-af65-4633-930d-b0869a029b96_1024x1024.jpg?v=1730836489",
    description: "Professional-grade Pizza perfect for pretty training and recreational use",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "77d1e43b-0414-453f-abb1-4a3fb1d37422",
    name: "The Heart r",
    price: 22,
    category: "Betsin Maalat",
    imageUrl: "https://media.viskanassets.com/v2/pellepprod/normal/E1-Sunglasses-solglas%C3%B6gon-PP93E1-6010-D.jpg",
    description: "The sleek and hasty Table comes with olive LED lighting for smart functionality",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "17415490-e038-44cd-8853-31f0368f91d1",
    name: "The Handmaid",
    price: 200,
    category: "Salt",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0DL0LLJp4yrN_JvDkl4KNoDOQIanv7QlWg&s",
    description: "The Desiree Computer is the latest in a series of caring products from Schulist, Schaden and Quitzon",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "55f99f6b-e785-485f-bb11-5817f2929650",
    name: "The Republic",
    price: 247,
    category: "Betsin Maalat",
    imageUrl: "https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg",
    description: "Innovative Pants featuring immense technology and Bamboo construction",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "8305be99-34f2-46ac-8728-3d00799c8d15",
    name: "A Clockwork Orange",
    price: 191,
    category: "Salt",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0DL0LLJp4yrN_JvDkl4KNoDOQIanv7QlWg&s",
    description: "Discover the genuine new Pizza with an exciting mix of Concrete ingredients",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "e0ac8e45-92e6-4d93-9b56-53f416f32aa2",
    name: "The Stand",
    price: 267,
    category: "Salt",
    imageUrl: "https://cdn.shopify.com/s/files/1/0109/5012/products/PHANTOM_SUN_MATTEBLACK_DARKCARBONPOLAR_FRONT_UPDATE-LENS_a58a0edb-f160-4b5d-9a88-796476ec0e40.jpg?v=1714577588",
    description: "The sleek and unwelcome Pizza comes with pink LED lighting for smart functionality",
    quantity: 1,
    size: "36mm",
    hasCart: false
  }
];
var cart = [];
function clearCart() {
  cart.forEach((p) => {
    products.forEach((product) => {
      p.id === product.id && (product.hasCart = false);
      p.quantity = 1;
    });
  });
  cart = [];
  renderCart();
}

// src/utility.ts
function addToCart(product, hasCart) {
  const index = cart.findIndex((p) => p.id === product.id);
  product.hasCart ? cart?.forEach((p) => {
    p.id === product.id && cart.splice(index, 1);
  }) : cart.push(product);
  product.hasCart = !product.hasCart;
  renderProductDetail(product);
}
function addToCartShop(product, hasCart) {
  const index = cart.findIndex((p) => p.id === product.id);
  product.hasCart ? cart?.forEach((p) => {
    p.id === product.id && cart.splice(index, 1);
  }) : cart.push(product);
  product.hasCart = !product.hasCart;
  renderShop();
}

// src/navbar2.ts
function createNavbar() {
  const navbar = document.createElement("nav");
  navbar.className = "flex items-center justify-between px-10 py-6 bg-white shadow-md mb-5";
  const leftSection = document.createElement("div");
  leftSection.className = "flex items-center space-x-6";
  const logo = document.createElement("img");
  logo.src = "https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png";
  logo.alt = "Logo";
  logo.className = "h-10";
  const menu = document.createElement("div");
  menu.className = "hidden md:flex space-x-6 text-gray-600 text-lg";
  const menuItems = ["Home", "Shop", "Featured", "Recommended"];
  menuItems.forEach((item) => {
    const link = document.createElement("button");
    link.className = "hover:text-black";
    link.textContent = item;
    link.textContent === "Shop" && link.addEventListener("click", () => renderShop());
    menu.appendChild(link);
  });
  leftSection.appendChild(logo);
  leftSection.appendChild(menu);
  const rightSection = document.createElement("div");
  rightSection.className = "flex items-center space-x-4";
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search product...";
  searchInput.className = "border border-gray-300 rounded-lg px-3 py-2";
  const cartButton = document.createElement("button");
  cartButton.className = "relative text-2xl";
  cartButton.textContent = "\uD83D\uDED2";
  cartButton.addEventListener("click", () => renderCart());
  const signUpButton = document.createElement("button");
  signUpButton.className = "bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800";
  signUpButton.textContent = "Sign Up";
  const signInButton = document.createElement("button");
  signInButton.className = "border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-200";
  signInButton.textContent = "Sign In";
  rightSection.appendChild(searchInput);
  rightSection.appendChild(cartButton);
  rightSection.appendChild(signUpButton);
  rightSection.appendChild(signInButton);
  navbar.appendChild(leftSection);
  navbar.appendChild(rightSection);
  const mainContent = document.createElement("div");
  mainContent.className = "text-center text-2xl font-bold";
  mainContent.appendChild(navbar);
  document.body.appendChild(mainContent);
}

// src/detail.ts
function renderProductDetail(product) {
  document.body.innerHTML = "";
  createNavbar();
  document.body.className = "max-w-8xl m-auto bg-gray-100 p-4 md:p-10";
  const flexwrap = document.createElement("div");
  flexwrap.className = "flex justify-between items-center mb-4";
  document.body.appendChild(flexwrap);
  const container = document.createElement("div");
  container.className = "flex flex-col md:flex-row gap-8 bg-white p-6 rounded-md shadow-md";
  document.body.appendChild(container);
  const leftSide = document.createElement("div");
  leftSide.className = "flex flex-col items-center md:w-1/3";
  container.appendChild(leftSide);
  const mainImage = document.createElement("img");
  mainImage.src = product.imageUrl;
  mainImage.alt = product.name;
  mainImage.className = "w-full h-auto object-cover rounded-md mb-4";
  leftSide.appendChild(mainImage);
  const thumbnailsContainer = document.createElement("div");
  thumbnailsContainer.className = "flex gap-2";
  leftSide.appendChild(thumbnailsContainer);
  for (let i = 0;i < 3; i++) {
    const thumb = document.createElement("img");
    thumb.src = product.imageUrl;
    thumb.alt = `${product.name} thumbnail ${i + 1}`;
    thumb.className = "w-16 h-16 object-cover rounded cursor-pointer border border-gray-200";
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.src;
    });
    thumbnailsContainer.appendChild(thumb);
  }
  const rightSide = document.createElement("div");
  rightSide.className = "flex flex-col md:w-2/3";
  container.appendChild(rightSide);
  const brandEl = document.createElement("p");
  brandEl.className = "text-sm text-gray-500 uppercase tracking-wider mb-2";
  brandEl.textContent = product.category;
  rightSide.appendChild(brandEl);
  const productNameEl = document.createElement("h1");
  productNameEl.className = "text-2xl md:text-3xl font-bold mb-4";
  productNameEl.textContent = product.name;
  rightSide.appendChild(productNameEl);
  const descriptionEl = document.createElement("p");
  descriptionEl.className = "text-gray-700 mb-4";
  descriptionEl.textContent = product.description;
  rightSide.appendChild(descriptionEl);
  const sizeLabel = document.createElement("label");
  sizeLabel.className = "block mb-2 font-semibold";
  sizeLabel.textContent = "Lens Width and Frame Size:";
  rightSide.appendChild(sizeLabel);
  const sizeSelect = document.createElement("select");
  sizeSelect.className = "border border-gray-300 rounded-md px-3 py-2 mb-4";
  ["28mm", "36mm", "42mm"].forEach((size) => {
    const option = document.createElement("option");
    option.value = size === product.size ? size : "28mm";
    option.textContent = size;
    option.selected = size === product.size ? true : false;
    sizeSelect.appendChild(option);
  });
  rightSide.appendChild(sizeSelect);
  const colorLabel = document.createElement("p");
  colorLabel.className = "font-semibold mb-2";
  colorLabel.textContent = "Choose Color:";
  rightSide.appendChild(colorLabel);
  const colorsContainer = document.createElement("div");
  colorsContainer.className = "flex items-center gap-3 mb-4";
  rightSide.appendChild(colorsContainer);
  const colorOptions = ["#000000", "#ff0000", "#0000ff", "#ff00ff", "#8b4513"];
  colorOptions.forEach((color) => {
    const colorCircle = document.createElement("div");
    colorCircle.className = "w-6 h-6 rounded-full cursor-pointer border border-gray-200";
    colorCircle.style.backgroundColor = color;
    colorCircle.addEventListener("click", () => {
    });
    colorsContainer.appendChild(colorCircle);
  });
  const priceEl = document.createElement("p");
  priceEl.className = "text-3xl font-bold mb-4";
  priceEl.textContent = `$${product.price}`;
  rightSide.appendChild(priceEl);
  const addButton = document.createElement("button");
  addButton.className = `bg-${product.hasCart ? "white" : "black"} text-${product.hasCart ? "black" : "white"} px-4 py-2 rounded-md hover:${product.hasCart ? "bg-gray-200" : "bg-gray-800"} transition-colors duration-200 border border-black`;
  addButton.textContent = product.hasCart ? "Remove from Bascet" : "Add to Basket";
  addButton.addEventListener("click", () => addToCart(product, product.hasCart));
  rightSide.appendChild(addButton);
}

// src/shop.ts
function renderShop() {
  document.body.innerHTML = "";
  createNavbar();
  document.body.className = "min-h-screen bg-gray-100 p-4 md:p-10";
  const gridContainer = document.createElement("div");
  gridContainer.className = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6";
  document.body.appendChild(gridContainer);
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center";
    card.addEventListener("click", () => renderProductDetail(product));
    const imageEl = document.createElement("img");
    imageEl.src = product.imageUrl;
    imageEl.className = "h-32 w-full object-cover mb-4 rounded-md";
    card.appendChild(imageEl);
    const nameEl = document.createElement("h2");
    nameEl.className = "text-lg font-semibold";
    nameEl.textContent = product.name;
    card.appendChild(nameEl);
    const categoryEl = document.createElement("p");
    categoryEl.className = "text-gray-500";
    categoryEl.textContent = product.category;
    card.appendChild(categoryEl);
    const priceEl = document.createElement("p");
    priceEl.className = "text-xl font-bold mt-4 mb-2";
    priceEl.textContent = `$${product.price}`;
    card.appendChild(priceEl);
    const button = document.createElement("button");
    button.className = `bg-${product.hasCart ? "white" : "black"} text-${product.hasCart ? "black" : "white"} px-4 py-2 rounded-md hover:${product.hasCart ? "bg-gray-200" : "bg-gray-800"} transition-colors duration-200 border border-black`;
    button.textContent = product.hasCart ? "Remove Bascet" : "Add to Basket";
    button.addEventListener("click", (e) => {
      e.stopPropagation(), addToCartShop(product, product.hasCart);
    });
    card.appendChild(button);
    gridContainer.appendChild(card);
  });
}
renderShop();
