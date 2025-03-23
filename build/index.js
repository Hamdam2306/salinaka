// src/db.ts
var products = [
  {
    id: "0af16e20-bc45-4595-a9be-6b237eef53fa",
    name: "Nightmare Abbey",
    price: 77,
    category: "Betsin Maalat",
    imageUrl: "https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg",
    description: "New Towels model with 62 GB RAM, 113 GB storage, and entire features",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "69a6c8dc-8359-4de2-a0c1-2267b15d9747",
    name: "The Diary of a Young Girl",
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
    imageUrl: "https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg",
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
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0DL0LLJp4yrN_JvDkl4KNoDOQIanv7QlWg&s",
    description: "Ergonomic Fish made with Rubber for all-day cuddly support",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "582860e5-ca15-4caa-8d6d-634f9a42bce0",
    name: "Ruth Fielding in Alaska",
    price: 154,
    category: "Betsin Maalat",
    imageUrl: "https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg",
    description: "Introducing the Lebanon-inspired Cheese, blending grumpy style with local craftsmanship",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "a67b945c-e080-491b-9851-c2e3e26f7970",
    name: "Of Mice and Men",
    price: 228,
    category: "Salt",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0DL0LLJp4yrN_JvDkl4KNoDOQIanv7QlWg&s",
    description: "Ergonomic Car made with Wooden for all-day unwieldy support",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "3df7c17a-07d5-49c8-9ec1-7fc82097fa43",
    name: "Harry Potter and the Sorcerer's Stone",
    price: 257,
    category: "Betsin Maalat",
    imageUrl: "https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg",
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
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0DL0LLJp4yrN_JvDkl4KNoDOQIanv7QlWg&s",
    description: "Experience the olive brilliance of our Sausages, perfect for agitated environments",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "a9895bf0-b144-4e7b-aea8-6897c34dfcc0",
    name: "Brave New World",
    price: 61,
    category: "Betsin Maalat",
    imageUrl: "https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg",
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
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0DL0LLJp4yrN_JvDkl4KNoDOQIanv7QlWg&s",
    description: "Professional-grade Pizza perfect for pretty training and recreational use",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "77d1e43b-0414-453f-abb1-4a3fb1d37422",
    name: "The Heart is a Lonely Hunter",
    price: 22,
    category: "Betsin Maalat",
    imageUrl: "https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg",
    description: "The sleek and hasty Table comes with olive LED lighting for smart functionality",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "17415490-e038-44cd-8853-31f0368f91d1",
    name: "The Handmaid's Tale",
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
    id: "3d7e5584-40e9-4a8c-b4ed-5698e181462d",
    name: "The Wonderful Wizard of Oz",
    price: 108,
    category: "Betsin Maalat",
    imageUrl: "https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg",
    description: "Introducing the Cape Verde-inspired Shirt, blending enraged style with local craftsmanship",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "1c39b7da-03fb-454a-8c48-6ececf268950",
    name: "Absalom, Absalom!",
    price: 229,
    category: "Salt",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0DL0LLJp4yrN_JvDkl4KNoDOQIanv7QlWg&s",
    description: "Ergonomic Shirt made with Ceramic for all-day common support",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "a0bae6bb-d97e-4e53-9b09-161e06f00157",
    name: "The Enchanted April",
    price: 101,
    category: "Betsin Maalat",
    imageUrl: "https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg",
    description: "The blue Cheese combines Holy See (Vatican City State) aesthetics with Arsenic-based durability",
    quantity: 1,
    size: "36mm",
    hasCart: false
  },
  {
    id: "e0ac8e45-92e6-4d93-9b56-53f416f32aa2",
    name: "The Stand",
    price: 267,
    category: "Salt",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0DL0LLJp4yrN_JvDkl4KNoDOQIanv7QlWg&s",
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
    });
  });
  cart = [];
  renderCart();
}

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
    console.log(total);
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

// src/detail.ts
function renderProductDetail(product) {
  document.body.innerHTML = "";
  document.body.className = "max-w-5xl m-auto bg-gray-100 p-4 md:p-10";
  const backLink = document.createElement("a");
  backLink.href = "#";
  backLink.textContent = "← Back to shop";
  backLink.className = "text-blue-600 hover:text-blue-800 mb-4 inline-block";
  backLink.addEventListener("click", () => renderShop());
  document.body.appendChild(backLink);
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
  document.body.className = "min-h-screen bg-gray-100 p-4 md:p-10";
  const cart2 = document.createElement("button");
  cart2.textContent = "Cart (test)";
  cart2.className = "bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200";
  cart2.addEventListener("click", () => renderCart());
  document.body.appendChild(cart2);
  const gridContainer = document.createElement("div");
  gridContainer.className = "grid grid-rows-2 grid-cols-5 gap-6";
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
    priceEl.className = "text-xl font-bold mt-2";
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
