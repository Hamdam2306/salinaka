import type { Product } from "./types";
import { addToCart } from "./utility";
import { renderShop } from "./shop";
import { renderCart } from "./cart";
import { createNavbar } from "./navbar2";

export function renderProductDetail(product: Product) {
  document.body.innerHTML = "";
  createNavbar();

  document.body.className = "max-w-8xl m-auto bg-gray-100 p-4 md:p-10";

  const flexwrap = document.createElement("div");
  flexwrap.className = "flex justify-between items-center mb-4";

  // const backLink = document.createElement("a");
  // backLink.textContent = "← Back to shop";
  // backLink.className =
  //   "text-blue-900 hover:text-blue-400 mb-4 inline-block text-xl";
  // backLink.addEventListener("click", () => renderShop());
  // document.body.appendChild(backLink);

  // const cart = document.createElement("button");
  // cart.textContent = "Cart (test)";
  // cart.className =
  //   "bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200";
  // cart.addEventListener("click", () => renderCart());
  // document.body.appendChild(cart);

  // flexwrap.appendChild(backLink);
  // flexwrap.appendChild(cart);

  document.body.appendChild(flexwrap);

  const container = document.createElement("div");
  container.className =
    "flex flex-col md:flex-row gap-8 bg-white p-6 rounded-md shadow-md";
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

  for (let i = 0; i < 3; i++) {
    const thumb = document.createElement("img");
    thumb.src = product.imageUrl;
    thumb.alt = `${product.name} thumbnail ${i + 1}`;
    thumb.className =
      "w-16 h-16 object-cover rounded cursor-pointer border border-gray-200";
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
    colorCircle.className =
      "w-6 h-6 rounded-full cursor-pointer border border-gray-200";
    colorCircle.style.backgroundColor = color;
    colorCircle.addEventListener("click", () => {});
    colorsContainer.appendChild(colorCircle);
  });

  const priceEl = document.createElement("p");
  priceEl.className = "text-3xl font-bold mb-4";
  priceEl.textContent = `$${product.price}`;
  rightSide.appendChild(priceEl);

  const addButton = document.createElement("button");
  addButton.className = `bg-${product.hasCart ? "white" : "black"} text-${
    product.hasCart ? "black" : "white"
  } px-4 py-2 rounded-md hover:${
    product.hasCart ? "bg-gray-200" : "bg-gray-800"
  } transition-colors duration-200 border border-black`;
  addButton.textContent = product.hasCart
    ? "Remove from Bascet"
    : "Add to Basket";
  addButton.addEventListener("click", () =>
    addToCart(product, product.hasCart)
  );
  rightSide.appendChild(addButton);
}
