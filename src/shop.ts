import { renderCart } from "./cart";
import { products } from "./db";
import { renderProductDetail } from "./detail";
import { addToCartShop } from "./utility";

export function renderShop() {
  document.body.innerHTML = "";
  document.body.className = "min-h-screen bg-gray-100 p-4 md:p-10";
  const cart = document.createElement("button");
  cart.textContent = "Cart (test)";
  cart.className =
    "bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200";
  cart.addEventListener("click", () => renderCart());
  document.body.appendChild(cart);

  const gridContainer = document.createElement("div");
  gridContainer.className = "grid grid-rows-2 grid-cols-5 gap-6";
  document.body.appendChild(gridContainer);


  products.forEach((product) => {
    const card = document.createElement("div");
    card.className =
      "bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center";
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
    button.className = `bg-${product.hasCart ? "white" : "black"} text-${
      product.hasCart ? "black" : "white"
    } px-4 py-2 rounded-md hover:${
      product.hasCart ? "bg-gray-200" : "bg-gray-800"
    } transition-colors duration-200 border border-black`;
    button.textContent = product.hasCart ? "Remove Bascet" : "Add to Basket";

    button.addEventListener("click", (e) => {
      e.stopPropagation(), addToCartShop(product, product.hasCart);
    });

    card.appendChild(button);

    gridContainer.appendChild(card);
  });
}

renderShop();
